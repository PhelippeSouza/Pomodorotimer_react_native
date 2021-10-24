import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import { Provider } from "react-redux";
import ActivityTimer from "./src/Screens/ActivityTimer/ActivityTimer";
import BreakPage from "./src/Screens/BreakPage/BreakPage";
import { store } from "./store";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ActivityTimer">
          <Stack.Screen 
            options={{ headerShown: false }}
            name="ActivityTimer"
            component={ActivityTimer}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="BreakPage"
            component={BreakPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
