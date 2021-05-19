import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import LandingScreen from './screens/LandingScreen';
import UserScreen from './screens/UserScreen'
import UsersScreen from './screens/UsersScreen'
import Error from './screens/Error';

const Stack = createStackNavigator();

export const baseURL = 'https://dummyapi.io/data/api';
export const appID = '60a50351b10aec4d6cf38bc4'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
        name="Landing"
        component={LandingScreen}
        />
        <Stack.Screen
        name="User"
        component={UserScreen}
        />
        <Stack.Screen
        name="Users"
        component={UsersScreen}
        />
        <Stack.Screen
        name="Error"
        component={Error}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
