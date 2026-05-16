# 全栈开发 8 周学习计划（AI 加速版）

> 目标：2 个月后拿到国内一线城市全栈开发实习 offer
> 基础：零基础 | 投入：4-6 小时/天 | 方式：AI Agent 辅助，项目驱动

---

## 前置准备（Day 0）

在开始之前，先完成环境搭建：

- [ ] 安装 Node.js 20 LTS
- [ ] 安装 VS Code（必装插件：ES7+ React snippets, Prettier, Thunder Client, Prisma）
- [ ] 安装 Git，配置 GitHub 账号 + SSH Key
- [ ] 注册 Vercel 账号（前端部署）
- [ ] 注册 Railway 或 Render 账号（后端部署）
- [ ] 安装 Chrome 浏览器 + React DevTools 扩展
- [ ] 在 GitHub 创建学习仓库 `fullstack-journey`，每天 push 代码

---

## 第 1 周：Web 基础 + React 起步

### 目标
建立对前端的基本认知，能看懂和修改 React 组件，完成第一个上线项目。

### Day 1 — HTML + CSS 速通

| 时段 | 内容 | 方式 |
|---|---|---|
| 上午 2h | HTML 文档结构、常用标签（div/span/p/a/img/form/input/button）、语义化标签（header/main/footer/section/article） | MDN 文档 + AI 逐行解释示例代码 |
| 下午 2h | CSS 盒模型、margin/padding/border、Flex 布局（justify-content/align-items/flex-direction）、Grid 基础 | 让 AI 生成 5 种常见布局，你逐行理解后自己改写 |

**产出：** 手写一个 3 栏响应式页面布局（导航栏 + 内容区 + 底部），推到 GitHub

### Day 2 — CSS 进阶 + JavaScript 入门

| 时段 | 内容 | 方式 |
|---|---|---|
| 上午 2h | CSS 定位（relative/absolute/fixed/sticky）、伪类/伪元素、CSS 变量、媒体查询（响应式断点） | 改造 Day1 的页面，加上粘性导航栏、移动端适配 |
| 下午 2h | JS 变量声明（let/const/var）、数据类型（string/number/boolean/array/object/null/undefined）、运算符、条件语句、循环 | AI 出 10 道练习题，你手写然后 AI 批改 |

**产出：** 响应式个人介绍页（桌面端三栏 + 移动端单栏）

### Day 3 — JavaScript 核心

| 时段 | 内容 | 方式 |
|---|---|---|
| 上午 2h | 函数（声明/箭头/参数/返回值/作用域）、数组方法（map/filter/reduce/find/slice/splice） | 让 AI 给你一组真实场景数据，练习数组操作 |
| 下午 2h | 对象（创建/访问/遍历/解构）、DOM 操作（querySelector/createElement/addEventListener）、事件冒泡与委托 | 做一个纯 JS 的计数器 + 购物车列表（无框架） |

**产出：** 一个纯 JS 的待办事项页面（增删改查 + 本地存储）

### Day 4 — JavaScript 异步 + 网络请求

| 时段 | 内容 | 方式 |
|---|---|---|
| 上午 2h | 异步基础：setTimeout/setInterval、回调函数、Promise（then/catch/finally）、async/await | AI 出 5 道 Promise 题目，你手写分析输出顺序 |
| 下午 2h | fetch API、GET/POST 请求、JSON 解析、错误处理（try-catch）、Loading/Error 状态管理 | 对接一个免费公开 API（如 JSONPlaceholder）做一个数据展示页 |

**产出：** 用户列表页（从 API 获取数据，加载中/错误/空数据三种状态）

### Day 5 — 你的第一个 React 项目

| 时段 | 内容 | 方式 |
|---|---|---|
| 上午 2h | React 是什么（声明式/组件化/单向数据流）、Vite 创建项目、JSX 语法、函数组件、props 传参 | AI 搭建脚手架并逐行解释每个文件的作用 |
| 下午 2h | 理解组件树结构，学会拆分组件（页面 → 区块 → 元素） | AI 生成天气查询应用代码，你逐行读懂后改造成查多个城市 |

**核心概念检查（必须能口头解释清楚）：**
- [ ] 什么是组件？为什么要把页面拆成组件？
- [ ] props 是什么？和 HTML 属性有什么区别？
- [ ] JSX 是什么？和 HTML 有什么区别？

