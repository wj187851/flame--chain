const ethers = require('ethers');

async function main() {
    console.log('🔍 检查私钥对应地址...\n');
    
    const privateKeyFromConfig = "0x574fbceaf9ddaba91eac8d484c7c3aff97ccb57b2f6ca4ccc095a02091276b96";
    
    // 从私钥生成钱包
    const wallet = new ethers.Wallet(privateKeyFromConfig);
    console.log('📋 配置文件中的私钥对应的地址:', wallet.address);
    
    const ownerAddress = "0xb0b3ACd8D80Cf31Ea4c14e65D55F18B72077C79E";
    console.log('👤 Owner地址:', ownerAddress);
    
    if (wallet.address.toLowerCase() === ownerAddress.toLowerCase()) {
        console.log('\n✅ 找到Owner的私钥了！');
        console.log('🔑 私钥:', privateKeyFromConfig);
    } else {
        console.log('\n❌ 配置文件中的私钥不是Owner地址的私钥');
        console.log('💡 Owner地址的私钥需要你自己提供');
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
