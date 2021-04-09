import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
/** REDUX */
import { useDispatch, useSelector } from 'react-redux';

const PantallaMostrarDatos = ({ navigation }) => {

       const apellido = useSelector(estado => estado.dataReducer.apellido);
       console.log('data:: ', apellido);

    return(
        <View>
            <Text> Pantalla Mostrar Datos </Text>
        </View>
    )
};

export default PantallaMostrarDatos;