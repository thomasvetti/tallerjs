import React, { useState } from 'react';
import {Text, View, TextInput } from 'react-native';

function Greetings() {
    const [nombre, asignarNombre] = useState('');

    return (
        <View style={styles.container}>
         
           <TextInput 
           style={styles.input}
           placeholder='Tu nombre es:' // esto sirve para poner un pre-texto en el input
          onChangeText={(val) => asignarNombre(val)} // con esta funcion logramos cambiar el estado de la constante que tenermos llamada como asignar nombre
            />
            <Text style={styles.Greeting}> Hola, {nombre}!</Text>
        </View>
    );
};

const styles = {
    container :{
        flex:1,
        // backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    input : {
        borderWidth:1,
        borderColor: '#777',
        padding:8,
        margin:10,
        width:200,
    },
    Greeting :{
    
        fontSize: 20,
        fontWeight : 'bold',

    }
  
}

export default Greetings;