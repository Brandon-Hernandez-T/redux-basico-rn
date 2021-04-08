import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
/** PANTALLAS */
import PantallaInicial from '../views/PantallaInicial';
import PantallaMostrarInformación from '../views/PantallaMostrarInformación';

const Stack = createStackNavigator();

const NavegacionBase = () => {

    return (
        <Stack.Navigator initialRouteName="PantallaInicial" >
            <Stack.Screen name="Inicial" component={PantallaInicial} />
            <Stack.Screen name="Mostrar Información" component={PantallaMostrarInformación} />
        </Stack.Navigator>
    );
};

export default NavegacionBase;