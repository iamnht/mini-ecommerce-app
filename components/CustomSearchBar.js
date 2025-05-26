import { StyleSheet, TextInput, View, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";

const CustomSearchBar = () => {
  return (
    <>
      <View style={styles.container}>
        <Icon name="search" size={18} color="#999" style={styles.icon} />
        <TextInput
          placeholder="Search your item"
          placeholderTextColor="#999"
          style={styles.input}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#EFF1F3",
    borderRadius: 12,
    paddingVertical: Platform.OS === "ios" ? 8 : 12,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 8,
    alignSelf: "center",
  },
  input: {
    fontSize: 16,
    flex: 1,
    color: "#333",
    paddingVertical: 0,
    paddingHorizontal: 0,
    lineHeight: 20,
    fontFamily: "Roboto", // Ensure font is available
  },
});

export default CustomSearchBar;
