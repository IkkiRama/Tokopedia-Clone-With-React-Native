import { View, Text, Button } from "react-native";
import React from "react";

export default function Transaksi({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 26, fontWeight: "600" }}>Transaksi</Text>
      <Button
        title="Back to Home"
        onPress={() => navigation.replace("Home")}
      ></Button>
    </View>
  );
}
