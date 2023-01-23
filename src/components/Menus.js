import { View, Text } from "react-native";

import Feeds from "../assets/icons/feeds.svg";
import Home from "../assets/icons/home.svg";
import OfficialStore from "../assets/icons/officialStore.svg";
import Transaksi from "../assets/icons/Transaksi.svg";
import WishList from "../assets/icons/wishList.svg";

const Menus = () => {
  return (
    <View>
      <View>
        <Home></Home>
        <Text>Home</Text>
      </View>

      <View>
        <Feeds></Feeds>
        <Text>Feeds</Text>
      </View>

      <View>
        <OfficialStore></OfficialStore>
        <Text>official Store</Text>
      </View>

      <View>
        <WishList></WishList>
        <Text>Wishlist</Text>
      </View>

      <View>
        <Transaksi></Transaksi>
        <Text>Transaksi</Text>
      </View>
    </View>
  );
};

export default Menus;
