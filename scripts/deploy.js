const { ethers } = require("hardhat");

async function main() {
  console.log("正在部署 FlameToken 合约...");
  
  const FlameToken = await ethers.getContractFactory("FlameToken");
  const flameToken = await FlameToken.deploy();
  
  await flameToken.waitForDeployment();
  
  const address = await flameToken.getAddress();
  console.log(`✅ FlameToken 合约已部署到: ${address}`);
  console.log(`\n请将此地址更新到 frontend/js/app.js 第1行。`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
