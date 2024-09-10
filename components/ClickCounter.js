import React, { useState } from 'react';
import { View, Button,Text} from 'react-native';

function ClickCounter() {
    const [contador, asignarNumero ]= useState(0);
    return (
        <View style ={styles.contenedor}>
            <Button title= 'contador' onPress={() => asignarNumero(contador+1)} // aqui es la funcion en la que se agrega 1 al contador
            />
            <Text style={styles.estilo}>Contador: {contador}</Text>
        </View>
    );

};

const styles ={
    contenedor: {
      flex: 1,
      // backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
     
    },
   
    estilo :{
      
      fontSize: 20,
      fontWeight : 'bold',
  
  }
  }
  

export default ClickCounter;