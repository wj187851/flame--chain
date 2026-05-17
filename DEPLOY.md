# 🌐 网站部署指南 - 长久连接

## ✅ 已完成
- Git仓库已初始化
- 代码已提交到本地仓库
- .gitignore已配置

---

## 🎯 部署方案选择

### 方案一：Vercel（推荐，最快速）

**优点**：
- ✅ 完全免费
- ✅ HTTPS自动配置
- ✅ 一键部署
- ✅ 全球CDN加速
- ✅ 自动部署更新

**步骤**：
1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 "New Project"
4. 导入你的 Flame 仓库
5. 配置部署设置：
   - Framework Preset: `Other`
   - Root Directory: `./`
6. 点击 "Deploy"
7. 等待几分钟，获得永久链接！

**示例链接**：`https://flame-token.vercel.app`

---

### 方案二：Netlify

**优点**：
- ✅ 完全免费
- ✅ 支持拖拽部署
- ✅ HTTPS自动配置
- ✅ 表单处理功能

**步骤**：
1. 访问 [netlify.com](https://netlify.com)
2. 注册/登录
3. 点击 "Add new site" → "Deploy manually"
4. 将整个项目文件夹拖拽上传
5. 等待部署完成
6. 在 "Site settings" 中可以自定义域名

---

### 方案三：GitHub Pages

**优点**：
- ✅ 完全免费
- ✅ 与GitHub集成
- ✅ 永久链接

**步骤**：
1. 在 GitHub 创建新仓库
2. 推送本地代码到 GitHub：
   ```bash
   git remote add origin https://github.com/你的用户名/你的仓库名.git
   git branch -M main
   git push -u origin main
   ```
3. 进入仓库 Settings → Pages
4. Source 选择 `Deploy from a branch`
5. Branch 选择 `main`，目录选择 `/ (root)`
6. 点击 Save，等待几分钟

**示例链接**：`https://你的用户名.github.io/你的仓库名`

---

## 📂 部署文件说明

不需要构建！直接部署以下文件：
- `index.html` - 主页面
- `frontend/` - 前端资源
- `single.html`, `legal.html`, `privacy.html`, `terms.html` - 其他页面

其他文件（contracts/, scripts/, hardhat.config.js等）不会被部署，因为它们只用于合约开发。

---

## 🔒 安全提醒

- 不要在公开仓库中暴露私钥！
- hardhat.config.js 中的私钥已在 .gitignore 中忽略
- 确保 .gitignore 正确配置

---

## 🎉 部署后

部署完成后，你将获得：
- 永久HTTPS链接
- 全球访问的网站
- 自动更新（如果使用 Git 集成）

需要帮助？选择一个方案，我可以提供更详细的指导！
