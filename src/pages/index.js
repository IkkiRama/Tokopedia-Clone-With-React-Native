import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import IonIcon from "@expo/vector-icons/Ionicons";
import Menus from "../components/Menus";
import Navbar from "../components/Navbar";

const TokopediaClone = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <StatusBar
          translucent
          barStyle={"light-content"}
          backgroundColor="transparent"
        ></StatusBar>
        <View>
          {/* Header */}
          <View
            style={{
              paddingVertical: 40,
              paddingHorizontal: 10,
              backgroundColor: "#00AA5B",
            }}
          >
            <Navbar></Navbar>

            {/* Map */}
            <View>
              <Text style={{ color: "#fff", marginTop: 15, fontSize: 15 }}>
                <FontAwesome5
                  name="map-marker-alt"
                  color="#fff"
                  size={17}
                ></FontAwesome5>{" "}
                Dikirim ke{" "}
                <Text style={{ fontWeight: "600" }}>Rumah Rifki Romadhan</Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* <View>
        <Text>KAKAKA</Text>
      </View> */}
      {/* <Menus></Menus> */}
    </View>
  );
};

export default TokopediaClone;
