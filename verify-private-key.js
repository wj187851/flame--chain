const ethers = require('ethers');

async function main() {
    console.log('🔍 验证私钥...\n');
    
    const privateKeyFromConfig = "0x574fbceaf9ddaba91eac8d484c7c3aff97ccb57b2f6ca4ccc095a02091276b96";
    
    // 从私钥生成钱包
    const wallet = new ethers.Wallet(privateKeyFromConfig);
    console.log('📋 配置文件中的私钥:');
    console.log('   私钥:', privateKeyFromConfig);
    console.log('   地址:', wallet.address);
    
    const currentOwner = "0x1351Ceb6687063B8271e4898AC38055E361a2F27";
    const oldOwner = "0xb0b3ACd8D80Cf31Ea4c14e65D55F18B72077C79E";
    
    console.log('\n👤 当前Owner地址:', currentOwner);
    console.log('   匹配:', wallet.address.toLowerCase() === currentOwner.toLowerCase() ? '✅ 是！' : '❌ 否');
    
    console.log('\n👤 旧Owner地址:', oldOwner);
    console.log('   匹配:', wallet.address.toLowerCase() === oldOwner.toLowerCase() ? '✅ 是！' : '❌ 否');
    
    console.log('\n📊 总结:');
    console.log('   ✅ 有当前Owner的私钥');
    console.log('   ❌ 没有旧Owner的私钥');
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
