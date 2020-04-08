import React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Pages/Home";
import Repositores from "./Pages/Repositores";
import Detail from "./Components/Detail";
import Login from "./Pages/Login";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContentOptions={{
        activeTintColor: "#ffe88d",
        inactiveTintColor: "#fffd",
        itemStyle: { marginVertical: 15 },
        style: {
          backgroundColor: "#333",
          borderRightWidth: 2,
          borderRightColor: "#444",
        },
      }}
      initialRouteName="home"
    >
      <Drawer.Screen name="Inicio" component={Home} />
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
        <Stack.Screen name="detail" component={Detail} />
        <Stack.Screen name="drawer" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
