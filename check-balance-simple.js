const { ethers } = require('hardhat');

async function main() {
    console.log('🔍 检查余额...\n');
    
    const contractAddress = "0x172D0D5bDD50B0EF9224F913fF3fE85ff24587A4";
    const ownerAddress = "0xb0b3ACd8D80Cf31Ea4c14e65D55F18B72077C79E";
    
    // 获取合约BNB余额
    const contractBalance = await ethers.provider.getBalance(contractAddress);
    console.log('📄 合约地址:', contractAddress);
    console.log('💰 合约BNB余额:', ethers.formatEther(contractBalance), 'BNB');
    
    // 获取Owner余额
    const ownerBalance = await ethers.provider.getBalance(ownerAddress);
    console.log('\n👤 Owner地址:', ownerAddress);
    console.log('💰 Owner BNB余额:', ethers.formatEther(ownerBalance), 'BNB');
    
    console.log('\n✅ 检查完成！');
    console.log('\n💡 说明：合约每次挖矿时直接把BNB转给Owner了，所以合约本身不存BNB。');
    console.log('💡 BNB应该已经在Owner地址里了。');
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
