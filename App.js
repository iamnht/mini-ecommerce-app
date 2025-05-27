import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, useColorScheme } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import CartScreen from "./screens/CartScreen/CartScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ProductDetailScreen from "./screens/ItemDetailScreen/ProductDetailScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

function App() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetailScreen}
            />
            <Stack.Screen name="Cart" component={CartScreen} />
          </Stack.Navigator>
          <Toast />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
