import React, { useState } from 'react';
import {Text, View, TextInput } from 'react-native';

function UserDetails() {
    const [nombre, asignarNombre] = useState('');
    const [edad, asignarEdad] = useState('');
    const [cargo,asignarCargo] = useState('');

    return (
        <View style={styles.container}>
         
           <TextInput 
           style={styles.input}
           placeholder='Tu nombre es:'
          onChangeText={(val) => asignarNombre(val)} 
            />
            <TextInput
            keyboardType='numeric' 
           style={styles.input}
           placeholder='Tu edad es:'
          onChangeText={(val) => asignarEdad(val)} 
            />
            <TextInput 
           style={styles.input}
           placeholder='Tu cargo es:'
          onChangeText={(val) => asignarCargo(val)} 
            />

            <Text style={styles.estilo}> Hola, {nombre}: me encanta saber que tienes {edad} años y te dedicas a ser {cargo}  </Text>
        </View>
    );
};

const styles = {
    container :{
        flex:1,
        backgroundColor:'#fff',
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
    estilo :{
    
        fontSize: 20,
        fontWeight : 'bold',

    }
  
}

export default UserDetails;