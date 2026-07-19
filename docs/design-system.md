# PROPELLER 首页设计系统（Design Tokens & Patterns）

> 从首页（`src/pages/Home.tsx` 及其 sections）提取的设计语言。
> 首页是主站点，所有子页面在设计（颜色、字体、质感、动效节奏）上参考本文档，布局不必一致。

## 1. 色彩

| 角色 | 值 | 用途 |
|---|---|---|
| 页面底色 | `#0a0f1a` | 主背景（Portfolio / Services 移动版 / MainLayout） |
| 次级底色 | `#0d1321` | 卡片、交替区块 |
| 纯黑 | `#000000` | Hero sticky 容器、Footer 遮罩 |
| 主品牌色 Indigo | `#3533cd` | 强调标签、主 CTA、Phase 01（Compass） |
| 辅助品牌色 Teal | `#008080` | 次要强调、hover 态、Phase 02（Access） |
| 深 Teal 渐变 | `#004d4d` / `#001a1a` | 同心圆装饰层 |
| 中性深色 | `slate-800` / `slate-700` | Phase 03（Growth） |
| 正文文字 | `text-white` / `text-slate-300` / `text-slate-400` | 标题 / 副文案 / 正文 |
| 弱化文字 | `text-white/60`、`text-white/40` | 辅助说明 |

## 2. 字体排印

- **Eyebrow 标签**：`uppercase tracking-[0.3em]`，`text-[10px]` 或 `text-sm`，品牌色或 `text-white/60`，`font-semibold`
- **主标题**：`font-black`，`text-3xl md:text-5xl lg:text-6xl`（Hero 可到 `text-7xl` 或 `25vmin`），`leading-tight`，常以 `.` 结尾（"Our Core Expertise."）
- **正文**：`text-sm md:text-lg text-slate-400`，`leading-relaxed`
- **数字序号**：`01 / 02 / 03`，`uppercase tracking-[0.3em]` 小字号配图标

## 3. 布局

- 容器：`max-w-7xl mx-auto px-4 md:px-6`
- 区块垂直间距：`py-20 md:py-28` / `py-16`（移动）
- 全局纹理：MainLayout 固定定位 60px 网格线（`rgba(255,255,255,0.03)`）
- 圆角：卡片 `rounded-2xl`，按钮 `rounded-full`，小元素 `rounded-xl`
- 阴影：卡片 `shadow-2xl`

## 4. 组件模式

### CTA 按钮（Hero）
```tsx
<a className="group inline-flex items-center gap-3 bg-[#3533cd] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#008080] transition-colors duration-300">
  Let's Talk
  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
</a>
```
> Indigo 底色 → hover 变 Teal，箭头平移。

### 服务卡片（Services）
- 品牌色实底 + 底部渐变遮罩 `bg-gradient-to-t from-black/60 via-transparent to-transparent`
- 内容置于卡片底部：图标 + 序号 eyebrow → 标题 → 描述 → "Learn more →"
- hover：图标/文字由 `white/70` → `white`，箭头 `group-hover:translate-x-1`

### Portfolio 手风琴
- hover 展开（flex 1 → 5），`transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]`
- 非激活项图片 `opacity-50 blur-sm scale-105`

## 5. 动效模式

- **滚动驱动**：section 高度 `300vh–400vh`，内部 `sticky top-0 h-screen`，用 scroll progress + `lerp(p, [[p0,v0],[p1,v1],...])` 分段插值
- **缓动**：CSS 过渡统一 `duration-300`（交互）/ `duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]`（布局变化）
- **同心圆**：40/30/20/10 vmin 圆形层叠，品牌色渐变，可作装饰元素
- **视频质感**：背景视频 `opacity-20` + `bg-black/40` 遮罩
- **Footer 大字**：`text-[10vw] font-black tracking-tighter` + 视频镂空（mix-blend）

## 6. 子页面应用原则

1. 底色统一 `#0a0f1a` / `#0d1321` 交替，禁止大面积纯色 Hero（改为深色底 + 品牌色点缀）
2. 每个 Phase 保留专属色：Compass `#3533cd`、Access `#008080`、Growth `slate-700/800`
3. 沿用 eyebrow + font-black 标题 + `.` 结尾的标题风格
4. CTA 统一 pill 按钮模式（indigo → teal hover）
5. 适度复用滚动驱动动效，但布局结构可与首页不同
