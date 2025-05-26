import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';

const ProductDetailToolBar = () => {
const navigation = useNavigation();
    
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Feather name="arrow-left" size={24} color="black" style={styles.iconWrapper} />
      </TouchableOpacity>
      <View style={styles.rightButtonWrapper}>
        <Ionicons
          style={styles.iconWrapper}
          name="heart"
          size={24}
          color="red"
        />
        <Feather
          style={styles.iconWrapper}
          name="share"
          size={24}
          color="black"
        />
      </View>
    </View>
  );
};

export default ProductDetailToolBar;

const styles = StyleSheet.create({
  headerWrapper: {
    position: "absolute",
    top: 16,
    left: 16,
    right: 16,
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rightButtonWrapper: {
    flexDirection: "row",
  },
  iconWrapper: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 8,
    marginLeft: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4, // Android only
  },
});
