import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../Pages/Home';
import Quiz from '../Pages/Quiz';
import Result from '../Pages/Result';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
