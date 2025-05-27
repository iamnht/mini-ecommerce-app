import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { AppColors } from "../../assets/colors";

const CartItem = ({ item, onToggleCheck, onIncrease, onDecrease }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.checkbox,
          {
            backgroundColor: item.checked ? AppColors.accent : "transparent",
            borderColor: AppColors.accent
          },
        ]}
        onPress={() => {
          onToggleCheck(item.id);
        }}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: item.checked }}
      >
        {item.checked && (
          <Feather
            name="check"
            size={16}
            color="white"
            style={styles.checkIcon}
          />
        )}
      </TouchableOpacity>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.title}</Text>

        <View style={styles.secondRowWrapper}>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>

          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => onDecrease(item.id)}>
              <AntDesign name="minuscircle" size={16} color="black" />
            </TouchableOpacity>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <TouchableOpacity onPress={() => onIncrease(item.id)}>
              <AntDesign name="pluscircle" size={16} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderColor: "#ccc",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    marginHorizontal: 10,
    borderRadius: 8,
    resizeMode: "contain",
  },
  details: { flex: 1, borderBottomWidth: 1, padding: 8, borderBottomColor: AppColors.background },
  name: {
    fontSize: 16,
  },
  price: {
    color: "black",
    fontWeight: 600,
    marginTop: 4,
  },
  secondRowWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  qtyButton: {
    padding: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
  },
  qtyButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});
