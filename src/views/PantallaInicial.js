import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
/** ESTILOS */
import EstilosGenerales from '../styles/EstilosGenerales';
/** REDUX */
import { useDispatch } from 'react-redux';
import { saveData } from '../actions/Datos';

const PantallaInicial = ({ navigation }) => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    /** REDUX VARIABLE */
    const dispatch = useDispatch();


    const almacenarEnRedux = () => {
        //ALMACENAR EN REDUX
        dispatch(saveData(nombre, apellido));
    };

    return (
        <View style={EstilosGenerales.contenedorPincipal} >
            <View style={EstilosGenerales.contenedorTitulo} >
                <Text style={EstilosGenerales.textoTitulo} > Formulario para Redux </Text>
            </View>

            <View style={EstilosGenerales.contenedorFormulario} >
                <View style={EstilosGenerales.espacioInputs} >
                    <TextInput
                        value={nombre}
                        onChangeText={(texto) => setNombre(texto)}
                        placeholder='   Nombre'
                        style={EstilosGenerales.textInput}
                    />
                </View>
                <View style={EstilosGenerales.espacioInputs} >
                    <TextInput
                        value={apellido}
                        onChangeText={(texto) => setApellido(texto)}
                        placeholder='Apellido'
                        style={EstilosGenerales.textInput}
                    />
                </View>
            </View>
            <View style={EstilosGenerales.contenedorBotones} >
                <View style={EstilosGenerales.boton} >
                    <Button
                        title="Guardar"
                        onPress={() => almacenarEnRedux() }
                    />
                </View>
                <View style={EstilosGenerales.boton} >
                    <Button
                        title="Info"
                        onPress={() => navigation.navigate('Mostrar Información') }
                        color='green'
                    />
                </View>
            </View>
        </View>
    )
};

export default PantallaInicial;