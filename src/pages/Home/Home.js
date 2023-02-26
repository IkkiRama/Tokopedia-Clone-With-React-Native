import React, { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Navbar from "../../components/Navbar";
import Map from "../../assets/icons/Navbar/map.svg";
import MainFitur from "../../components/MainFitur";

const Home = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate("Coba");
  };

  const [fiturAtas, setFiturAtas] = useState([
    {
      nama: "Spesial\nImlek",
      image: require("../../assets/images/fitur/1spesialImlek.png"),
    },
    {
      nama: "Lihat\nSemua",
      image: require("../../assets/images/fitur/2lihatSemua.png"),
    },

    {
      nama: "Toserba",
      image: require("../../assets/images/fitur/3toserba.png"),
    },

    {
      nama: "Buku",
      image: require("../../assets/images/fitur/4buku.png"),
    },

    {
      nama: "Top Up &\nTagihan",
      image: require("../../assets/images/fitur/5topupTagihan.png"),
    },

    {
      nama: "Travel &\nEntertainment",
      image: require("../../assets/images/fitur/6travel.png"),
    },

    {
      nama: "Keuangan",
      image: require("../../assets/images/fitur/7Keuangan.png"),
    },

    {
      nama: "Elektronik",
      image: require("../../assets/images/fitur/8Elektronik.png"),
    },

    {
      nama: "Kecantikan",
      image: require("../../assets/images/fitur/9Kecantikan.png"),
    },

    {
      nama: "Kesehatan",
      image: require("../../assets/images/fitur/10Kesehatan.png"),
    },

    {
      nama: "Komputer\n& Laptop",
      image: require("../../assets/images/fitur/11KomputerLaptop.png"),
    },
  ]);

  const [fiturBawah, setFiturBawah] = useState([
    {
      nama: "Official\nStore",
      image: require("../../assets/images/fitur/12official_store_badge.png"),
    },
    {
      nama: "Live\nShopping",
      image: require("../../assets/images/fitur/13LiveShopping.png"),
    },
    {
      nama: "Tokopedia\nSeru",
      image: require("../../assets/images/fitur/14tokopediaSeru.png"),
    },
    {
      nama: "Diskon Di\nSemarang",
      image: require("../../assets/images/fitur/15diskonDiSemarang.png"),
    },

    {
      nama: "GoPay\nLetter Cicil",
      image: require("../../assets/images/fitur/16gopayLetterCicil.png"),
    },

    {
      nama: "Bayar di\nTempat",
      image: require("../../assets/images/fitur/17cod.png"),
    },

    {
      nama: "Bangga\nLokal",
      image: require("../../assets/images/fitur/18BanggaLokalBawah.png"),
    },
  ]);

  const [slideMainPromo, setSlideMainPromo] = useState([
    {
      image: require("../../assets/images/slideMain/1slide.jpg"),
    },
    {
      image: require("../../assets/images/slideMain/2slide.jpg"),
    },
    {
      image: require("../../assets/images/slideMain/3slide.jpg"),
    },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <StatusBar
          translucent
          barStyle={"light-content"}
          backgroundColor="transparent"
        ></StatusBar>
        {/* Header */}
        <View
          style={{
            backgroundColor: "#00AA5B",
          }}
        >
          <View
            style={{
              paddingTop: 40,
              paddingBottom: 20,
              paddingHorizontal: 10,
            }}
          >
            <Navbar></Navbar>

            {/* Map */}
            <View>
              <Text style={{ color: "#fff", marginTop: 10, fontSize: 15 }}>
                <Map width={17} height={17} style={{ color: "#fff" }}></Map>{" "}
                Dikirim ke{" "}
                <Text style={{ fontWeight: "800" }}>Rumah Rifki Romadhan</Text>
                {"   "}
                <FontAwesome5
                  name="angle-down"
                  color="#fff"
                  size={15}
                ></FontAwesome5>
              </Text>
            </View>

            {/* Gopay */}
            <View
              style={{
                backgroundColor: "#fff",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                borderRadius: 10,
                marginTop: 10,
              }}
            >
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ width: 20, height: 20, marginRight: 5 }}
                    source={require("../../assets/icons/gopay.png")}
                  ></Image>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "400",
                      color: "#6D7588",
                    }}
                  >
                    GoPay
                  </Text>
                </View>
                <Text
                  style={{ color: "#212121", fontWeight: "800", fontSize: 17 }}
                >
                  Rp 30.000
                </Text>
                <Text
                  style={{ fontSize: 12, color: "#6D7588", fontWeight: "400" }}
                >
                  3.211 Coins
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ width: 20, height: 20, marginRight: 5 }}
                    source={require("../../assets/icons/member_silver.png")}
                  ></Image>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "400",
                      color: "#6D7588",
                    }}
                  >
                    Reward
                  </Text>
                </View>
                <Text
                  style={{ color: "#212121", fontWeight: "800", fontSize: 17 }}
                >
                  Silver
                </Text>
                <Text
                  style={{ fontSize: 12, color: "#6D7588", fontWeight: "400" }}
                >
                  8 Kupon Baru
                </Text>
              </View>
            </View>
          </View>
          {/* Fitur & Menu */}
          <View
            style={{
              backgroundColor: "#fff",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              padding: 5,
            }}
          >
            <MainFitur fitur={fiturAtas} navigation={navigation}></MainFitur>
            {/* Slide */}
            <FlatList
              data={slideMainPromo}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Image
                  source={item.image}
                  style={{
                    margin: 5,
                    height: 100,
                    width: 320,
                    borderRadius: 10,
                  }}
                  resizeMode={"contain"}
                ></Image>
              )}
            ></FlatList>

            <MainFitur fitur={fiturBawah} navigation={navigation}></MainFitur>

            {/* Kejar Diskon Spesial */}
            <View>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#212121",
                      fontWeight: "700",
                    }}
                  >
                    Kejar Diskon Spesial
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        color: "#6D7588",
                        marginRight: 10,
                        fontSize: 15,
                      }}
                    >
                      Berakhir dalam
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        paddingVertical: 2,
                        paddingHorizontal: 5,
                        backgroundColor: "#E02954",
                        color: "#fff",
                        borderRadius: 10,
                        elevation: 2,
                        fontWeight: "600",
                      }}
                    >
                      <FontAwesome5 size={15} name="clock"></FontAwesome5> 01 :
                      23 : 40
                    </Text>
                  </View>
                </View>
                <Text
                  style={{ fontSize: 14, color: "#00AA5B", fontWeight: "700" }}
                >
                  Lihat Semua
                </Text>
              </View>

              <View style={{ marginTop: 300 }}>
                <Button title="Back to Coba" onPress={onPressHandler}></Button>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
