import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { NFTCard, FocusedStatusBar } from "../../components";
import { useFavoritesStore } from "../../store/useFavoritesStore";
import { useAppColors } from "../../context/ThemeContext";
import { SIZES, FONTS } from "../../constants";

export default function FavoritesScreen({ navigation }: { navigation: any }) {
  const { favorites } = useFavoritesStore();
  const colors = useAppColors();

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
            marginRight: 32,
          }}
        >
          收藏
        </Text>
      </View>

      {favorites.length === 0 ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Ionicons name="bookmark-outline" size={64} color={colors.textSecondary} />
          <Text style={{ marginTop: 16, fontSize: 16, color: colors.textSecondary, fontFamily: FONTS.regular }}>
            还没有收藏
          </Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          renderItem={({ item }) => <NFTCard data={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: SIZES.small }}
        />
      )}
    </SafeAreaView>
  );
}
