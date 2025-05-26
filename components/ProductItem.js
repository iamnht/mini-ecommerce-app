// src/components/ProductItem.js
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = (width - 48) / 2;

const ProductItem = ({ item, isInCart, onToggleCart, isFavorite, onToggleFavorite }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("ProductDetail", { product: item })}
      activeOpacity={0.9}
    >
      {/* Favorite button (top right) */}
      <TouchableOpacity
        style={styles.favoriteIcon}
        onPress={() => onToggleFavorite(item.id)}
      >
        <Icon
          name={isFavorite ? "heart" : "heart-outline"}
          size={20}
          color={isFavorite ? "red" : "gray"}
        />
      </TouchableOpacity>

      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name} numberOfLines={1}>
        {item.title}
      </Text>
      <View style={styles.bottomRow}>
        <Text style={styles.price}>${item.price}</Text>
        <TouchableOpacity onPress={() => onToggleCart(item.id)}>
          <Icon
            name={isInCart ? "cart" : "cart-outline"}
            size={20}
            color={isInCart ? "#00C853" : "gray"}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: ITEM_WIDTH,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
    position: "relative",
  },
  favoriteIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
    padding: 4,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 16,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: "contain",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: "#333",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ProductItem;