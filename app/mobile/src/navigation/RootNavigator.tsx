import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import HomeScreen from "../screens/Home/HomeScreen";
import DetailsScreen from "../screens/Home/DetailsScreen";
import FavoritesScreen from "../screens/Favorites/FavoritesScreen";
import HistoryScreen from "../screens/History/HistoryScreen";
import CreateScreen from "../screens/Create/CreateScreen";
import ShareScreen from "../screens/Share/ShareScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import { useAppColors } from "../context/ThemeContext";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      id={undefined}
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeMain"
    >
      <HomeStack.Screen name="HomeMain" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
      <HomeStack.Screen name="Favorites" component={FavoritesScreen} />
      <HomeStack.Screen name="History" component={HistoryScreen} />
      <HomeStack.Screen name="Create" component={CreateScreen} />
    </HomeStack.Navigator>
  );
}

export default function RootNavigator() {
  const insets = useSafeAreaInsets();
  const colors = useAppColors();

  return (
    <Tab.Navigator
      id={undefined}
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Share") {
            iconName = focused ? "share-social" : "share-social-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else {
            iconName = "help-circle-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.tabBarActive,
        tabBarInactiveTintColor: colors.tabBarInactive,
        tabBarStyle: {
          paddingBottom: insets.bottom,
          paddingTop: 8,
          height: 60 + insets.bottom,
          borderTopWidth: 0.5,
          borderTopColor: colors.tabBarBorder,
          backgroundColor: colors.tabBar,
          elevation: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} options={{ title: "首页" }} />
      <Tab.Screen name="Share" component={ShareScreen} options={{ title: "分享" }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: "我的" }} />
    </Tab.Navigator>
  );
}
