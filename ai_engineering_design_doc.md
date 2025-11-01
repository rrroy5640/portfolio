# AI Engineering & Cloud Architecture Section Design Doc

**风格定位: 极简科技 / Apple Developer / Stripe Infra / Linear**

---

## 🎯 目的与目标

### 目标

在个人 Portfolio 中通过**抽象动效 + 系统逻辑表达**来展示 AI 工程与云架构能力，无需真实产品截图与复杂素材。

### 为什么这么做

- 展现结构化思维与工程深度，而不仅是 UI 展示
- 通过“系统能量与秩序感”表达实力，而非信息堆砌
- 减少维护成本，无需反复整理真实项目素材
- 保留日后替换真实内容的空间

> 少而精、静而强、抽象但可信。

---

## 🧠 核心理念

| 原方式   | 新方式                 |
| -------- | ---------------------- |
| 展示成果 | 展示系统能力与机制     |
| 真实截图 | 抽象结构 + 模拟数据    |
| 复杂动效 | 极简、理性、微动效     |
| 炫技术   | 呈现工程哲学与思考方式 |

> 从“作品集”升级为“AI Engineering Lab”。

---

## 📦 内容模块结构

### 1. Section 开场

AI Engineering & Cloud Architecture  
Distributed compute, structured prompting, async pipelines.

### 2. LLM Pipeline 动效（微 pinned）

User → Preprocess → Queue → Model → Post-process → Output

- 点线节点
- 轻脉冲流动
- 每步淡入

### 3. Structured Prompting 卡片

system prompt: schema + constraints  
developer prompt: recovery logic  
assistant: data cleaning + normalisation

### 4. Cloud Architecture 抽象图

Client → API → Lambda → SQS → Worker → LLM → Storage → Client

### 5. Execution Log Console（模拟）

→ [Lambda] request accepted  
→ [Queue] job dispatched (42ms)  
→ [Worker] running  
→ [LLM] 1.3s • 1580 tokens  
✓ [Storage] saved  
✓ [API] 200 OK

### 6. Mini Code Blocks

```ts
const result = llm.generate({
  schema: ResumeSchema,
  text: input,
});
```

### 7. 结语

Built for clarity, reliability, and scale.  
Minimal surface. Maximum engineering clarity.

---

## 🎨 视觉与动效规范

### 色彩（深色主题适配）

背景: `#0b0b10` → `#131318` (section background)  
正文: `#ffffff` / `#e5e7eb`  
次要文本: `#9ca3af` / `rgba(255,255,255,0.7)`  
强调: 电蓝 `#3B82F6` / 冷青 `#06B6D4`  
线条/边框: `rgba(255,255,255,0.1)`  
节点发光: `rgba(59,130,246,0.3)`

### 字体

- Inter / SF Pro
- 字重 300 / 400 / 500

### 动效语言

- 时长 0.3–0.6s
- `easeInOut`
- opacity + translateY
- scale 微变化

---

## 🛠 实施计划（分阶段）

### Phase 1: MVP 核心展示 ✅ [Current]

**目标**: 建立基础结构，展示核心能力

| 组件          | 功能                                                                     |
| ------------- | ------------------------------------------------------------------------ |
| Section Intro | 标题 + 副标题动画                                                        |
| PipelineFlow  | User → Preprocess → Queue → Model → Post-process → Output (节点脉冲动画) |
| CodeSnippet   | 1个精简的代码示例 (TypeScript/LLM调用)                                   |

**交付物**:

- ✅ Section骨架 + 深色主题
- ✅ Pipeline节点流动动画
- ✅ 基础代码展示
- ✅ NavBar链接

---

### Phase 2: 深度内容 ✅ [Completed]

**目标**: 增加技术深度与细节

| 组件            | 功能                         |
| --------------- | ---------------------------- |
| LogTerminal     | 模拟执行日志（打字机效果）   |
| PromptCard      | Structured prompting展示卡片 |
| 额外CodeSnippet | Schema定义示例               |

**交付物**:

- ✅ LogTerminal with typewriter animation
- ✅ PromptCard 3-layer structured prompting display
- ✅ Schema definition code snippet (Zod validation)
- ✅ Integrated all components into AILab section

---

### Phase 3: 架构视角 ✅ [Completed]

**目标**: 展示系统思维

| 组件              | 功能                                                          |
| ----------------- | ------------------------------------------------------------- |
| CloudArchitecture | 分布式架构流程图 (Client → API → Lambda → SQS → Worker → LLM) |
| 微动效优化        | hover states, 视差效果                                        |

**交付物**:

- ✅ CloudArchitecture component with 8-node distributed system
- ✅ SVG path animations showing data flow
- ✅ Hover states with glow effects and scale animations
- ✅ Responsive design (grid layout desktop, vertical mobile)
- ✅ Feature highlights (Fault Tolerant, Scalable, Async)
- ✅ Animated connection lines with gradient flow

---

### Phase 4: 抛光与细节 ✅ [Completed]

**目标**: 极致的工程美学

**交付物**:

- ✅ 无障碍支持（ARIA labels, semantic HTML）
- ✅ 性能优化（reduce-motion support, motion utilities）
- ✅ 语义化 HTML（header, article tags）
- ✅ 移动端响应式优化（已完成）
- ✅ 间距节奏优化（紧凑布局）
- ✅ SEO 优化（semantic structure）

**实施细节**:

- 添加 ARIA labels 到所有主要组件
- 创建 `motionConfig.js` 工具库支持 prefers-reduced-motion
- 使用语义化标签（section, header, article）
- 优化动画性能配置
- 所有装饰元素标记 aria-hidden="true"

---

### 可复用组件清单

```
/sections/AILab/
  - AILab.jsx (main section)
  - PipelineFlow.jsx [Phase 1]
  - CodeSnippet.jsx [Phase 1]
  - LogTerminal.jsx [Phase 2]
  - PromptCard.jsx [Phase 2]
  - CloudArchitecture.jsx [Phase 3]

/constants/
  - aiLabData.js (all content & config)
```

---

## ✅ 交付标准

- 不依赖真实素材
- 抽象与工程叙事结合
- 极简、精密、冷静
- 模块逻辑清晰

---

## 📎 未来扩展

- 加真实日志与截图
- 模型延迟与 token 可视化
- prompt 实时演示

---

## 📌 一句话愿景

将系统能力可视化，把抽象工程力量变成美学。
