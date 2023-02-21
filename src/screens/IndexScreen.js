import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function IndexScreen(props) {
    console.log(props);
    const {navigation} = props;
  return (
    <View>
      <Text>IndexScreen</Text>
      <Button title='Ir a detalles'
       onPress={() => navigation.navigate('details')} 
       />
      <Button title='Ir a informacion'
      onPress={() => navigation.navigate('information')}/>
      <Button title='Ir a Login'
      onPress={() => navigation.navigate('loginS', {Screen: 'login'})}/>
    </View>
  )
}

const styles = StyleSheet.create({})