import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreens from '../screens/DetailsScreens';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function DetailsStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="detailsS" component={DetailsScreens} options={{title: 'Detalles'}} />
        <Stack.Screen name="loginS" component={LoginScreen} options={{title: 'Login'}} />
    </Stack.Navigator>
  )
}