**产出：** 天气查询应用（输入城市名 → 查询 → 展示温度/湿度/天气描述）

### Day 6 — React 状态管理

| 时段 | 内容 | 方式 |
|---|---|---|
| 上午 2h | useState 深入：状态不可变性、状态更新是异步的、受控组件（input/select 的值由 state 控制） | 改造天气应用，加入搜索历史列表 |
| 下午 2h | useEffect：副作用概念、依赖数组（空数组/有依赖/无依赖的区别）、清理函数 | 加入页面标题同步、localStorage 持久化搜索历史 |

**核心概念检查：**
- [ ] useState 为什么要返回数组？为什么不能用 `state = newValue`？
- [ ] useEffect 的依赖数组不同写法分别代表什么执行时机？
- [ ] 什么情况下需要在 useEffect 里 return 一个清理函数？

**产出：** 天气应用升级版（多城市切换 + 搜索历史持久化）

### Day 7 — Git + 第一周复盘

| 时段 | 内容 | 方式 |
|---|---|---|
| 上午 2h | Git 工作流：git init/clone、git add .、git commit -m、git push、git branch、git checkout -b、git merge、解决冲突 | 实际操作：把本周所有项目推到 GitHub，创建 README.md |
| 下午 2h | 本周知识图谱整理，写成一篇技术博客/笔记 | 用 AI 帮你梳理知识点，但用自己的话重新组织 |

**第一周检查点：**
- [ ] GitHub 上有 4+ 个仓库，每个都有 README
- [ ] 能口头解释：HTML/CSS/JS 各自负责什么
- [ ] 能口头解释：React 组件、props、useState、useEffect 是什么
- [ ] 能独立创建一个 React 项目并写一个简单组件

---

## 第 2 周：JavaScript 内功 + React 深入

### 目标
深入理解 JS 核心机制和 React 原理，能独立开发中等复杂度前端应用。开始接触 TypeScript。

### Day 8 — 闭包与作用域

| 时段 | 内容 |
|---|---|
| 上午 2h | 作用域链（全局/函数/块级）、变量提升、TDZ（暂时性死区）、闭包的定义与形成条件 |
| 下午 2h | 闭包实战：防抖节流、柯里化、单例模式、私有变量 |

**产出：** 自己实现防抖（debounce）和节流（throttle）函数，写出 10 种闭包场景的代码示例

### Day 9 — this + 原型链

| 时段 | 内容 |
|---|---|
| 上午 2h | this 指向规则（默认/隐式/显式/new/箭头函数）、call/apply/bind 的原理与区别 |
| 下午 2h | 原型链（`__proto__`、prototype、constructor）、原型继承、class 语法糖本质、instanceof 原理 |

**产出：** 手写 call/apply/bind/new 的实现 + 用原型链实现一个简单的继承关系

### Day 10 — 事件循环 + 微任务宏任务

| 时段 | 内容 |
|---|---|
| 上午 2h | 浏览器进程模型、JS 单线程、事件循环机制、调用栈、任务队列、微任务 vs 宏任务执行顺序 |
| 下午 2h | 手写分析 10 道异步执行顺序题（setTimeout + Promise + async/await 混合） |

**核心概念检查：**
- [ ] 为什么 JS 是单线程的？为什么不会卡住？
- [ ] 微任务和宏任务有哪些？谁的优先级高？
- [ ] async/await 和 Promise.then 的执行顺序有什么区别？

**产出：** 5 道自编的异步顺序题（带答案和解析），证明你真正理解了

### Day 11 — React 原理（一）：Hooks 本质

| 时段 | 内容 |
|---|---|
| 上午 2h | Hooks 规则（只在顶层调用/只在函数组件中调用）、为什么需要这个规则（链表存储 state） |
| 下午 2h | AI 带你从零实现一个迷你 useState + useEffect（约 30 行代码），理解闭包 + 链表如何驱动 Hooks |

**产出：** 一份手写 useState 源码 + 流程图，能口头讲清楚 Hooks 的存储和更新机制

### Day 12 — React 原理（二）：渲染机制

