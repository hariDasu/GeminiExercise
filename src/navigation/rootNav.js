import * as React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import store from "../store/createStore";
import { SignInScreen } from "../screens/SignInScreen";
import TransactionHistory from "../screens/TransactionHistoryScreen";

const Stack = createStackNavigator();

export default function Root() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen
            name="TransactionHistory"
            component={TransactionHistory}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
