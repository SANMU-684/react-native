import { useEffect } from "react";
import { View, Text, Image, StatusBar, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { SIZES, assets, SHADOWS, FONTS } from "../../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../../components";
import { useFavoritesStore } from "../../store/useFavoritesStore";
import { useHistoryStore } from "../../store/useHistoryStore";
import { useAppColors } from "../../context/ThemeContext";

const DetailsHeader = ({ data, navigation }: { data: any; navigation: any }) => {
  const { isFavorite, toggleFavorite } = useFavoritesStore();
  const isFav = isFavorite(data.id);

  return (
    <View style={{ width: "100%", height: 373 }}>
      <Image
        source={data.image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />

      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={(StatusBar.currentHeight ?? 0) + 10}
      />

      <CircleButton
        imgUrl={assets.heart}
        right={15}
        top={(StatusBar.currentHeight ?? 0) + 10}
        tintColor={isFav ? "#FF2D55" : undefined}
        handlePress={() => toggleFavorite(data)}
      />
    </View>
  );
};

const DetailsScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const { data } = route.params;
  const { addToHistory } = useHistoryStore();
  const colors = useAppColors();

  useEffect(() => {
    if (data) addToHistory(data);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <FocusedStatusBar />

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.card,
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />

              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: colors.text,
                  }}
                >
                  当前出价
                </Text>
              )}
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default DetailsScreen;
