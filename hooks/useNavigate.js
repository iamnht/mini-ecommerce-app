import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

const useNavigate = (screenType, params = {}) => {
  const navigation = useNavigation();
  return useCallback(() => {
    if(screenType){
        navigation.navigate(screenType, params);
    }
  }, [screenType, navigation, params]);
};


export default useNavigate;
