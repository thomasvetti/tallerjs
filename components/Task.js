// components/Task.js
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Task = () => {
    const   task= {
        const  [titulo, asignarTitulo] = useState ('');
                condicion: true,
    };
    return (
        <View>
        <Text> {task.title}</Text>

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
