import * as React from "react";
import { Platform, StyleSheet, View, StatusBar } from "react-native";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import Login from "./screens/Login";
import Register from "./screens/Register";
import BottomSheetContext from "./components/BottomSheetContext";
import OpenBottomSheet from "./components/BottomSheet";
import StockList from "./components/WatchList";
import { StocksProvider } from "./contexts/StocksContext";
import "react-native-gesture-handler";

const Stack = createStackNavigator();

export default function App(props) {
  return (
    <View style={styles.container}>
      <StocksProvider>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <NavigationContainer theme={DarkTheme}>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={BottomTabNavigator} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen
              name="BottomSheetContext"
              component={BottomSheetContext}
            />
            <Stack.Screen name="OpenBottomSheet" component={OpenBottomSheet} />
            <Stack.Screen name="StockList" component={StockList} />
          </Stack.Navigator>
        </NavigationContainer>
      </StocksProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
