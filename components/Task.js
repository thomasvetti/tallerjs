// components/Task.js
import React, { useState } from 'react';
import { Text, View } from 'react-native';

const Task = () => {
    const   task= { // aca se crea el objeto 
        titulo: 'la tarea esta:',
        condicion: false,
    };
    return (
        <View style={styles.container}>
        <Text style ={styles.estilo}> {task.titulo}</Text>

        <Text style= {styles.estilo}> {task.condicion ? 'completa' : 'incompleta '}</Text>
        </View>
    )
// en la linea 14 se crea una condicion,  en donde true es completa y false es incompleta 
// para eso usamos el operador ternario ? en donde se evalua  task.condicion y segun el valor renderiza el texto
};

const styles = {
    container :{
        flex:1,
        // backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    estilo: {
        fontSize: 20,
        fontWeight : 'bold',
    },

};
export default Task;
