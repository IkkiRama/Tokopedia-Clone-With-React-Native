import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Kesehatan from "./Kesehatan";
import Home from "./Home";

export default function HomeMain() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
        animationEnabled: false,
        animation: "none",
      }}
    >
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="KesehatanMain" component={Kesehatan}></Stack.Screen>
    </Stack.Navigator>
  );
}
