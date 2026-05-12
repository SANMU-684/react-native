<div align="center">
  <h1>🌀 异世界美食超市</h1>
  <p><em>Isekai Grocery — 冒险 × 探索 × 社交 × 电商</em></p>

  <p>
    <img src="https://img.shields.io/badge/React_Native-0.81-61DAFB?logo=react" alt="React Native" />
    <img src="https://img.shields.io/badge/Expo-54-000020?logo=expo" alt="Expo" />
    <img src="https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/MongoDB-8-47A248?logo=mongodb" alt="MongoDB" />
  </p>
</div>

---

## 📖 项目简介

一款融合 **异世界冒险 + 游戏化探索 + 电商社交** 的全栈移动端应用。玩家在异世界中探索掉落稀有食材，在超市中交易买卖，在社区中分享战利品，获得沉浸式的虚构食材购物体验。

---

## 🛠️ 技术栈

### 移动端

| 技术 | 用途 |
|------|------|
| [React Native](https://reactnative.dev/) (Expo SDK 54) | 跨平台 UI |
| [TypeScript](https://www.typescriptlang.org/) | 类型安全 |
| [React Navigation](https://reactnavigation.org/) | 路由导航 |
| Module-level stores | 轻量状态管理（购物车、收藏、浏览记录） |
| [AsyncStorage](https://react-native-async-storage.github.io/) | 本地持久化 |

### 后端

| 技术 | 用途 |
|------|------|
| [Next.js 15](https://nextjs.org/) (App Router) | API Routes 后端服务 |
| [MongoDB Atlas](https://www.mongodb.com/atlas) + [Mongoose](https://mongoosejs.com/) | 文档数据库 |
| [JWT](https://jwt.io/) | 无状态身份认证 |
| Bcrypt | 密码加密 |

---

## 🏗️ 核心架构

```
  ┌──────────────────────────────────────────┐
  │       React Native (Expo) 移动端          │
  │  ┌────────┐ ┌────────┐ ┌──────────┐      │
  │  │ 探险页 │ │ 超市页 │ │ 个人中心  │      │
  │  │(游戏化)│ │(电商)  │ │(收藏/历史)│     │
  │  └────────┘ └────────┘ └──────────┘      │
  └──────────────────────────────────────────┘
                      │  REST API
                      ▼
  ┌──────────────────────────────────────────┐
  │       Next.js API Routes (Serverless)     │
  │  ┌──────┐ ┌──────┐ ┌──────┐ ┌────────┐  │
  │  │auth │ │shop │ │explore│ │order   │  │
  │  └──────┘ └──────┘ └──────┘ └────────┘  │
  └──────────────────────────────────────────┘
                      │
                      ▼
            MongoDB Atlas 云端数据库
```

---

## 📁 项目结构

```
isekai_grocery/
│
├── app/
│   ├── mobile/                  # React Native (Expo) 移动端
│   │   ├── App.tsx              # 入口，ThemeProvider + Navigation
│   │   ├── assets/              # 图片、字体等静态资源
│   │   └── src/
│   │       ├── api/             # API 调用层
│   │       ├── components/      # 通用组件
│   │       │   ├── common/      # Button, NFTCard, HomeHeader ...
│   │       │   └── layout/      # FocusedStatusBar
│   │       ├── constants/       # 主题色、字号、Mock 数据
│   │       ├── context/         # ThemeContext（深色/浅色）
│   │       ├── hooks/           # 自定义 Hooks
│   │       ├── navigation/      # 路由配置 (Tab + Stack)
│   │       ├── screens/         # 页面
│   │       │   ├── Home/        # 首页、详情
│   │       │   ├── Create/      # 创建作品
│   │       │   ├── Explore/     # 探索页
│   │       │   ├── Favorites/   # 收藏页
│   │       │   ├── History/     # 浏览记录页
│   │       │   ├── Profile/     # 个人中心
│   │       │   ├── Share/       # 分享页
│   │       │   └── Shop/        # 超市页
│   │       ├── store/           # 状态管理
│   │       │   ├── useAuthStore.ts
│   │       │   ├── useCartStore.ts
│   │       │   ├── useFavoritesStore.ts
│   │       │   └── useHistoryStore.ts
│   │       ├── types/           # TypeScript 类型定义
│   │       └── utils/           # 工具函数
│   │
│   └── server/                  # Next.js 后端
│       ├── app/api/
│       │   ├── auth/            # 注册 / 登录
│       │   ├── explore/         # 探索掉落
│       │   ├── shop/            # 商品 CRUD
│       │   └── order/           # 下单
│       ├── lib/
│       │   ├── mongodb.ts       # MongoDB 连接
│       │   └── utils.ts
│       ├── models/
│       │   ├── User.ts          # 用户模型
│       │   ├── Product.ts       # 商品模型
│       │   └── Post.ts          # 帖子模型
│       └── services/
│           └── exploreService.ts # 掉落概率算法
│
├── node_modules/
└── README.md
```

---

## 🚀 快速开始

### 环境要求

- Node.js ≥ 18
- npm ≥ 9
- MongoDB Atlas 账号（或本地 MongoDB）

### 1. 克隆项目

```bash
git clone <repo-url>
cd isekai_grocery
```

### 2. 启动后端

```bash
cd app/server
cp .env.example .env.local   # 填入你的 MONGODB_URI
npm install
npm run dev
```

### 3. 启动移动端

```bash
cd app/mobile
npm install
npx expo start --clear --tunnel
```

### 4. 环境变量

在 `app/server/.env.local` 中配置：

```env
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.xxxxx.mongodb.net/dbname
JWT_SECRET=your-secret-key
```

---

## 🎯 核心功能

| 模块 | 功能 |
|------|------|
| 🏠 **首页** | 商品浏览、搜索 |
| 🧭 **探索** | 地图冒险、随机掉落食材 |
| 🛒 **超市** | 商品买卖、下单扣库存 |
| 👤 **个人中心** | 收藏夹、浏览记录、深色模式切换 |
| ✨ **创作** | 发布自己的艺术作品 |
| 💬 **社区** | 分享探索成果、互动交流 |

---

## 📦 API 接口

| 方法 | 路径 | 说明 |
|------|------|------|
| `POST` | `/api/auth` | 注册/登录 |
| `GET` | `/api/shop` | 商品列表 |
| `POST` | `/api/shop` | 创建商品 |
| `POST` | `/api/explore` | 执行探索 |
| `GET` | `/api/explore` | 探索记录 |
| `POST` | `/api/order` | 下单购买 |

---

## 📄 License

MIT
