import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRegistry } from 'react-native';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import * as React from 'react';
import Menu from './src/pages/menu';
import TodoList from './src/pages/todo-list';

import { name as appName } from './app.json';
import axios from 'axios';

const Stack = createStackNavigator();

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: 'tomato',
//     secondary: 'yellow',
//   },
// };

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="menu">
        <Stack.Screen name="menu" component={Menu} options={{headerShown: false}}/>
        <Stack.Screen name="todo" component={TodoList} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);