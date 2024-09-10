import React, { useState } from 'react';
import { View, Button,  Text,} from 'react-native';

const ToggleText = () => { //definimos el estado del texto  con useState 
    const [seve, asignarSeve] =useState (false);

    const sepuedever = () => { // aca definimos el como se va a cambiar el usestate
        asignarSeve(!seve) // en este caso creamos un parametro "sepuedever" el cual va a actualizar el parametro  seve por medio de asignarseve
    };

    return (
        <View style={styles.contenedor}>  
        <Button title="Cambiar" onPress={sepuedever} /> 
        {seve && <Text style={styles.estilo}>cambio</Text>}
      </View>
    );
};

    // con el comando onPress actualizamos el parametro seve a false o a true segun el estado que tenga
    // en la linea 14 del codigo tenemos una exprecion condicional 
    // que solo va a renderizar el texto cuando el parametro seve es true 



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

export default ToggleText;



