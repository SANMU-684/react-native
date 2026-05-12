import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { FONTS, SIZES, assets } from "../../constants";
import { useAppColors } from "../../context/ThemeContext";

const HomeHeader = ({ onCreate }: { onCreate: () => void }) => {
  const colors = useAppColors();

  return (
    <View
      style={{
        backgroundColor: colors.surface,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        />

        <TouchableOpacity
          onPress={onCreate}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "rgba(255,255,255,0.2)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="add" size={28} color={colors.textInverse} />
        </TouchableOpacity>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: colors.textInverse,
          }}
        >
          你好，Victoria 👋
        </Text>

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: colors.textInverse,
            marginTop: SIZES.base / 2,
          }}
        >
          来找找你的艺术珍品
        </Text>
      </View>
    </View>
  );
};

export default HomeHeader;
