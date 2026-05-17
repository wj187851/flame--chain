const CONTRACT_ADDRESS = "0x172D0D5bDD50B0EF9224F913fF3fE85ff24587A4";

const CONTRACT_ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "allowance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "needed",
        "type": "uint256"
      }
    ],
    "name": "ERC20InsufficientAllowance",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "needed",
        "type": "uint256"
      }
    ],
    "name": "ERC20InsufficientBalance",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "approver",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidApprover",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidReceiver",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidSender",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "ERC20InvalidSpender",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "OwnableInvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "BNBDeposit",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "BNBWithdraw",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Mine",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "referrer",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "level",
        "type": "uint8"
      }
    ],
    "name": "ReferralReward",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "DAILY_MINE_LIMIT",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MINE_COST",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MINE_REWARD",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MINING_REWARD_POOL",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "REFERRAL_LEVELS",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "RESERVED_SUPPLY",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "TOTAL_SUPPLY",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "dailyMineCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "dailyMines",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getNextMineTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "getReferralRewards",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "totalReward",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "getUserInfo",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "todayMined",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalReferrals",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "referrerAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "totalDownline",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "hasMined",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "lastMineDay",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_referrer",
        "type": "address"
      }
    ],
    "name": "mine",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "mineCost",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "miningRewardDistributed",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "referralRewardPercentages",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "referrals",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "referrer",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalMiners",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "totalReferralCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

let provider = null;
let signer = null;
let contract = null;
let userAddress = null;

function getUrlParam(param) {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(param);
}

async function connectWallet() {
	if (typeof window.ethereum === 'undefined') {
		alert('请安装MetaMask钱包\n\n手机用户可使用MetaMask App浏览器打开');
		return;
	}

	try {
		const mineBtn = document.getElementById('mineBtn');
		const connectBtn = document.getElementById('connectWallet');
		
		connectBtn.disabled = true;
		connectBtn.innerHTML = `<span class="btn-icon">⏳</span><span class="btn-text">连接中...</span>`;
		
		await window.ethereum.request({ method: 'eth_requestAccounts' });
		provider = new ethers.providers.Web3Provider(window.ethereum);
		signer = provider.getSigner();
		userAddress = await signer.getAddress();
		
		contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
		
		connectBtn.innerHTML = `<span class="btn-icon">✅</span><span class="btn-text">${userAddress.slice(0, 6)}...${userAddress.slice(-4)}</span>`;
		connectBtn.disabled = false;
		mineBtn.disabled = false;
		
		updateStats();
		updateReferralLink();
		
		window.ethereum.on('accountsChanged', () => location.reload());
		window.ethereum.on('chainChanged', () => location.reload());
		
	} catch (error) {
		console.error(error);
		const connectBtn = document.getElementById('connectWallet');
		connectBtn.disabled = false;
		connectBtn.innerHTML = `<span class="btn-icon">⚡</span><span class="btn-text">连接钱包</span>`;
		alert('连接钱包失败，请重试');
	}
}

async function updateStats() {
	if (contract) {
		try {
			const miners = await contract.totalMiners();
			document.getElementById('totalMiners').textContent = miners.toNumber();
			document.getElementById('totalMinersBar').textContent = miners.toNumber();
		} catch (error) {
			console.error('获取矿工人数失败:', error);
		}
	}
	
	if (!contract || !userAddress) return;
	
	try {
		try {
			const balance = await contract.balanceOf(userAddress);
			const formattedBalance = ethers.utils.formatUnits(balance, 18);
			document.getElementById('userBalanceBar').textContent = parseFloat(formattedBalance).toFixed(2);
		} catch (e) {
			console.error('获取余额失败:', e);
		}
		
		let todayMines = 0;
		try {
			const mines = await contract.dailyMines(userAddress);
			todayMines = mines.toNumber();
			document.getElementById('todayMinedBar').textContent = `${todayMines}/2`;
		} catch (e) {
			console.error('获取今日挖矿次数失败:', e);
		}
		
		try {
			const userInfo = await contract.getUserInfo(userAddress);
			const totalDownline = userInfo.totalDownline.toNumber();
			const totalReferralsElement = document.getElementById('totalReferrals');
			if (totalReferralsElement) {
				totalReferralsElement.textContent = totalDownline;
			}
		} catch (e) {
			console.error('获取推广人数失败:', e);
		}
		
		const mineBtn = document.getElementById('mineBtn');
		if (todayMines >= 2) {
			mineBtn.disabled = true;
			mineBtn.innerHTML = `<span class="btn-icon">🔒</span><span class="btn-text">今日已完成</span>`;
		} else {
			mineBtn.disabled = false;
			mineBtn.innerHTML = `<span class="btn-icon">⚡</span><span class="btn-text">开始挖矿</span>`;
		}
		
	} catch (error) {
		console.error('更新数据失败:', error);
	}
}

