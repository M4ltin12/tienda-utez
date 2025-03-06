import { app } from './src/config/utils/firabaseConnection';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/modules/auth/screens/Login';
import CreateAccount from './src/modules/auth/screens/CreateAccount';
import HomeScreen from './src/views/HomeScreen';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
}