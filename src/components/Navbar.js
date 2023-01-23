import { Text, TextInput, View } from "react-native";
import IonIcon from "@expo/vector-icons/Ionicons";
import Search from "../assets/icons/search.svg";
import Mail from "../assets/icons/Navbar/mail.svg";
import Bell from "../assets/icons/Navbar/bell.svg";
import Bars from "../assets/icons/Navbar/bars.svg";
import Cart from "../assets/icons/Navbar/cart.svg";

const Navbar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {/* Search */}
      <View style={{ width: "55%", position: "relative" }}>
        <TextInput
          placeholder="Cari di Tokopedia"
          style={{
            // paddingHorizontal: 20,
            paddingLeft: 25,
            paddingVertical: 3,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#DBDEE2",
            backgroundColor: "#fff",
            elevation: 2,
            color: "#212121",
            fontSize: 16,
            fontWeight: "500",
          }}
        ></TextInput>
        <Search style={{ position: "absolute", top: 6, left: 3 }}></Search>
      </View>

      <View style={{ position: "relative" }}>
        {/* <IonIcon color="#fff" name="mail-outline" size={26}></IonIcon> */}
        <Mail
          width={27}
          height={27}
          style={{ color: "#fff", backgroundColor: "transparent" }}
        ></Mail>
        <View
          style={{
            width: 18,
            height: 18,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: -5,
            left: 10,
            borderRadius: 5,
            backgroundColor: "#E02954",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 10,
              fontWeight: "600",
            }}
          >
            24
          </Text>
        </View>
      </View>
      <View style={{ position: "relative" }}>
        {/* <IonIcon color="#fff" size={26} name="notifications-outline"></IonIcon> */}
        <Bell
          width={27}
          height={27}
          style={{ color: "#fff", backgroundColor: "transparent" }}
        ></Bell>
        <View
          style={{
            width: 18,
            height: 18,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: -5,
            left: 10,
            borderRadius: 5,
            backgroundColor: "#E02954",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 10,
              fontWeight: "600",
            }}
          >
            10
          </Text>
        </View>
      </View>

      <View style={{ position: "relative" }}>
        {/* <IonIcon color="#fff" size={26} name="cart-outline"></IonIcon> */}
        <Cart
          width={27}
          height={27}
          style={{ color: "#fff", backgroundColor: "transparent" }}
        ></Cart>
        <View
          style={{
            width: 18,
            height: 18,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: -5,
            left: 10,
            borderRadius: 5,
            backgroundColor: "#E02954",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 10,
              fontWeight: "600",
            }}
          >
            39
          </Text>
        </View>
      </View>
      <View>
        {/* <IonIcon color="#fff" size={32} name="menu-outline"></IonIcon> */}
        <Bars
          width={27}
          height={27}
          style={{ color: "#fff", backgroundColor: "transparent" }}
        ></Bars>
      </View>
    </View>
  );
};

export default Navbar;