| 时段 | 内容 |
|---|---|
| 上午 2h | 虚拟 DOM 是什么、为什么需要它、diff 算法思想（同层比较/key 的作用）、Fiber 架构概念 |
| 下午 2h | React.memo、useMemo、useCallback 的使用场景与滥用陷阱 |

**核心概念检查：**
- [ ] 虚拟 DOM 比真实 DOM 快在哪里？什么情况下不一定快？
- [ ] key 为什么不能用 index？什么情况下可以用 index？
- [ ] useMemo 和 useCallback 的区别？什么时候用？

**产出：** 一篇技术笔记《React 在什么时候会重新渲染？如何避免不必要渲染？》

### Day 13 — TypeScript 速通（一）

| 时段 | 内容 |
|---|---|
| 上午 2h | 类型注解（string/number/boolean/array/object/any/unknown/void/never）、interface vs type、联合类型与交叉类型、字面量类型 |
| 下午 2h | 泛型（基础语法/约束/条件类型）、工具类型（Partial/Required/Pick/Omit/Record/ReturnType） |

**产出：** 写一个纯 TS 的通用工具函数库（deepClone、debounce、throttle、groupBy、pick），全部带完整类型

### Day 14 — TypeScript 速通（二）+ 第二周复盘

| 时段 | 内容 |
|---|---|
| 上午 2h | TS + React 实战：把上周的天气应用用 TypeScript 重写（组件 props 类型、API 返回类型、事件类型） |
| 下午 2h | Week 2 知识图谱 + 本周所有代码整理推 GitHub |

**第二周检查点：**
- [ ] 能口头解释闭包、this、事件循环
- [ ] 能手写 call/apply/bind/new 的简易实现
- [ ] 能口头解释 React 渲染机制和 Hooks 原理
- [ ] 能用 TypeScript 写一个 React 组件并正确定义所有类型

---

## 第 3 周：前端实战 + 状态管理

### 目标
掌握现代前端工程化工具链和状态管理，完成一个复杂前端项目。

### Day 15 — React Router + 多页面应用

| 时段 | 内容 |
|---|---|
| 上午 2h | React Router v6：BrowserRouter、Routes/Route、Link/NavLink、useParams/useNavigate/useLocation、嵌套路由 |
| 下午 2h | 路由守卫（登录检查）、404 页面、懒加载（React.lazy + Suspense） |

**产出：** 一个多页面博客前端框架（首页/文章列表/文章详情/关于页面），带路由导航

### Day 16 — 状态管理（Zustand）

| 时段 | 内容 |
|---|---|
| 上午 2h | 为什么需要全局状态管理（props drilling 问题）、Zustand 核心 API（create/set/get/subscribe）、devtools 中间件 |
| 下午 2h | 实战：用 Zustand 管理用户登录状态、主题切换、购物车 |

**产出：** 一个带登录状态管理 + 主题切换 + 购物车的电商前端壳

### Day 17 — 组件库 + 样式方案

| 时段 | 内容 |
|---|---|
| 上午 2h | Tailwind CSS：工具类思想、响应式断点、暗色模式、自定义主题 |
| 下午 2h | Ant Design 或 shadcn/ui：表单、表格、弹窗、通知、骨架屏 |

**产出：** 用 Tailwind + shadcn/ui 搭建一个仪表盘页面（侧边栏 + 数据卡片 + 表格 + 图表占位）

### Day 18-19 — 前端综合项目：任务管理看板（Kanban）

| 时段 | 内容 |
|---|---|
| Day 18 全天 | 项目搭建（Vite + React + TS + Tailwind + Zustand + React Router） |
|   | 看板核心：列管理（待办/进行中/已完成）、卡片拖拽（react-beautiful-dnd 或 @dnd-kit）、卡片 CRUD |
| Day 19 全天 | 完善功能：搜索过滤（按标题/标签/优先级）、localStorage 持久化、深色模式 |

**产出：** 一个功能完整的看板应用（这是你的第一个「能写进简历」的项目）

### Day 20 — React 性能优化

| 时段 | 内容 |
|---|---|
| 上午 2h | 性能分析工具：React DevTools Profiler、Lighthouse、代码分割、图片懒加载 |
| 下午 2h | 对看板项目做性能审计和优化（状态下沉、合理使用 memo、虚拟列表概念） |

