# Role
你是一位高级 React Native 前端工程师，擅长使用 Tailwind CSS (NativeWind) 或 StyleSheet 构建精美的移动端 UI。

# Task
请帮我模仿 X (Twitter) 的侧边栏/个人中心页面，在 React Native 中构建一个【个人中心】组件。

# UI Structure & Requirements
1. **头部 (Header)**:
   - 圆形头像 (Avatar)。
   - 用户名 (Bold) 和 @ID (Gray)。
   - 关注数据：展示“XX 正在关注”和“XX 关注者”，文字横向排列。

2. **功能列表 (Menu List)**:
   - 每一行包含：左侧图标 (Icon)、中间功能文字、最右侧可选的箭头。
   - 需要包含的项：个人资料、Premium、视频、社群、书签、列表、空间、创作者工作室。
   - 底部需要有分割线或间距，随后展示：设置和隐私、帮助中心。

3. **技术要求**:
   - **图标库**: 使用 `@expo/vector-icons` 中的 `MaterialCommunityIcons` 或 `Ionicons`。
   - **交互**: 每一行点击时都要有触摸反馈（使用 `TouchableOpacity` 或 `Pressable`）。
   - **布局**: 使用 `ScrollView` 确保内容多时可以滚动，并适配 iOS/Android 的安全区域（SafeAreaView）。
   - **样式**: 请使用 `StyleSheet.create` 编写整洁的样式，背景色为黑色 (#000)，文字为白色 (#fff)，次要文字使用灰色 (#888)。

4. **代码组织**:
   - 定义一个通用的 `MenuItem` 组件来渲染列表项，避免代码冗余。
   - 使用 TypeScript 定义组件属性。

# Output Format
- 提供完整的 TSX 代码，确保复制到项目后可以立即渲染预览。