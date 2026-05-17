const { ethers } = require('hardhat');

async function main() {
    console.log('🔍 检查合约BNB余额...\n');
    
    const contractAddress = "0x172D0D5bDD50B0EF9224F913fF3fE85ff24587A4";
    
    // 获取合约BNB余额
    const balance = await ethers.provider.getBalance(contractAddress);
    console.log('📄 合约地址:', contractAddress);
    console.log('💰 BNB余额:', ethers.formatEther(balance), 'BNB');
    
    console.log('\n✅ 检查完成！');
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
