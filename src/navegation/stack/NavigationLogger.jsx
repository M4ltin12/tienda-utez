import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "@rneui/base";
import HomeScreen from "../views/HomeScreen";
import ProfileScreen from "../views/ProfileScreen";
import Login from "../modules/auth/screens/Login";
import CreateAccount from "../modules/auth/screens/CreateAccount";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        const { iconName, iconType } = getIconName(route.name, focused);
        return <Icon name={iconName} type={iconType} size={size} color={color} />;
      },
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
      tabBarStyle: { backgroundColor: "#fff", height: 60, paddingBottom: 10 },
      headerShown: false, // Oculta encabezado dentro de tabs
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} options={{ title: "Inicio" }} />
    <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: "Perfil" }} />
  </Tab.Navigator>
);

export default function NavigationLogger() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const getIconName = (routeName, focused) => {
  let iconName = "";
  const iconType = "material-community";

  switch (routeName) {
    case "Home":
      iconName = focused ? "home" : "home-outline";
      break;
    case "Profile":
      iconName = focused ? "account" : "account-outline";
      break;
  }
  return { iconName, iconType };
};
