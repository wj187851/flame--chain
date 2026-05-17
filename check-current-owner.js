const ethers = require('ethers');

async function main() {
    console.log('🔍 检查当前Owner余额...\n');
    
    const provider = new ethers.JsonRpcProvider('https://bsc.publicnode.com');
    
    const currentOwner = "0x1351Ceb6687063B8271e4898AC38055E361a2F27";
    const oldOwner = "0xb0b3ACd8D80Cf31Ea4c14e65D55F18B72077C79E";
    
    console.log('👤 当前Owner地址:', currentOwner);
    const balance1 = await provider.getBalance(currentOwner);
    console.log('💰 当前Owner BNB余额:', ethers.formatEther(balance1), 'BNB');
    
    console.log('\n👤 旧Owner地址:', oldOwner);
    const balance2 = await provider.getBalance(oldOwner);
    console.log('💰 旧Owner BNB余额:', ethers.formatEther(balance2), 'BNB');
    
    console.log('\n✅ 检查完成！');
    console.log('\n💡 好消息：当前Owner是我们有私钥的地址！');
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
