import { useEffect, useMemo, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView as SafeAreaBottom,
  SafeAreaView,
} from "react-native-safe-area-context";
import { AppColors } from "../../assets/colors";
import CustomToolBar from "../../components/CustomToolBar";
import FullWidthButton from "../../components/FullWidthButton";
import { useCart } from "../../hooks/useCartItems";
import CartItem from "./CartItem";

const CartScreen = ({ navigation }) => {
  const { cartItems, cartItemCount } = useCart();
  const [addedItems, setCartItems] = useState(cartItems);

  useEffect(() => {
    if (Array.isArray(cartItems)) {
      const initialized = cartItems.map((item) => ({
        ...item,
        quantity: item.quantity ?? 1,
        checked: item.checked ?? true,
      }));
      setCartItems(initialized);
    }
  }, [cartItems]);

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

  const totalPrice = useMemo(() => {
    return addedItems
      .filter((item) => item.checked)
      .reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 1), 0)
      .toFixed(2);
  }, [addedItems]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <CustomToolBar titleScreen="Cart" isShowRightBtn={false} />

      <View style={styles.container}>
        <FlatList
          data={addedItems}
          keyExtractor={(item) => item.id?.toString()}
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
          <Text style={styles.totalAmount}>${totalPrice}</Text>
        </View>
        <FullWidthButton
          buttonText="Back to Home"
          tapAction={handleNavigateToHome}
        />
      </SafeAreaBottom>
    </SafeAreaView>
  );
};

export default CartScreen;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    backgroundColor: AppColors.background,
    flex: 1,
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
