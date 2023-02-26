import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import Feed from "./src/pages/Feed/Feed";
import HomeMain from "./src/pages/Home";
import WishList from "./src/pages/WishList/WishList";
import Transaksi from "./src/pages/Transaksi/Transaksi";
import OfficialStore from "./src/pages/OfficialStore/OfficialStore";

import FeedsIcon from "./src/assets/icons/Feeds.svg";
import HomeIcon from "./src/assets/icons/Home.svg";
import OfficialStoreIcon from "./src/assets/icons/officialStore.svg";
import TransaksiIcon from "./src/assets/icons/Transaksi.svg";
import WishListIcon from "./src/assets/icons/wishList.svg";

import FeedsIconActive from "./src/assets/icons/FeedActive.svg";
import HomeIconActive from "./src/assets/icons/HomeActive.svg";
import TransaksiIconActive from "./src/assets/icons/TransaksiActive.svg";
import WishListIconActive from "./src/assets/icons/wishListActive.svg";

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let IconName;
            if (route.name === "HomeMain") {
              IconName = focused ? HomeIconActive : HomeIcon;
            } else if (route.name === "Feed") {
              IconName = focused ? FeedsIconActive : FeedsIcon;
            } else if (route.name === "WishList") {
              IconName = focused ? WishListIconActive : WishListIcon;
            } else if (route.name === "Transaksi") {
              IconName = focused ? TransaksiIconActive : TransaksiIcon;
            } else if (route.name === "OfficialStore") {
              IconName = focused ? OfficialStoreIcon : OfficialStoreIcon;
            }
            return <IconName style={styles.icon}></IconName>;
          },
          header: () => null,
          tabBarActiveTintColor: "#212121",
          tabBarInactiveTintColor: "#6D7588",
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "600",
          },
        })}
      >
        <Tab.Screen name="HomeMain" component={HomeMain} />
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="OfficialStore" component={OfficialStore} />
        <Tab.Screen name="WishList" component={WishList} />
        <Tab.Screen
          name="Transaksi"
          component={Transaksi}
          options={{ tabBarBadge: 3 }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});
