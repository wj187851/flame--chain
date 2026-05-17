# 🔥 Flame Project - 火焰挖矿项目

一个基于BNB链的区块链挖矿项目，具有推荐奖励机制。

## 项目特性

- ✅ 每日挖矿2次，每次支付0.008 BNB
- ✅ 每次挖矿获得1000 FLAME代币
- ✅ 倒计时功能
- ✅ 直推奖励200 FLAME
- ✅ 间推奖励100 FLAME
- ✅ 总发行10亿枚代币
- ✅ 挖矿奖励5亿枚，预留5亿枚
- ✅ 高级UI设计
- ✅ 国际版支持（中英双语）
- ✅ 显示总矿工人数

## 项目结构

```
.
├── contracts/
│   └── FlameToken.sol      # 智能合约
├── frontend/
│   ├── css/
│   │   └── style.css       # 样式文件
│   └── js/
│       └── app.js          # 应用逻辑
├── index.html              # 主页面
├── package.json            # 项目配置
└── README.md
```

## 部署步骤

### 1. 安装依赖

确保你已安装 Node.js 和 npm。

### 2. 部署智能合约

使用 Hardhat、Truffle 或 Remix 部署合约：

**使用 Remix IDE:**
1. 打开 https://remix.ethereum.org
2. 将 `contracts/FlameToken.sol` 内容粘贴进去
3. 安装 OpenZeppelin 依赖
4. 编译并部署到 BNB 链（主网或测试网）
5. 复制合约地址

### 3. 更新前端配置

编辑 `frontend/js/app.js`，将 `YOUR_CONTRACT_ADDRESS_HERE` 替换为你部署的合约地址：

```javascript
const CONTRACT_ADDRESS = "0xYOUR_DEPLOYED_CONTRACT_ADDRESS";
```

### 4. 运行项目

```bash
npm run dev
```

然后在浏览器中打开 http://localhost:8080

## 智能合约功能

| 功能 | 说明 |
|------|------|
| `mine(address _referrer)` | 执行挖矿，可选传入推荐人 |
| `getUserInfo(address user)` | 获取用户信息（余额、今日挖矿数、推荐数、推荐人） |
| `getNextMineTime()` | 获取下次可挖矿时间 |
| `totalMiners()` | 获取总矿工人数 |

## 代币经济学

- **总供应量:** 1,000,000,000 FLAME
- **挖矿奖励:** 500,000,000 FLAME (50%)
- **预留:** 500,000,000 FLAME (50%)

## 挖矿参数

- **每次成本:** 0.008 BNB
- **每次奖励:** 1,000 FLAME
- **每日限制:** 2次
- **直推奖励:** 200 FLAME/次
- **间推奖励:** 100 FLAME/次

## 技术栈

- Solidity ^0.8.19
- OpenZeppelin Contracts
- Ethers.js v5
- HTML5 + CSS3 + JavaScript
- BNB Chain

## 安全提示

- 审计合约后再主网部署
- 使用多重签名管理预留资金
- 测试网充分测试
