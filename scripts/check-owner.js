const { ethers } = require('hardhat');

async function main() {
    console.log('🔍 检查合约信息...\n');
    
    const contractAddress = "0x172D0D5bDD50B0EF9224F913fF3fE85ff24587A4";
    
    const FlameToken = await ethers.getContractFactory("FlameToken");
    const contract = FlameToken.attach(contractAddress);
    
    console.log('📄 合约地址:', contractAddress);
    
    // 获取 owner
    try {
        const owner = await contract.owner();
        console.log('👤 合约 Owner:', owner);
        console.log('   是否匹配 0xb0b3ACd8D80Cf31Ea4c14e65D55F18B72077C79E:', 
            owner.toLowerCase() === '0xb0b3acdd880cf31ea4c14e65d55f18b72077c79e'.toLowerCase() ? '✅ 是！' : '❌ 否');
    } catch (e) {
        console.log('⚠️  无法获取 owner:', e.message);
    }
    
    // 获取其他信息
    try {
        const miners = await contract.totalMiners();
        console.log('👥 总矿工数:', miners.toString());
    } catch (e) {
        console.log('⚠️  无法获取矿工数:', e.message);
    }
    
    try {
        const cost = await contract.mineCost();
        console.log('💰 挖矿费用:', ethers.utils.formatEther(cost), 'BNB');
    } catch (e) {
        console.log('⚠️  无法获取挖矿费用:', e.message);
    }
    
    console.log('\n✅ 检查完成！');
    console.log('\n💡 挖矿时支付的 BNB 会自动转到 Owner 地址！');
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
