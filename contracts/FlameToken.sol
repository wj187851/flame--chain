// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FlameToken is ERC20, Ownable {
    uint256 public constant TOTAL_SUPPLY = 10_0000_0000 * 10^18;
    uint256 public constant MINING_REWARD_POOL = 5_0000_0000 * 10^18;
    uint256 public constant RESERVED_SUPPLY = 5_0000_0000 * 10^18;
    
    uint256 public constant MINE_COST = 0.008 ether;
    uint256 public constant MINE_REWARD = 1000 * 10^18;
    
    uint8 public constant REFERRAL_LEVELS = 10;
    uint256[10] public referralRewardPercentages;
    
    uint256 public constant DAILY_MINE_LIMIT = 2;
    
    uint256 public totalMiners;
    uint256 public miningRewardDistributed;
    mapping(address => bool) public hasMined;
    
    mapping(address => uint256) public lastMineDay;
    mapping(address => uint256) public dailyMineCount;
    mapping(address => address) public referrer;
    mapping(address => address[]) public referrals;
    mapping(address => uint256) public totalReferralCount;
    
    event Mine(address indexed user, uint256 amount);
    event ReferralReward(address indexed referrer, address indexed user, uint256 amount, uint8 level);
    event BNBDeposit(address indexed user, uint256 amount);
    event BNBWithdraw(address indexed owner, uint256 amount);
    
    constructor() ERC20("Sun Token", "SUN") Ownable(msg.sender) {
        _mint(address(this), MINING_REWARD_POOL);
        _mint(owner(), RESERVED_SUPPLY);
        
        referralRewardPercentages[0] = 100;  // 10% (using basis points: 100 = 10%)
        referralRewardPercentages[1] = 50;   // 5%
        referralRewardPercentages[2] = 30;   // 3%
        referralRewardPercentages[3] = 20;   // 2%
        referralRewardPercentages[4] = 15;   // 1.5%
        referralRewardPercentages[5] = 10;   // 1%
        referralRewardPercentages[6] = 8;    // 0.8%
        referralRewardPercentages[7] = 5;    // 0.5%
        referralRewardPercentages[8] = 3;    // 0.3%
        referralRewardPercentages[9] = 2;    // 0.2%
    }
    
    function mine(address _referrer) external payable {
        require(msg.value == MINE_COST, "Incorrect BNB amount");
        
        uint256 today = block.timestamp / 1 days;
        if (lastMineDay[msg.sender] != today) {
            lastMineDay[msg.sender] = today;
            dailyMineCount[msg.sender] = 0;
        }
        
        require(dailyMineCount[msg.sender] < DAILY_MINE_LIMIT, "Daily limit reached");
        
        if (referrer[msg.sender] == address(0) && _referrer != address(0) && _referrer != msg.sender) {
            referrer[msg.sender] = _referrer;
            referrals[_referrer].push(msg.sender);
            _updateTotalReferralCount(_referrer);
        }
        
        uint256 totalRequiredRewards = _calculateTotalRequiredRewards();
        require(balanceOf(address(this)) >= MINE_REWARD + totalRequiredRewards, "Not enough tokens in pool");
        
        _transfer(address(this), msg.sender, MINE_REWARD);
        dailyMineCount[msg.sender]++;
        miningRewardDistributed += MINE_REWARD;
        
        if (!hasMined[msg.sender]) {
            hasMined[msg.sender] = true;
            totalMiners++;
        }
        
        emit Mine(msg.sender, MINE_REWARD);
        
        _distributeReferralRewards(msg.sender);
        
        emit BNBDeposit(msg.sender, msg.value);
        payable(owner()).transfer(msg.value);
        emit BNBWithdraw(owner(), msg.value);
    }
    
    function _updateTotalReferralCount(address _referrer) internal {
        totalReferralCount[_referrer]++;
        address currentReferrer = referrer[_referrer];
        uint8 level = 1;
        while (currentReferrer != address(0) && level < REFERRAL_LEVELS) {
            totalReferralCount[currentReferrer]++;
            currentReferrer = referrer[currentReferrer];
            level++;
        }
    }
    
    function _calculateTotalRequiredRewards() internal view returns (uint256) {
        uint256 total = 0;
        for (uint8 i = 0; i < REFERRAL_LEVELS; i++) {
            total += (MINE_REWARD * referralRewardPercentages[i]) / 1000;
        }
        return total;
    }
    
    function _distributeReferralRewards(address user) internal {
        address currentReferrer = referrer[user];
        uint8 level = 1;
        
        while (currentReferrer != address(0) && level <= REFERRAL_LEVELS) {
            uint256 rewardAmount = (MINE_REWARD * referralRewardPercentages[level - 1]) / 1000;
            if (rewardAmount > 0) {
                _transfer(address(this), currentReferrer, rewardAmount);
                miningRewardDistributed += rewardAmount;
                emit ReferralReward(currentReferrer, user, rewardAmount, level);
            }
            currentReferrer = referrer[currentReferrer];
            level++;
        }
    }
    
    function getUserInfo(address user) external view returns (
        uint256 balance,
        uint256 todayMined,
        uint256 totalReferrals,
        address referrerAddress,
        uint256 totalDownline
    ) {
        uint256 today = block.timestamp / 1 days;
        uint256 mined = lastMineDay[user] == today ? dailyMineCount[user] : 0;
        return (
            balanceOf(user),
            mined,
            referrals[user].length,
            referrer[user],
            totalReferralCount[user]
        );
    }
    
    function getReferralRewards(address user) external view returns (uint256 totalReward) {
        address currentReferrer = user;
        uint8 level = 1;
        while (currentReferrer != address(0) && level <= REFERRAL_LEVELS) {
            uint256 rewardPerReferral = (MINE_REWARD * referralRewardPercentages[level - 1]) / 1000;
            totalReward += rewardPerReferral * referrals[currentReferrer].length;
            currentReferrer = referrer[currentReferrer];
            level++;
        }
        return totalReward;
    }
    
    function mineCost() external pure returns (uint256) {
        return MINE_COST;
    }
    
    function dailyMines(address user) external view returns (uint256) {
        uint256 today = block.timestamp / 1 days;
        return lastMineDay[user] == today ? dailyMineCount[user] : 0;
    }
    
    function getNextMineTime() external view returns (uint256) {
        uint256 today = block.timestamp / 1 days;
        uint256 nextDay = (today + 1) * 1 days;
        return nextDay;
    }
}
