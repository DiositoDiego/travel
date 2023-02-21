import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from '../screens/IndexScreen';
import DetailsScreens from '../screens/DetailsScreens';
import InformationScreen from '../screens/InformationScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../screens/LoginScreen';
import IndexStack from './IndexStack';
import DetailsStack from './DetailsStack';

/* const Drawer = createDrawerNavigator(); */

/* export default function AppNavigation() {
    return (
        <Drawer.Navigator>
          <Drawer.Screen name="index" component={IndexScreen} />
          <Drawer.Screen name="details" component={DetailsScreens} />
          <Drawer.Screen name="information" component={InformationScreen} />
        </Drawer.Navigator>
    );
} */

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="index" component={IndexStack} title={'Inicio'}/>
          <Tab.Screen name="details" component={DetailsStack} />
          <Tab.Screen name="information" component={InformationScreen} options={{title: 'Informacion', headerShown: true}} />
          <Tab.Screen name="login" component={LoginScreen} />
        </Tab.Navigator>
    );
}


/* const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="index" component={IndexScreen} options={{title: 'Inicio'}} />
        <Stack.Screen name="details" component={DetailsScreens} options={{title: 'details'}} />
        <Stack.Screen name="information" component={InformationScreen} options={{title: 'information'}} />
    </Stack.Navigator>
  )
} */