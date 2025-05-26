import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const CustomToolBar = ({ titleScreen, isShowRightBtn }) => {
  const [showRightBtn, setShowRightBtn] = useState(isShowRightBtn);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather
          name="arrow-left"
          size={24}
          color="black"
          style={styles.iconWrapper}
        />
      </TouchableOpacity>
      <Text style={styles.titleText}>{titleScreen}</Text>
      {showRightBtn ? (
        <TouchableOpacity onPress={() => console.log("Right button pressed")}>
          <Feather
            name="more-vertical"
            size={24}
            color="black"
            style={styles.iconWrapper}
          />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 24 }} /> // spacer for layout consistency
      )}
    </View>
  );
};

export default CustomToolBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    width: "100%",
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  iconWrapper: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 4,
  },

  titleText: {
    fontSize: 24,
  },
});
