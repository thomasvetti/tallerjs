import React, { useState } from 'react';
import { View, Button,Text,TextInput} from 'react-native';

function DynamicForm() {
    const [textoingresado, asignarTextoIngresado] =useState(''); // aca viene el texto del input
    const [texto, asignarTexto] =useState(''); // aca se almacena el texto final cuando se presiona el boron

    const guardartexto = () => {
        asignarTexto(textoingresado); // esto se usa para cuando se presiona el boton se va almacenar la infomacion del input en "texto"
    };
   
    return (
        <View style={styles.contenedor}>
        <TextInput 
           style={styles.input}
           placeholder='Tu nombre es:' 
           onChangeText={asignarTextoIngresado} 
          
            />
        <Button title='Ingresar texto' onPress={guardartexto}/> 
        <Text style ={styles.estilo}>hola {texto}</Text>
        </View>
    );
};


const styles ={
  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
   
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

export default DynamicForm;

