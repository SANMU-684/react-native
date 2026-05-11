import { useState } from "react";
import { View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { NFTCard, HomeHeader, FocusedStatusBar } from "../../components";
import { NFTData } from "../../constants";
import { useAppColors } from "../../context/ThemeContext";

const HomeScreen = () => {
  const [nftData, setNftData] = useState<any[]>(NFTData as any[]);
  const colors = useAppColors();

  const handleSearch = (value: string) => {
    if (value.length === 0) {
      setNftData(NFTData as any[]);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(NFTData as any[]);
    } else {
      setNftData(filteredData as any[]);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: colors.surface }} />
          <View style={{ flex: 1, backgroundColor: colors.background }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
