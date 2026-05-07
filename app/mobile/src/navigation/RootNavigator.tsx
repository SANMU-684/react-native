import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// 导入页面
import HomeScreen from "../screens/Home/HomeScreen";
import DetailsScreen from "../screens/Home/DetailsScreen";
import ShareScreen from "../screens/Share/ShareScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";

// 创建 Tab 和 Stack Navigator
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

// 首页 Stack Navigator（支持从 Home 跳转到 Details）
function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      id={undefined}
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeMain"
    >
      <HomeStack.Screen name="HomeMain" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

// Tab 导航配置
export default function RootNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      id={undefined}
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        // 图标配置
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          // 根据路由名称设置不同的图标
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Share") {
            iconName = focused ? "share-social" : "share-social-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else {
            iconName = "help-circle-outline";
          }

          // 返回图标组件
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        // 标签样式
        tabBarActiveTintColor: "#007AFF", // 选中状态颜色（iOS 蓝色）
        tabBarInactiveTintColor: "#8E8E93", // 未选中状态颜色（灰色）
        tabBarStyle: {
          // 固定在底部，添加安全区域适配
          paddingBottom: insets.bottom, // 适配 iOS Home Indicator
          paddingTop: 8,
          height: 60 + insets.bottom, // 动态高度
          borderTopWidth: 0.5,
          borderTopColor: "#E5E5EA",
          elevation: 8, // Android 阴影
          shadowColor: "#000", // iOS 阴影
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        // 隐藏头部
        headerShown: false,
      })}
    >
      {/* 首页 Tab */}
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          title: "首页",
        }}
      />
      {/* 分享 Tab */}
      <Tab.Screen
        name="Share"
        component={ShareScreen}
        options={{
          title: "分享",
        }}
      />
      {/* 个人中心 Tab */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "我的",
        }}
      />
    </Tab.Navigator>
  );
}
