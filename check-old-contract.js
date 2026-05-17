const { ethers } = require('hardhat');

async function main() {
    console.log('🔍 检查旧合约信息...\n');
    
    const contractAddress = "0x172D0D5bDD50B0EF9224F913fF3fE85ff24587A4";
    
    // 旧合约的ABI（简化版）
    const abi = [
        "function owner() view returns (address)",
        "function totalMiners() view returns (uint256)",
        "function balanceOf(address) view returns (uint256)"
    ];
    
    const FlameToken = await ethers.getContractFactory(abi);
    const contract = FlameToken.attach(contractAddress);
    
    console.log('📄 合约地址:', contractAddress);
    
    // 检查BNB余额
    const bnbBalance = await ethers.provider.getBalance(contractAddress);
    console.log('💰 合约BNB余额:', ethers.formatEther(bnbBalance), 'BNB');
    
    // 检查Owner
    try {
        const owner = await contract.owner();
        console.log('👤 合约Owner:', owner);
    } catch (e) {
        console.log('⚠️  无法获取Owner');
    }
    
    // 检查总矿工数
    try {
        const miners = await contract.totalMiners();
        console.log('👥 总矿工数:', miners.toString());
    } catch (e) {
        console.log('⚠️  无法获取矿工数');
    }
    
    console.log('\n✅ 检查完成！');
    console.log('\n💡 说明：旧合约每次挖矿时直接把BNB转给Owner了，所以合约本身不存BNB。');
    console.log('💡 BNB应该已经在Owner地址 0xb0b3ACd8D80Cf31Ea4c14e65D55F18B72077C79E 里了。');
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
