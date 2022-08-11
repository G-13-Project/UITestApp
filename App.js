import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Search from './Screens/Search';
import Camera from './Screens/Camera';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <stack.Screen name='Home' component={Home}/>
        <stack.Screen name='Search' component={Search}/>
        <stack.Screen name='Camera' component={Camera}/>
      </stack.Navigator>
    </NavigationContainer>
    
  );
}