### Day 21 — 第三周复盘 + 简历初稿

| 时段 | 内容 |
|---|---|
| 全天 | 整理本周代码，为看板项目写完整的 README（功能介绍 + 技术栈 + 截图 + 本地运行步骤） |
|   | 撰写简历第一版（个人信息/技能清单/项目经历/教育背景），AI 帮你润色 |

**第三周检查点：**
- [ ] 能独立搭建 React + TS + Tailwind + Router + Zustand 的项目
- [ ] 能口头解释：前端路由原理（Hash vs History）、状态管理方案对比
- [ ] 有一个完整的前端项目（Kanban），README 完善
- [ ] 简历初稿完成

---

## 第 4 周：后端入门 + 首个全栈项目

### 目标
掌握 Node.js 后端开发基础，完成前后端打通的第一个全栈项目。**本周同步开始投简历。**

### Day 22 — Node.js 基础

| 时段 | 内容 |
|---|---|
| 上午 2h | Node.js 运行时概念、CommonJS vs ES Module、fs/path/http 核心模块、process.env、package.json scripts |
| 下午 2h | 用原生 http 模块写一个简易 REST API、理解请求-响应模型、JSON 序列化 |

**产出：** 一个零依赖的简易 API 服务器（返回 JSON 数据）

### Day 23 — Express.js 核心

| 时段 | 内容 |
|---|---|
| 上午 2h | Express 项目结构、路由（Router）、请求对象（req.params/req.query/req.body）、响应方法（json/send/status） |
| 下午 2h | 中间件机制（应用级/路由级/错误处理级）、cors/morgan/express.json 等常用中间件 |

**产出：** RESTful API（users CRUD），内存存储，Postman 可调通

### Day 24 — 数据库入门

| 时段 | 内容 |
|---|---|
| 上午 2h | 关系型数据库概念（表/行/列/主键/外键/索引）、MySQL 安装或使用 PlanetScale 云数据库 |
| 下午 2h | SQL 基础：CREATE TABLE、INSERT、SELECT（WHERE/ORDER BY/LIMIT）、UPDATE、DELETE、JOIN（INNER/LEFT） |

**产出：** 手写 20 条 SQL 查询语句，覆盖常见业务场景

### Day 25 — ORM（Prisma）

| 时段 | 内容 |
|---|---|
| 上午 2h | Prisma 是什么、Schema 定义（model/relation/enum）、Migration、Prisma Client CRUD API |
| 下午 2h | 把 Day 23 的 users CRUD 从内存改成 Prisma + MySQL/SQLite，理解 ORM 和原生 SQL 的关系 |

**产出：** Express + Prisma + SQLite 的用户 CRUD API

### Day 26 — 用户认证系统

| 时段 | 内容 |
|---|---|
| 上午 2h | 密码哈希（bcrypt）、JWT 原理（Header/Payload/Signature）、access token vs refresh token |
| 下午 2h | 实现注册（POST /register）、登录（POST /login -> 返回 JWT）、认证中间件（验证 JWT）、获取当前用户（GET /me） |

**产出：** 完整的用户注册/登录/认证 API，Postman 测试通过

### Day 27 — 全栈项目：博客系统（后端）

| 时段 | 内容 |
|---|---|
| 全天 | 设计数据库 Schema（User/Post/Tag 三表 + 关联关系） |
|   | 实现文章 CRUD API（GET /posts、GET /posts/:id、POST /posts、PUT /posts/:id、DELETE /posts/:id） |
|   | 权限控制：只能编辑/删除自己的文章 |

**产出：** 博客系统后端 API（Express + Prisma + JWT），Postman 完整测试通过

### Day 28 — 全栈项目：博客系统（前后端联调）

| 时段 | 内容 |
|---|---|
| 上午 2h | CORS 配置、axios 实例封装（baseURL/interceptors/错误统一处理）、环境变量管理（.env 区分开发/生产） |
| 下午 2h | React 前端对接后端：注册/登录页面、文章列表/详情/新建/编辑页面、JWT 存储与请求拦截 |

**本周重点：** 最晚 Day 26 开始投递简历，用看板项目 + 博客项目作为项目经历

