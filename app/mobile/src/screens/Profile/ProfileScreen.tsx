import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FocusedStatusBar from "../../components/layout/FocusedStatusBar";

// 定义菜单项接口
interface MenuItemProps {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  label: string;
  showArrow?: boolean;
  onPress?: () => void;
}

// 通用菜单项组件
const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  label,
  showArrow = true,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.menuItemLeft}>
        <MaterialCommunityIcons name={icon} size={24} color="#8E8E93" />
        <Text style={styles.menuItemText}>{label}</Text>
      </View>
      {showArrow && (
        <MaterialCommunityIcons name="chevron-right" size={20} color="#8E8E93" />
      )}
    </TouchableOpacity>
  );
};

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar />
      <ScrollView style={styles.scrollView}>
        {/* 头部信息 */}
        <View style={styles.header}>
          {/* 头像 */}
          <Image
            source={require("../../../assets/icon.png")}
            style={styles.avatar}
          />

          {/* 用户名和 ID */}
          <Text style={styles.username}>美食探险家</Text>
          <Text style={styles.userId}>@food_explorer</Text>

          {/* 关注数据 */}
          <View style={styles.followInfo}>
            <View style={styles.followItem}>
              <Text style={styles.followNumber}>128</Text>
              <Text style={styles.followLabel}>正在关注</Text>
            </View>
            <View style={styles.followItem}>
              <Text style={styles.followNumber}>10.5K</Text>
              <Text style={styles.followLabel}>关注者</Text>
            </View>
          </View>
        </View>

        {/* 分割线 */}
        <View style={styles.divider} />

        {/* 功能菜单列表 */}
        <View style={styles.menuSection}>
          <MenuItem icon="account-outline" label="个人资料" />
          <MenuItem icon="star-outline" label="Premium" />
          <MenuItem icon="play-box-outline" label="视频" />
          <MenuItem icon="account-group-outline" label="社群" />
          <MenuItem icon="bookmark-outline" label="书签" />
          <MenuItem icon="format-list-bulleted" label="列表" />
          <MenuItem icon="home-variant-outline" label="空间" />
          <MenuItem icon="lightbulb-outline" label="创作者工作室" />
        </View>

        {/* 分割线 */}
        <View style={styles.divider} />

        {/* 底部菜单 */}
        <View style={styles.menuSection}>
          <MenuItem icon="cog-outline" label="设置和隐私" />
          <MenuItem icon="help-circle-outline" label="帮助中心" showArrow={false} />
        </View>

        {/* 底部间距 */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: "flex-start",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
    backgroundColor: "#333",
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  userId: {
    fontSize: 15,
    color: "#8E8E93",
    marginBottom: 16,
  },
  followInfo: {
    flexDirection: "row",
    gap: 20,
  },
  followItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  followNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  followLabel: {
    fontSize: 14,
    color: "#8E8E93",
  },
  divider: {
    height: 8,
    backgroundColor: "#1C1C1E",
  },
  menuSection: {
    backgroundColor: "#000",
    paddingVertical: 8,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  menuItemText: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "400",
  },
  bottomSpacing: {
    height: 40,
  },
});
