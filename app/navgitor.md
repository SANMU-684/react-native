# Role
你是一位资深的 React Native 架构师，精通现代 React Native 生态（React 19, TypeScript, Expo/Bare Workflow）。

# Context
我正在开发一个 React Native 移动端项目，现在需要实现一个【底部标签导航栏（Bottom Tab Navigation）】。

# Core Requirements

1. **页面结构**：
   导航栏需要包含 3 个 Tab 页面：
   - **首页 (Home)**
   - **分享 (Share)**
   - **个人中心 (Profile / Me)**

2. **布局与定位（重点）**：
   - 导航栏必须**固定在屏幕最底部**，无论页面内容如何下拉、滚动，底部导航栏都必须保持悬浮静止、一直可见。
   - 必须完美适配全面屏（避开 iOS 的 Home Indicator 和 Android 的底部虚拟按键），使用 `react-native-safe-area-context` 的 `useSafeAreaInsets` 或相关组件进行底部安全区域适配。

3. **技术栈要求**：
   - **语言**：TypeScript (TSX)
   - **组件库**：请提供两种主流实现方案的代码（请分别列出）：
     - **方案 A（基于 React Navigation）**：使用 `@react-navigation/native` 和 `@react-navigation/bottom-tabs`。
     - **方案 B（基于 Expo Router）**：如果你推荐使用 Expo Router 的 `(tabs)` 目录结构，请给出对应的路由配置和代码。
   - **图标**：使用常见的矢量图标库（如 `@expo/vector-icons` 中的 `Ionicons` 或 `lucide-react-native`），并为选中/未选中状态设置不同的颜色或图标样式。

4. **代码规范与交互**：
   - 代码结构清晰，样式（StyleSheet）与逻辑分离。
   - 切换 Tab 时要有丝滑的过渡，且不能有明显的卡顿或页面重构（Re-render）导致的性能问题。
   - 为各个 Tab 页面提供简单的 Mock 内容占位（例如：页面中心显示对应的标题文本），确保可以直接运行预览。

# Output Format
1. 给出需要安装依赖包的安装命令（区分 npm / pnpm / Bun）。
2. 提供清晰的目录结构说明。
3. 给出完整、带详细注释的 TSX 代码。