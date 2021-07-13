import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DashboardScreen from './src/screens/DashboardScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
              name="DashboardScreen"
              options={{headerShown: false}}
              component={DashboardScreen}
            />
        </Stack.Navigator>
      </NavigationContainer>
  );
}