import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "./HomeHeader";
import CustomSearchBar from "../../components/CustomSearchBar";
import MarketingBanner from "../../components/MarketingBanner";
import ProductListing from "../../components/ProductListing";
import CountDownTimer from "../../components/CountDownTimer";
import { useProducts } from "../../hooks/useProducts";
import { AppColors } from "../../assets/colors";

const bannerData = {
  url: "https://google.com",
  title: "Discover Our New Product!",
  description: "Experience the latest innovation with unmatched quality.",
  ctaText: "Shop Now",
  imageUrl: "https://via.placeholder.com/300x200",
};

const HomeScreen = ({navigation}) => {
  const { products, loading, error } = useProducts();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <HomeHeader navigation={navigation} />
        <View style={styles.topSectionWrapper}>
          <CustomSearchBar />
          <MarketingBanner bannerData={bannerData} />
        </View>

        <View style={styles.productListingWrapper}>
          <View style={styles.productSectionTitle}>
            <Text style={styles.sectionTitle}>Flash Sale</Text>
            <CountDownTimer timeInSeconds={3 * 60 * 60} />
          </View>

          {loading && <ActivityIndicator size="large" color={AppColors.neonGreen} />}
          {error && <Text>{error}</Text>}
          {!loading && !error && <ProductListing products={products} />}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    backgroundColor: AppColors.background,
    flex: 1,
  },
  topSectionWrapper: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  productListingWrapper: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "white",
    borderTopStartRadius: 20,
    borderTopRightRadius: 20,
  },
  productSectionTitle: {
    paddingVertical: 10,
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  countDown: {},
});
