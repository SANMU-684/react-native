import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FocusedStatusBar from "../../components/layout/FocusedStatusBar";
import { useAppTheme, useAppColors } from "../../context/ThemeContext";

interface MenuItemProps {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  label: string;
  showArrow?: boolean;
  onPress?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  label,
  showArrow = true,
  onPress,
}) => {
  const colors = useAppColors();

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 14,
      }}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
        <MaterialCommunityIcons name={icon} size={24} color={colors.textSecondary} />
        <Text style={{ fontSize: 17, color: colors.text, fontWeight: "400" }}>{label}</Text>
      </View>
      {showArrow && (
        <MaterialCommunityIcons name="chevron-right" size={20} color={colors.textSecondary} />
      )}
    </TouchableOpacity>
  );
};

export default function ProfileScreen({ navigation }: { navigation: any }) {
  const { isDark, toggleTheme } = useAppTheme();
  const colors = useAppColors();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <FocusedStatusBar />
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 20, alignItems: "flex-start" }}>
          <Image
            source={require("../../../assets/profile.png")}
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              marginBottom: 12,
              backgroundColor: colors.divider,
            }}
          />

          <Text style={{ fontSize: 24, fontWeight: "bold", color: colors.text, marginBottom: 4 }}>
            美食探险家
          </Text>
          <Text style={{ fontSize: 15, color: colors.textSecondary, marginBottom: 16 }}>
            @food_explorer
          </Text>

          <View style={{ flexDirection: "row", gap: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold", color: colors.text }}>1</Text>
              <Text style={{ fontSize: 14, color: colors.textSecondary }}>正在关注</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold", color: colors.text }}>1</Text>
              <Text style={{ fontSize: 14, color: colors.textSecondary }}>关注者</Text>
            </View>
          </View>
        </View>

        <View style={{ height: 8, backgroundColor: colors.divider }} />

        <View style={{ backgroundColor: colors.background, paddingVertical: 8 }}>
          <MenuItem icon="account-outline" label="个人资料" />
          <MenuItem icon="star-outline" label="Premium" />
          <MenuItem icon="account-group-outline" label="社群" />
          <MenuItem
            icon="bookmark-outline"
            label="我的收藏"
            onPress={() => navigation.navigate("Favorites")}
          />
          <MenuItem
            icon="history"
            label="浏览记录"
            onPress={() => navigation.navigate("History")}
          />
        </View>

        <View style={{ height: 8, backgroundColor: colors.divider }} />

        <View style={{ backgroundColor: colors.background, paddingVertical: 8 }}>
          <MenuItem icon="cog-outline" label="设置和隐私" showArrow={false} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
              paddingVertical: 14,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
              <MaterialCommunityIcons name="theme-light-dark" size={24} color={colors.textSecondary} />
              <Text style={{ fontSize: 17, color: colors.text, fontWeight: "400" }}>深色模式</Text>
            </View>
            <Switch value={isDark} onValueChange={toggleTheme} />
          </View>
          <MenuItem icon="help-circle-outline" label="帮助中心" showArrow={false} />
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
