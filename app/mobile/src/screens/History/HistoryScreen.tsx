import React from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { NFTCard, FocusedStatusBar } from "../../components";
import { useHistoryStore } from "../../store/useHistoryStore";
import { useAppColors } from "../../context/ThemeContext";
import { SIZES, FONTS } from "../../constants";
import { formatDateTime } from "../../utils/formatters";

export default function HistoryScreen({ navigation }: { navigation: any }) {
  const { history, clearHistory } = useHistoryStore();
  const colors = useAppColors();

  const handleClear = () => {
    Alert.alert("清除记录", "确定要清除所有浏览记录吗？", [
      { text: "取消", style: "cancel" },
      { text: "确定", onPress: clearHistory, style: "destructive" },
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <FocusedStatusBar />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small,
          borderBottomWidth: 0.5,
          borderBottomColor: colors.border,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 4 }}>
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 18,
            fontFamily: FONTS.semiBold,
            color: colors.text,
          }}
        >
          浏览记录
        </Text>
        {history.length > 0 && (
          <TouchableOpacity onPress={handleClear}>
            <Text style={{ fontSize: 14, color: "#FF3B30", fontFamily: FONTS.regular }}>
              清除
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {history.length === 0 ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Ionicons name="time-outline" size={64} color={colors.textSecondary} />
          <Text style={{ marginTop: 16, fontSize: 16, color: colors.textSecondary, fontFamily: FONTS.regular }}>
            暂无浏览记录
          </Text>
        </View>
      ) : (
        <FlatList
          data={history}
          renderItem={({ item }) => (
            <View>
              <NFTCard data={item} />
              <Text
                style={{
                  marginTop: -SIZES.base,
                  marginBottom: SIZES.base,
                  marginHorizontal: SIZES.font,
                  fontSize: 12,
                  color: colors.textSecondary,
                  fontFamily: FONTS.regular,
                }}
              >
                浏览于 {formatDateTime(item.viewedAt)}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.id + item.viewedAt}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: SIZES.small }}
        />
      )}
    </SafeAreaView>
  );
}