**第四周检查点：**
- [ ] 能独立搭建 Express + Prisma 后端项目
- [ ] 能口头解释：RESTful API 设计原则、JWT 认证流程、ORM 的作用
- [ ] 博客系统前后端完整跑通并部署上线
- [ ] 已投出至少 10 份简历

---

## 第 5 周：全栈项目深化 + 工程化

### 目标
完成第二个全栈项目，掌握工程化技能，建立「能独立完成项目」的自信。

### Day 29-31 — 全栈项目 #2：面试题库系统（后端优先）

| 天 | 内容 |
|---|---|
| Day 29 | 需求分析 + 数据库设计（User/Question/Category/Note 四表）、AI 辅助搭建项目骨架 |
| Day 30 | 实现题目 CRUD、分类筛选、搜索、分页（cursor-based 或 offset-based） |
| Day 31 | 实现收藏功能、做题记录（标记已做/未做/需要复习）、个人笔记关联到题目 |

**产出：** 面试题库系统后端 API，至少 8 个接口

### Day 32-33 — 全栈项目 #2：面试题库系统（前端）

| 天 | 内容 |
|---|---|
| Day 32 | 题目列表页（搜索/筛选/分页）、题目详情页、新建/编辑题目页（富文本或 Markdown） |
| Day 33 | 个人中心（做题统计/收藏列表/复习计划）、数据可视化（进度图表，用 recharts） |

**注意：** 本项目你需要写 50% 以上的代码，AI 只做 review 和回答疑问

**产出：** 面试题库全栈应用，前后端完整联调通过

### Day 34 — 工程化（一）

| 时段 | 内容 |
|---|---|
| 上午 2h | ESLint + Prettier 配置（在 VS Code 中自动格式化）、Git hooks（husky + lint-staged）阻止提交不规范代码 |
| 下午 2h | Git 分支策略（main/develop/feature 三级）、写有意义的 commit message（feat/fix/refactor/docs）、PR review 流程 |

**产出：** 项目的 ESLint/Prettier 配置 + 至少模拟一次 Git 分支协作流程

### Day 35 — 工程化（二）+ 部署

| 时段 | 内容 |
|---|---|
| 上午 2h | 部署原理：前端静态资源部署（Vercel/Netlify）、后端服务部署（Railway/Render）、数据库云服务（PlanetScale/Supabase） |
| 下午 2h | 实际部署：将博客系统和面试题库两个项目全部部署上线，配置自定义域名（可选） |

**第五周检查点：**
- [ ] 两个全栈项目均已部署上线，可直接通过 URL 访问
- [ ] 项目代码有 ESLint/Prettier 配置，commit 历史清晰
- [ ] 能口头解释：前端和后端分别怎么部署、环境变量如何处理

---

## 第 6 周：项目 #3 + 进阶技能

### 目标
完成第三个有区分度的全栈项目，掌握 WebSocket 实时通信或文件处理等进阶技能。

### Day 36-39 — 全栈项目 #3（从以下选一个）

**选项 A：实时聊天应用（推荐，面试亮点大）**

| 天 | 内容 |
|---|---|
| Day 36 | WebSocket 原理（对比 HTTP 长轮询/SSE）、Socket.IO 服务端搭建、房间/私聊概念 |
| Day 37 | 聊天前端（消息列表/输入框/在线用户列表/未读提示）、消息持久化到数据库 |
| Day 38 | JWT + Socket.IO 认证、打字状态提示、图片/文件发送 |
| Day 39 | UI 打磨、部署上线 |

**选项 B：文件管理/云盘系统**

| 天 | 内容 |
|---|---|
| Day 36 | 文件上传（multer）、存储策略（本地/Cloudinary/S3）、文件列表与下载 |
| Day 37 | 文件夹管理（创建/删除/移动）、文件预览（图片/PDF）、分享链接（带过期时间） |
| Day 38 | 权限控制（私有/公开/密码保护）、存储空间计算 |
| Day 39 | UI 打磨、部署上线 |

**本项目要求：自己写 70%+ 的代码，AI 仅做架构建议和 bug 调试协助。**

**产出：** 第三个全栈项目上线，具有一定的复杂度（实时通信 or 文件处理）

### Day 40-41 — Docker 入门 + 简历二轮优化

