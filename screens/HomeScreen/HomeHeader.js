import Feather from "@expo/vector-icons/Feather";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

const HomeHeader = ({ navigation }) => {
  const cartItemCount = useSelector((state) => state.cartItems.cartItemCount);

  const handleNavigateCart = () => {
    navigation.navigate("Cart");
  };

  return (
    <View style={styles.headerContainer}>
      {/* App Logo*/}
      <TouchableOpacity style={styles.iconWrapper}>
        <View style={styles.appLogo}>
          <Feather name="percent" size={20} color="#000" />
        </View>
      </TouchableOpacity>

      {/* Hardcode: Location and Search */}
      <View style={styles.titleWrapper}>
        <Text style={styles.label}>Delivery address</Text>
        <Text style={styles.address}>92 High Street, London</Text>
      </View>

      {/* Cart */}
      <TouchableOpacity style={styles.iconWrapper} onPress={handleNavigateCart}>
        <View style={styles.notiButtonWrapper}>
          <Feather name="shopping-cart" size={22} color="#000" />
          {cartItemCount > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cartItemCount}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 16,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  appLogo: {
    backgroundColor: "#D6FF4B",
    borderRadius: 20,
    padding: 8,
  },
  notiButtonWrapper: {
    position: "relative",
    backgroundColor: "#EFF1F3",
    borderRadius: 80,
    padding: 8,
  },
  cartBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "red",
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  cartBadgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  titleWrapper: {
    alignItems: "center",
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: "#888",
  },
  address: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
