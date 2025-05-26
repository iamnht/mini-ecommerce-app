import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const MarketingBanner = ({ bannerData }) => {
  const { url, title, description, ctaText, imageUrl } = bannerData;

  const handlePress = () => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.banner}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>{ctaText}</Text>
          </TouchableOpacity>
        </View>
        {imageUrl && (
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
    marginVertical: 16,
  },
  banner: {
    flexDirection: "row",
    backgroundColor: "#D6FF4B",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  textContainer: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#000000",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
  },
  image: {
    width: 120,
    height: "100%",
  },
});

export default MarketingBanner;