| 天 | 内容 |
|---|---|
| Day 40 | Docker 核心概念（镜像/容器/Dockerfile/docker-compose）、把你的一个项目容器化 |
| Day 41 | docker-compose 编排（前端 + 后端 + 数据库）、简历二轮精修（加入第三个项目） |

### Day 42 — 第六周复盘 + 投递冲刺

| 时段 | 内容 |
|---|---|
| 全天 | 检查三个项目的 README 质量、线上可访问性、代码整洁度 |
|   | 简历最终版确认，本周继续投递（目标累计 30+ 份） |

**第六周检查点：**
- [ ] 三个全栈项目全部上线，GitHub 仓库整洁，README 完善
- [ ] 简历上有 3 个完整项目，每个项目 3-4 个技术亮点
- [ ] 能口头解释自己做的每个项目的架构、技术选型理由、遇到的难点
- [ ] 对 WebSocket 或文件处理有实践经验

---

## 第 7 周：面试知识体系搭建

### 目标
系统梳理面试高频考点，建立知识框架，应对技术面。

### Day 43-44 — JavaScript 深度面试题

必须能**口头流利回答**以下每个问题（不是背答案，是说清楚原理）：

| # | 问题 |
|---|---|
| 1 | JS 的基本数据类型和引用数据类型？typeof vs instanceof？ |
| 2 | == vs === 的区别？类型转换规则？ |
| 3 | 什么是闭包？你在项目中怎么用的？有什么坑？ |
| 4 | this 指向的 5 种情况？箭头函数的 this？ |
| 5 | call/apply/bind 的区别？手写 bind？ |
| 6 | 原型链是什么？new 操作符做了什么？ |
| 7 | 事件循环是什么？宏任务微任务有哪些？执行顺序？ |
| 8 | Promise 的 5 个静态方法？Promise.all vs Promise.allSettled？ |
| 9 | async/await 的原理？和 Generator 有什么关系？ |
| 10 | 深拷贝 vs 浅拷贝？如何实现深拷贝（循环引用/特殊类型怎么处理）？ |
| 11 | 防抖和节流是什么？应用场景？手写实现？ |
| 12 | 跨域是什么？有哪些解决方案（CORS/JSONP/代理）？ |
| 13 | ES6 模块化（import/export）和 CommonJS 的区别？Tree Shaking？ |
| 14 | Map vs WeakMap？Set vs WeakSet？ |
| 15 | 垃圾回收机制？什么情况会导致内存泄漏？ |

**产出：** 15 道题的逐题讲解笔记（你自己的话），每天 AI 模拟面试抽查 5 道

### Day 45-46 — React 深度面试题

| # | 问题 |
|---|---|
| 1 | React 的虚拟 DOM 是什么？diff 算法原理？key 的作用？ |
| 2 | 函数组件 vs 类组件？为什么现在都用函数组件？ |
| 3 | useState 的原理？为什么 Hook 不能放在条件语句中？ |
| 4 | useEffect 的执行时机？依赖数组的不同情况？ |
| 5 | useMemo/useCallback/React.memo 的使用场景与区别？ |
| 6 | Context 的性能问题？如何优化？ |
| 7 | React 18 的新特性？并发模式（Concurrent Mode）是什么？ |
| 8 | 受控组件 vs 非受控组件？ref 的使用场景？ |
| 9 | 状态提升？组件通信方式（props/context/状态管理/事件总线）？ |
| 10 | React 性能优化手段有哪些？ |
| 11 | 自定义 Hook 的设计原则？你写过哪些自定义 Hook？ |
| 12 | 错误边界（Error Boundary）？Suspense？ |
| 13 | 服务端渲染（SSR）概念？Next.js 解决了什么问题？ |

**产出：** 13 道题的逐题讲解笔记，AI 模拟面试抽查

### Day 47 — 网络 + 浏览器面试题

| # | 问题 |
|---|---|
| 1 | HTTP 1.0/1.1/2/3 的区别？ |
| 2 | HTTP 状态码（1xx/2xx/3xx/4xx/5xx）常见有哪些？ |
| 3 | GET vs POST 的区别？PUT vs PATCH？ |
| 4 | HTTP 缓存策略（强缓存/协商缓存）？Cache-Control 字段？ |
| 5 | 从输入 URL 到页面渲染，发生了什么？ |
| 6 | 浏览器渲染流程（DOM Tree/CSSOM/Render Tree/Layout/Paint/Composite）？ |
| 7 | 回流（reflow）和重绘（repaint）？如何减少？ |
| 8 | Cookie/SessionStorage/LocalStorage 的区别？ |
| 9 | HTTPS 原理（对称加密/非对称加密/证书）？ |
| 10 | TCP 三次握手和四次挥手？ |
| 11 | DNS 解析过程？CDN 原理？ |

