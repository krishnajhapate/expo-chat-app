import { NavigationContainer,createStackNavigator } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>

    </NavigationContainer>
  );
}
export default  App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
