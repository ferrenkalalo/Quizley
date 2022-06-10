import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#E4EFE7'} barStyle="dark-content" />
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
