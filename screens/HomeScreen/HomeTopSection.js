import { View } from "react-native";
import { StyleSheet } from 'react-native';
import CustomSearchBar from "../../components/CustomSearchBar";

const HomeTopSection = () => {
  return <>
    <View style={styles.wrapper}>
        <CustomSearchBar/>
        
    </View>
  </>;
};

export default HomeTopSection;

const styles = StyleSheet.create({
  wrapper: {

    padding: 16,
  },
});
