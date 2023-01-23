import { View, Text, FlatList, Image } from "react-native";
import React from "react";

const MainFitur = ({ fitur }) => {
  return (
    <FlatList
      style={{
        margin: 5,
      }}
      data={fitur}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View
          style={{
            alignItems: "center",
            marginHorizontal: 15,
            marginVertical: 8,
          }}
        >
          <Image style={{ width: 30, height: 30 }} source={item.image}></Image>
          <Text
            style={{
              fontSize: 11,
              color: "#212121",
              textAlign: "center",
              marginTop: 7,
              fontWeight: "400",
            }}
          >
            {item.nama}
          </Text>
        </View>
      )}
    ></FlatList>
  );
};

export default MainFitur;
