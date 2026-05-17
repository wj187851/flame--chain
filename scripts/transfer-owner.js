const { ethers } = require('hardhat');

async function main() {
    console.log('🔄 转移合约所有权...\n');
    
    const contractAddress = "0x172D0D5bDD50B0EF9224F913fF3fE85ff24587A4";
    const newOwner = "0xb0b3ACd8D80Cf31Ea4c14e65D55F18B72077C79E";
    
    console.log('📄 合约地址:', contractAddress);
    console.log('👤 新 Owner:', newOwner);
    console.log('');
    
    const FlameToken = await ethers.getContractFactory("FlameToken");
    const contract = FlameToken.attach(contractAddress);
    
    // 获取当前 owner
    const currentOwner = await contract.owner();
    console.log('👤 当前 Owner:', currentOwner);
    
    if (currentOwner.toLowerCase() === newOwner.toLowerCase()) {
        console.log('✅ 已经是这个 Owner 了，无需转移！');
        return;
    }
    
    // 转移所有权
    console.log('⏳ 正在转移...');
    const tx = await contract.transferOwnership(newOwner);
    console.log('📝 交易哈希:', tx.hash);
    
    await tx.wait();
    
    // 验证
    const updatedOwner = await contract.owner();
    console.log('✅ 转移成功！');
    console.log('👤 新 Owner:', updatedOwner);
    console.log('\n💡 现在挖矿的 BNB 会转到新 Owner 地址了！');
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
