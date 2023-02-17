import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from '../screens/IndexScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="index" component={IndexScreen} options={{title: 'Inicio'}} />
    </Stack.Navigator>
  )
}