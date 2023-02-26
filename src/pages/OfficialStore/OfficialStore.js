import { View, Text, Button } from "react-native";
import React from "react";

export default function OfficialStore() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 26, fontWeight: "600" }}>OfficialStore</Text>
      <Button
        title="Back to Home"
        onPress={() => navigation.replace("Home")}
      ></Button>
    </View>
  );
}
