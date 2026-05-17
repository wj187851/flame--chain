# 智能合约安全审计报告

## 合约信息
- 合约名称: FlameToken
- 版本: Solidity 0.8.20
- 使用库: OpenZeppelin

---

## 🔴 严重问题

### 1. 推荐奖励金额设计错误
**位置**: 第36-45行
**问题**: 
```solidity
referralRewardPercentages[0] = 100 * 10^18;  // 不是百分比，是直接100个token
referralRewardPercentages[1] = 50 * 10^18;
// ...
```
**风险**: 每次挖矿需要给10代推荐人分发总计243个token（100+50+30+20+15+10+8+5+3+2），但每次挖矿只给矿工1000个token。更严重的是，合约只铸造了50亿个token用于挖矿，但推荐奖励会快速耗尽这些token。

**建议**: 应该改为按矿工奖励的百分比计算，例如：
```solidity
referralRewardPercentages[0] = 10;  // 10%
referralRewardPercentages[1] = 5;   // 5%
```
然后计算：`rewardAmount = (MINE_REWARD * percentage) / 100;`

---

## 🟡 中等问题

### 2. totalMiners计算逻辑错误
**位置**: 第70-72行
**问题**:
```solidity
if (referrals[msg.sender].length == 0) {
    totalMiners++;
}
```
**风险**: 这个逻辑是看当前用户有没有推荐人，而不是看用户是否是第一次挖矿。应该改为：
```solidity
if (dailyMineCount[msg.sender] == 0) {  // 或者使用其他标记
    totalMiners++;
}
```

### 3. 推荐奖励部分失败处理不当
**位置**: 第98-102行
**问题**: 
```solidity
if (balanceOf(address(this)) >= rewardAmount) {
    _transfer(address(this), currentReferrer, rewardAmount);
    // ...
}
```
**风险**: 如果合约token不够，某一代推荐人就拿不到奖励，但挖矿仍然成功。这会导致用户不满。

**建议**: 要么确保有足够的token，要么整个交易回滚。

### 4. 没有检查msg.value是否等于MINE_COST
**位置**: 第49行
**问题**: 
```solidity
require(msg.value >= MINE_COST, "Insufficient BNB");
```
**风险**: 用户可以发送超过0.008的BNB，多余的也会转给owner。虽然不是漏洞，但用户体验不好。

**建议**: 
```solidity
require(msg.value == MINE_COST, "Incorrect BNB amount");
```

---

## 🟢 低风险问题

### 5. 缺少紧急停止功能
**问题**: 如果合约出现问题，没有办法暂停挖矿。

**建议**: 添加Pausable功能。

### 6. 缺少事件记录BNB转账
**问题**: BNB转给owner时没有记录事件。

**建议**: 添加事件。

---

## ✅ 做得好的地方

1. 使用了OpenZeppelin的安全库
2. Solidity 0.8.20有内置溢出保护
3. 使用了Ownable模式
4. 有适当的事件记录

---

## 📊 总体评分: 6/10

**需要修复的优先级**:
1. 🔴 修复推荐奖励计算逻辑 - 紧急
2. 🟡 修复totalMiners计算 - 高
3. 🟡 修复msg.value检查 - 中
4. 🟢 添加暂停功能 - 低
