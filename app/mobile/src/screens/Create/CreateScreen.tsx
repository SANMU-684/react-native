import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import FocusedStatusBar from "../../components/layout/FocusedStatusBar";
import { useAppColors } from "../../context/ThemeContext";
import { SIZES, FONTS } from "../../constants";

export default function CreateScreen({ navigation }: { navigation: any }) {
  const colors = useAppColors();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleCreate = () => {
    if (!name.trim() || !description.trim() || !price.trim()) {
      Alert.alert("提示", "请填写完整信息");
      return;
    }
    Alert.alert("创建成功", `作品「${name}」已发布`, [
      { text: "好的", onPress: () => navigation.goBack() },
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
          <Ionicons name="close" size={24} color={colors.text} />
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
          创建作品
        </Text>
      </View>

      <ScrollView style={{ flex: 1, padding: SIZES.font }}>
        <View
          style={{
            width: "100%",
            height: 200,
            borderRadius: SIZES.font,
            backgroundColor: colors.divider,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: SIZES.extraLarge,
          }}
        >
          <Ionicons name="image-outline" size={48} color={colors.textSecondary} />
          <Text style={{ marginTop: 8, color: colors.textSecondary, fontFamily: FONTS.regular }}>
            添加封面图片
          </Text>
        </View>

        <Text style={{ color: colors.text, fontFamily: FONTS.semiBold, fontSize: SIZES.medium, marginBottom: 8 }}>
          作品名称
        </Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="输入作品名称"
          placeholderTextColor={colors.textSecondary}
          style={{
            backgroundColor: colors.card,
            borderRadius: SIZES.base,
            padding: SIZES.font,
            color: colors.text,
            fontFamily: FONTS.regular,
            fontSize: SIZES.font,
            marginBottom: SIZES.extraLarge,
          }}
        />

        <Text style={{ color: colors.text, fontFamily: FONTS.semiBold, fontSize: SIZES.medium, marginBottom: 8 }}>
          作品描述
        </Text>
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="描述你的作品"
          placeholderTextColor={colors.textSecondary}
          multiline
          numberOfLines={4}
          style={{
            backgroundColor: colors.card,
            borderRadius: SIZES.base,
            padding: SIZES.font,
            color: colors.text,
            fontFamily: FONTS.regular,
            fontSize: SIZES.font,
            marginBottom: SIZES.extraLarge,
            minHeight: 100,
            textAlignVertical: "top",
          }}
        />

        <Text style={{ color: colors.text, fontFamily: FONTS.semiBold, fontSize: SIZES.medium, marginBottom: 8 }}>
          价格
        </Text>
        <TextInput
          value={price}
          onChangeText={setPrice}
          placeholder="输入价格"
          placeholderTextColor={colors.textSecondary}
          keyboardType="numeric"
          style={{
            backgroundColor: colors.card,
            borderRadius: SIZES.base,
            padding: SIZES.font,
            color: colors.text,
            fontFamily: FONTS.regular,
            fontSize: SIZES.font,
            marginBottom: SIZES.extraLarge * 2,
          }}
        />

        <TouchableOpacity
          onPress={handleCreate}
          style={{
            backgroundColor: colors.primary,
            borderRadius: SIZES.extraLarge,
            padding: SIZES.font,
            alignItems: "center",
            marginBottom: SIZES.extraLarge * 2,
          }}
        >
          <Text style={{ color: colors.textInverse, fontFamily: FONTS.semiBold, fontSize: SIZES.medium }}>
            发布作品
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
