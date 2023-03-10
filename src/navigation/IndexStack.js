import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from '../screens/IndexScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function IndexStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="indexS" component={IndexScreen} options={{title: 'Inicio'}} />
        <Stack.Screen name="loginS" component={LoginScreen} options={{title: 'Login'}} />
    </Stack.Navigator>
  )
}