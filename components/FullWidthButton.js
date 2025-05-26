import {
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native";

import { AppColors } from "../assets/colors";

const FullWidthButton = ({buttonText, tapAction}) => {
  return (
    <TouchableOpacity style={styles.buttonWrapper} onPress={tapAction}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: AppColors.neonGreen,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
  },
});

export default FullWidthButton;
