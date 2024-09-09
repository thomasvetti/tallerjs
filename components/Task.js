// components/Task.js
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Task = () => {
    const   task= { // aca se crea el objeto 
        titulo: 'la tarea esta:',
        condicion: false,
    };
    return (
        <View>
        <Text style ={styles.estilo}> {task.titulo}</Text>

        <Text style= {styles.estilo}> {task.condicion ? 'completa' : 'incompleta '}</Text>
        </View>
    )

};

const styles = {
    estilo: {
        fontSize: 20,
        fontWeight : 'bold',
    },

};
export default Task;
