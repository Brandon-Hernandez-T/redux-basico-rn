import React from 'react';
import { View, Text } from 'react-native';
/** NAVEGACIÓN */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavegacionBase from './src/routes/NavegacionBase';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NavegacionBase" headerMode='none'>
        <Stack.Screen name="NavegacionBase" component={NavegacionBase} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;