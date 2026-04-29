🌀 异世界美食超市 (Isekai Grocery App)一个结合「异世界冒险 + 游戏化探索 + 电商社交」的全栈移动端应用。旨在为用户提供沉浸式的虚构食材购物体验，并通过探索机制增强用户粘性。
🛠️ 技术栈选型本项目采用现代全栈架构，重点解决跨平台体验与高性能 API 交互。
移动端 (Mobile)技术说明React Native (Expo)跨平台开发，快速迭代与真机调试
TypeScript强化类型安全，减少复杂业务逻辑中的 BugNativeWind基于 Tailwind CSS 的移动端样式方案
Zustand轻量级状态管理，处理购物车与用户体力值React Navigation处理首页、探索、超市等模块的路由跳转后端 & 数据库 (Backend)技术说明
Next.js 15 (App Router)利用 API Routes 作为后端服务，支持 SSR/ISRMongoDB + Mongoose文档型数据库，完美适配商品 SKU 与动态社交内容JWT无状态身份认证机制Cloudinary / OSS处理异界食材图片与用户动态图片上传
🏗️ 核心业务架构
┌─────────────────────────────────────────────────────────────────┐
│              移动端 (React Native + Expo)                        │
├─────────────────────────────────────────────────────────────────┤
│ ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐     │
│ │   探险页   │ │   超市页   │ │   社交页   │ │   个人中心 │     │
│ │ (游戏逻辑) │ │ (电商逻辑) │ │ (内容分发) │ │ (数据管理) │     │
│ └────────────┘ └────────────┘ └────────────┘ └────────────┘     │
│                        ▲                                        │
│                        │ HTTP / REST API                        │
│                        ▼                                        │
├─────────────────────────────────────────────────────────────────┤
│               Next.js API Routes (Serverless)                   │
├─────────────────────────────────────────────────────────────────┤
│ ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐     │
│ │ 探索控制层 │ │ 商品/订单层│ │ 社交/评论层│ │ 用户/权限层│     │
│ └────────────┘ └────────────┘ └────────────┘ └────────────┘     │
│                        │                                        │
│           ┌────────────┴────────────┐                           │
│           ▼                         ▼                           │
│      MongoDB Atlas            图片/对象存储                      │
└─────────────────────────────────────────────────────────────────┘

📁 项目目录结构Plaintextisekai_grocery/
/                       # 整个项目的根目录
│
├── .gitignore          # 忽略 mobile 和 server 的 node_modules
├── package.json        # 根目录 package，用于管理整个 monorepo 的启动脚本
│
├── mobile/             # 原 Expo 项目移动到这里，并升级
│   ├── app.json
│   ├── App.tsx         # 【改动】.jsx -> .tsx
│   ├── babel.config.js
│   ├── package.json
│   ├── tsconfig.json   # 【新增】TS 配置文件
│   │
│   ├── assets/         # 存放静态资源 (图标, 初始图片)
│   │
│   ├── src/            # 【新增】所有源代码都放在 src 下
│   │   ├── api/        # 【新增】服务层
│   │   │   ├── axiosConfig.ts    # 封装 Axios，处理 JWT token 拦截
│   │   │   └── explore.ts         # 专门处理探索相关的 API 请求
│   │   │
│   │   ├── components/ # 【改动】原子化组件
│   │   │   ├── common/           # 通用 UI 组件 (按钮, 输入框)
│   │   │   └── layout/           # 布局组件 (如屏幕安全区包裹)
│   │   │
│   │   ├── constants/  # 【保留并升级】
│   │   │   ├── theme.ts          # 移除了 .jsx
│   │   │   ├── index.ts
│   │   │   └── mockData.ts       # 原 dummy.jsx 改名为此，存放模拟数据
│   │   │
│   │   ├── hooks/      # 【新增】存放复杂的自定义 Hook
│   │   │   └── useEnergy.ts      # 专门处理体力恢复和消耗逻辑的 Hook
│   │   │
│   │   ├── navigation/ # 【新增】路由配置
│   │   │   └── RootNavigator.tsx # 配置 BottomTab 和 Stack
│   │   │
│   │   ├── screens/    # 【改动】按业务模块划分子目录
│   │   │   ├── Home/
│   │   │   │   └── HomeScreen.tsx
│   │   │   ├── Explore/          # 【核心】探索页
│   │   │   │   ├── ExploreScreen.tsx   # 主屏幕
│   │   │   │   ├── components/        # 仅在探索页使用的私有组件
│   │   │   │   │   ├── MapView.tsx    # 地图组件
│   │   │   │   │   └── DropItem.tsx   # 掉落物品动画
│   │   │   │   └── hooks/             # 仅在探索页使用的 hook
│   │   │   ├── Shop/             # 超市页
│   │   │   ├── Community/        # 社交页
│   │   │   └── Profile/          # 个人中心
│   │   │
│   │   ├── store/      # 【新增】Zustand 状态管理
│   │   │   ├── useAuthStore.ts   # 用户登录状态
│   │   │   └── useCartStore.ts   # 购物车状态
│   │   │
│   │   ├── types/      # 【新增】全栈共享的类型定义
│   │   │   └── product.d.ts      # 商品数据结构 TypeScript 定义
│   │   │
│   │   └── utils/      # 【新增】通用工具函数
│   │       └── formatters.ts     # 如：货币格式化、时间格式化
│   │
│   └── (node_modules, .expo 等...)
│
└── server/             # 【新增】Next.js 后端项目
    ├── package.json
    ├── app/
    │   └── api/        # API Routes
    │       ├── auth/   # 登录注册
    │       ├── explore/# 探索掉落逻辑
    │       ├── shop/   # 商品列表
    │       └── order/  # 订单
    │
    ├── lib/            # 工具类
    │   ├── mongodb.ts  # 连接 MongoDB
    │   └── utils.ts
    │
    ├── models/         # Mongoose Schema
    │   ├── User.ts
    │   ├── Product.ts
    │   └── Post.ts
    │
    └── services/       # 业务逻辑服务
        └── exploreService.ts # 专门计算掉落概率的核心逻辑