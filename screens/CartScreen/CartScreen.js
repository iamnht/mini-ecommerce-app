import { useMemo, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native"; // Added Text import
import {
  SafeAreaView as SafeAreaBottom,
  SafeAreaView,
} from "react-native-safe-area-context";
import { AppColors } from "../../assets/colors";
import CustomToolBar from "../../components/CustomToolBar";
import FullWidthButton from "../../components/FullWidthButton";
import CartItem from "./CartItem";

const initialCartItems = [
  {
    id: "1",
    name: "Nitendo Switch 2",
    price: 299.0,
    quantity: 1,
    image:
      "https://www.droidshop.vn/wp-content/uploads/2023/12/May-choi-game-Nintendo-Switch-V2-Mario-Kart-8-Deluxe-Bundle-Nintendo-Switch-Online-Membership-3.jpg",
    checked: true,
  },
  {
    id: "2",
    name: "Playstation 5",
    price: 499.0,
    quantity: 2,
    image:
      "https://hanoicomputercdn.com/media/product/86482_may_choi_game_sony_playstation_5_ps5_pro_1.jpg",
    checked: true,
  },
];

const CartScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleNavigateToHome = () => {
    navigation.navigate("Home");
  };

  const toggleCheck = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const total = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      if (item.checked) {
        return sum + item.quantity * item.price;
      }
      return sum;
    }, 0);
  }, [cartItems]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomToolBar titleScreen={"Cart"} isShowRightBtn={false} />

      <View style={styles.container}>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CartItem
              item={item}
              onToggleCheck={toggleCheck}
              onIncrease={increaseQty}
              onDecrease={decreaseQty}
            />
          )}
          style={styles.listWrapper}
        />
      </View>

      <SafeAreaBottom edges={["bottom"]} style={styles.buttonContainer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total Price:</Text>
          <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
        </View>
        <FullWidthButton
          buttonText={"Back to Home"}
          tapAction={handleNavigateToHome}
        />
      </SafeAreaBottom>
    </SafeAreaView>
  );
};

export default CartScreen;

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    backgroundColor: AppColors.background,
  },
  listWrapper: {
    backgroundColor: "white",
    marginTop: 12,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: width,
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "700",
    color: AppColors.primary,
  },
});
