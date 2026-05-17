const ethers = require('ethers');

async function main() {
    console.log('🔍 检查地址类型...\n');
    
    const provider = new ethers.JsonRpcProvider('https://bsc.publicnode.com');
    
    const address = "0xb0b3ACd8D80Cf31Ea4c14e65D55F18B72077C79E";
    
    console.log('📍 检查地址:', address);
    
    // 获取地址的代码
    const code = await provider.getCode(address);
    
    if (code === '0x') {
        console.log('✅ 这是一个普通地址（EOA - 外部拥有账户）');
        console.log('💡 没有合约代码');
    } else {
        console.log('🚀 这是一个合约地址');
        console.log('📝 合约代码长度:', (code.length - 2) / 2, '字节');
    }
    
    // 再查一下余额
    const balance = await provider.getBalance(address);
    console.log('\n💰 BNB余额:', ethers.formatEther(balance), 'BNB');
    
    console.log('\n✅ 检查完成！');
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
