#!/bin/bash

echo "🔍 查找包含私钥的提交..."
git log --grep="0x574fbceaf9ddaba91eac8d484c7c3aff97ccb57b2f6ca4ccc095a02091276b96" --oneline

echo -e "\n📋 使用 git filter-branch 清理历史..."

# 创建一个临时文件用于替换
cat > replace.txt << 'EOF'
0x574fbceaf9ddaba91eac8d484c7c3aff97ccb57b2f6ca4ccc095a02091276b96
PRIVATE_KEY_REMOVED
EOF

# 使用 filter-branch 清理所有提交中的私钥
git filter-branch --tree-filter '
  if [ -f "hardhat.config.js" ]; then
    sed -i.bak "s/0x574fbceaf9ddaba91eac8d484c7c3aff97ccb57b2f6ca4ccc095a02091276b96/PRIVATE_KEY_REMOVED/g" hardhat.config.js 2>/dev/null || true
    rm -f hardhat.config.js.bak 2>/dev/null || true
  fi
' -- --all

echo -e "\n✅ 清理完成！"
echo -e "\n⚠️  现在需要强制推送到远程仓库"
echo "git push --force --all"