**产出：** 所有的网络/浏览器面试题讲解笔记

### Day 48 — 数据库 + 后端面试题

| # | 问题 |
|---|---|
| 1 | 关系型 vs 非关系型数据库？什么场景选什么？ |
| 2 | MySQL 索引原理（B+树）？什么时候索引失效？ |
| 3 | SQL 查询优化？EXPLAIN 怎么用？ |
| 4 | 事务 ACID？隔离级别？脏读/幻读/不可重复读？ |
| 5 | 连接池是什么？为什么需要？ |
| 6 | RESTful API 设计原则？ |
| 7 | JWT vs Session 认证？各自的优缺点？ |
| 8 | 中间件是什么？你用过哪些 Express 中间件？ |
| 9 | 如何防止 SQL 注入/XSS/CSRF 攻击？ |
| 10 | 分页怎么实现？深分页问题怎么解决？ |

### Day 49 — 算法冲刺（一）

| 内容 | 方式 |
|---|---|
| 数组与字符串（10 道）：两数之和、三数之和、盛水最多容器、无重复最长子串、最长回文子串、合并区间、螺旋矩阵、反转链表（迭代+递归）、环形链表检测、合并两个有序链表 | 每道题：先自己想 15 分钟 → 写代码 → AI 批改 → 理解最优解 → 二刷 |

**关键原则：**
- 不会就看题解，但看懂了必须自己再写一遍
- 总结解题套路，而不是背题目（双指针、滑动窗口、哈希表、递归模板）

**产出：** 每天 5 道 LeetCode 简单+中等题

### Day 50 — 算法冲刺（二）+ 第七周复盘

| 内容 | 方式 |
|---|---|
| 栈/队列/哈希（5 道）：有效括号、最小栈、用栈实现队列、前 K 个高频元素、LRU 缓存 | 同上 |
| 树/二叉树（5 道）：前中后序遍历（递归+迭代）、层序遍历、二叉树最大深度、路径总和、最近公共祖先 | 同上 |
| 第七周所有面试题自查（随机抽 20 道口述回答） | AI 模拟面试 |

---

## 第 8 周：面试实战 + 查漏补缺

### 目标
高强度模拟面试，补足短板，拿到 offer。

### Day 51 — 项目深度复盘

**对简历上的 3 个项目，逐个准备：**

| 维度 | 问题模板 |
|---|---|
| 架构 | 这个项目的技术栈是什么？为什么选这些技术？架构图能画出来吗？ |
| 难点 | 开发中遇到的最大挑战是什么？怎么解决的？ |
| 优化 | 如果给你一个月继续做，你会优化哪些地方？ |
| 规模 | 如果用户量增长 100 倍，哪里会先出问题？怎么解决？ |
| 协作 | 如果和另一个前端合作，你怎么设计组件和 API 接口？ |
| 安全 | 你的项目有哪些安全隐患？怎么修复？ |

**产出：** 每个项目写一份「面试讲述稿」（3-5 分钟版本），AI 模拟追问

### Day 52-53 — 行为面试 + 软技能

| # | 高频非技术题 |
|---|---|
| 1 | 自我介绍（1 分钟版本 + 3 分钟版本） |
| 2 | 为什么想做前端/全栈开发？ |
| 3 | 你未来的职业规划？ |
| 4 | 说一个你解决过的技术难题（STAR 法则） |
| 5 | 你和同事意见不合怎么办？ |
| 6 | 你怎么学习新技术？ |
| 7 | 你对我们公司/团队有什么了解？ |
| 8 | 你的期望薪资？为什么选择我们公司？ |
| 9 | 你有什么想问我们的？（反向面试环节） |

**产出：** 每题一个 1-2 分钟的英文或中文回答稿

### Day 54 — 系统设计入门

