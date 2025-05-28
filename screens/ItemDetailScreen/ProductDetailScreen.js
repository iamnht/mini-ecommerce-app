import { Ionicons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';

import { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView as SafeAreaBottom,
  SafeAreaView,
} from "react-native-safe-area-context";
import { AppColors } from "../../assets/colors";
import CustomDialogTwoButton from "../../components/CustomDialogTwoButton";
import ProductDetailToolBar from "./ProductDetailToolBar";
import FullWidthButton from "../../components/FullWidthButton";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartItemSlice";

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const [dialogVisible, setDialogVisible] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    setDialogVisible(true);
    dispatch(addItem(item))
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <ProductDetailToolBar />
      </View>

      {/* Product Info */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.detailsContainer}
      >
        <Text style={styles.name}>{product.title}</Text>

        <View style={styles.ratingContainer}>
          <View style={styles.ratingWrapper}>
            <AntDesign name="star" size={16} color={AppColors.accent} />
            <Text style={styles.ratingText}>{product.rating.rate}</Text>
            <Text style={styles.ratingCount}>
              ({product.rating.count} reviews)
            </Text>
          </View>
        </View>

        <View style={styles.priceWrapper}>
          <Text style={styles.price}>${product.price}</Text>
          <TouchableOpacity>
            <Ionicons name="information-circle-outline" size={16} />
          </TouchableOpacity>
        </View>

        <View style={styles.descriptionWrapper}>
          <Text>{product.description}</Text>
        </View>
      </ScrollView>

      <SafeAreaBottom edges={["bottom"]} style={styles.buttonContainer}>
        <FullWidthButton buttonText={"Add to Cart"} tapAction={() => handleAddToCart(product)} />
      </SafeAreaBottom>

      <CustomDialogTwoButton
        visible={dialogVisible}
        title="Item Added"
        message={"Your item has been successfully added to your cart!"}
        primaryButtonText="View Your Cart"
        secondaryButtonText="OK"
        onDismiss={() => setDialogVisible(false)}
        screenType="Cart"
      />
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get("window");
const IMAGE_HEIGHT = (1 / 2) * height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageWrapper: {
    position: "relative",
  },

  image: {
    width: width,
    height: IMAGE_HEIGHT,
    resizeMode: "contain",
    backgroundColor: "#f9f9f9",
  },
  detailsContainer: {
    flex: 1,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    backgroundColor: "white",
    padding: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: AppColors.background,
  },
  ratingText: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  ratingCount: {
    fontSize: 12,
    color: "#666",
  },
  priceWrapper: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#EFF1F3",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  descriptionWrapper: {
    marginVertical: 12,
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
  addButton: {
    backgroundColor: AppColors.neonGreen,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: "600",
  },
});

export default ProductDetailScreen;