function updateReferralLink() {
	if (!userAddress) return;
	const referralLink = `${window.location.origin}${window.location.pathname}?ref=${userAddress}`;
	document.getElementById('referralLink').value = referralLink;
}

async function mine() {
	if (!window.ethereum) {
		alert('请先安装MetaMask钱包！\n\n手机用户请使用MetaMask App浏览器打开');
		return;
	}
	
	if (!userAddress || !contract) {
		alert('请先连接钱包！');
		connectWallet();
		return;
	}
	
	const mineBtn = document.getElementById('mineBtn');
	const originalHTML = mineBtn.innerHTML;
	
	try {
		mineBtn.disabled = true;
		mineBtn.innerHTML = `<span class="btn-icon">⏳</span><span class="btn-text">挖矿中...</span>`;
		
		const referrer = getUrlParam('ref') || '0x0000000000000000000000000000000000000000';
		
		// 尝试获取挖矿费用，如果失败则使用默认值
		let cost;
		try {
			cost = await contract.mineCost();
			console.log('挖矿费用:', ethers.utils.formatEther(cost), 'BNB');
		} catch (e) {
			console.log('mineCost方法不存在，使用默认费用 0.008 BNB');
			cost = ethers.utils.parseEther('0.008');
		}
		
		const tx = await contract.mine(referrer, { value: cost });
		console.log('交易哈希:', tx.hash);
		
		mineBtn.innerHTML = `<span class="btn-icon">⏳</span><span class="btn-text">确认中...</span>`;
		await tx.wait();
		
		alert('🎉 挖矿成功！\n\n您已获得1000 FLAME代币');
		updateStats();
		
	} catch (error) {
		console.error('挖矿错误详情:', error);
		
		if (error.code === 4001) {
			alert('您已取消交易');
		} else if (error.message && error.message.includes('insufficient')) {
			alert('BNB余额不足，请充值');
		} else if (error.message && error.message.includes('reverted')) {
			alert('合约执行失败\n\n可能原因：\n1. 今日已挖满2次\n2. 合约地址不正确\n3. 网络问题');
		} else {
			alert('挖矿失败，请重试\n\n' + (error.message || '未知错误'));
		}
	} finally {
		mineBtn.disabled = false;
		mineBtn.innerHTML = originalHTML;
	}
}

function copyReferralLink() {
	const linkInput = document.getElementById('referralLink');
	
	if (!userAddress) {
		alert('请先连接钱包！');
		return;
	}
	
	linkInput.select();
	
	if (navigator.clipboard && navigator.clipboard.writeText) {
		navigator.clipboard.writeText(linkInput.value).then(() => {
			showCopySuccess();
		}).catch(() => {
			document.execCommand('copy');
			showCopySuccess();
		});
	} else {
		document.execCommand('copy');
		showCopySuccess();
	}
}

function showCopySuccess() {
	const copyBtn = document.getElementById('copyReferral');
	const originalHTML = copyBtn.innerHTML;
	copyBtn.innerHTML = `<span class="copy-icon">✅</span><span class="copy-text">已复制</span>`;
	
	setTimeout(() => {
		copyBtn.innerHTML = originalHTML;
	}, 2000);
}

function updateCountdown() {
	const now = new Date();
	const tomorrow = new Date(now);
	tomorrow.setDate(tomorrow.getDate() + 1);
	tomorrow.setHours(0, 0, 0, 0);
	
	const diff = tomorrow - now;
	
	if (diff <= 0) {
		document.getElementById('countdown').textContent = '00:00:00';
		return;
	}
	
	const hours = Math.floor(diff / (1000 * 60 * 60));
	const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((diff % (1000 * 60)) / 1000);
	
	const formatted = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
	document.getElementById('countdown').textContent = formatted;
}

document.addEventListener('DOMContentLoaded', () => {
	const connectBtn = document.getElementById('connectWallet');
	const connectBtnBottom = document.getElementById('connectWalletBottom');
	const mineBtn = document.getElementById('mineBtn');
	const copyReferralBtn = document.getElementById('copyReferral');
	
	if (connectBtn) {
		connectBtn.addEventListener('click', connectWallet);
	}
	if (connectBtnBottom) {
		connectBtnBottom.addEventListener('click', connectWallet);
	}
	if (mineBtn) {
		mineBtn.addEventListener('click', mine);
	}
	if (copyReferralBtn) {
		copyReferralBtn.addEventListener('click', copyReferralLink);
	}
	
	updateCountdown();
	setInterval(updateCountdown, 1000);
});