| 内容 | 方式 |
|---|---|
| 前端系统设计：如何设计一个组件库？如何设计一个表单系统？如何设计一个大型 SPA 的路由和状态管理？ | AI 出题，你口述设计方案，AI 点评 |
| 后端系统设计：如何设计一个短链接系统？如何设计一个秒杀系统？如何设计一个消息队列？ | 不需要深入，能讲出架构图和数据流即可 |

### Day 55 — 完整模拟面试

**流程：**
1. 自我介绍（3 分钟）
2. 项目深挖（15 分钟）— AI 针对你的项目追问
3. 技术问答（15 分钟）— JS/React/网络/数据库各抽 3 题
4. 算法题（10 分钟）— 共享屏幕手写代码
5. 反问环节（5 分钟）

**产出：** AI 给出详细评分和改进建议，针对性补漏

### Day 56 — 最终查漏补缺 + 心态调整

| 时段 | 内容 |
|---|---|
| 上午 | 针对模拟面试暴露的弱项集中补课 |
| 下午 | 整理这 8 周的学习笔记、项目仓库、面试题汇总 |
| 晚上 | 调整心态：准备好被拒 10 次的心理预期，每一次面试都是免费的模拟练习 |

**第八周检查点：**
- [ ] 完成至少 3 次模拟面试
- [ ] 所有面试题至少能说出核心要点
- [ ] 项目面试讲述稿准备完毕
- [ ] 投递量累计 50+ 份或已进入面试流程

---

## 项目里程碑总览

| 周 | 项目 | 技术栈 | 部署 |
|---|---|---|---|
| 1 | 个人主页 + 天气应用 + 待办事项 | HTML/CSS/JS/React | GitHub Pages / Vercel |
| 2 | TypeScript 天气应用 | React + TS | Vercel |
| 3 | 看板应用（Kanban） | React + TS + Tailwind + Zustand + Router | Vercel |
| 4 | 博客系统（全栈 #1） | React + TS + Express + Prisma + MySQL | Vercel + Railway |
| 5 | 面试题库（全栈 #2） | React + TS + Express + Prisma + MySQL | Vercel + Railway |
| 6 | 聊天应用/云盘（全栈 #3） | React + TS + Express + Socket.IO + Prisma | Vercel + Railway |
| 7-8 | 面试准备 | — | — |

---

## 每日学习节奏模板

```
08:00-08:30  复习昨天内容 + 看今日计划
08:30-10:30  上午学习（新知识，AI 讲解 + 你理解）
10:30-12:00  上午练习（写代码，能自己写就不让 AI 写）
12:00-13:00  午饭 + 休息
13:00-15:00  下午学习（新知识）
15:00-17:00  下午练习（项目实战）
17:00-17:30  Git push + 写今日笔记（3 个学到的新概念）
```

---

## 关键原则（贯穿全程）

1. **代码推到 GitHub 才算完成** — 没有任何"学了但没写代码"的一天
2. **遇到报错先自己调试 15 分钟** — 读错误信息 → 搜索 → 定位 → 修，实在不行再问 AI
3. **AI 写的每行代码你都要能解释** — 用 `"这段代码是做什么的？为什么这样写？"` 追问
4. **第 4 周起每天投 3-5 份简历** — 不要等到"准备好了"再投，面试本身就是最高效的学习
5. **第 5 周起你写代码，AI review** — 逐步减少 AI 依赖，过渡到独立开发
6. **每个概念用自己的话写一遍笔记** — 费曼学习法：能教会别人才是真懂
7. **面试被拒 = 获得一次免费模拟面** — 心理建设要早做，第一次面试大概率会紧张

---

## 推荐资源

| 类型 | 资源 |
|---|---|
| JS 参考 | MDN Web Docs（developer.mozilla.org）、《你不知道的 JavaScript》上卷 |
| React | React 官方文档（react.dev）、Dan Abramov 的博客 |
| TypeScript | TypeScript 官方 Handbook、type-challenges（GitHub） |
| Node.js | Node.js 官方文档、Express 官方指南 |
| 数据库 | Prisma 官方文档、SQLZoo（在线练习 SQL） |
| 算法 | LeetCode 热题 100、《代码随想录》 |
| 面试 | 牛客网面经、掘金面试专题 |
| 部署 | Vercel 文档、Railway 文档 |
