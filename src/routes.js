import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Pages/Home";
import Repositores from "./Pages/Repositores";

import Login from "./Pages/Login";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerType="slide"
      screenOptions={{
        headerShown: true,
        style: {
          backgroundColor: "#333333",
        },
      }}
      initialRouteName="home"
    >
      <Drawer.Screen name="home" component={Home} />
      <Drawer.Screen name="repositores" component={Repositores} />
      <Drawer.Screen name="login" component={Login} />
    </Drawer.Navigator>
  );
}

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="drawer" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
