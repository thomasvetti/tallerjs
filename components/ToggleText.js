import React, { useState } from 'react';
import { View, Button, Alert, Text} from 'react-native';

const ToggleText = () => { //definimos el estado del texto  con useState 
    const [seve, asignarSeve] =useState (false);

    const sepuedever = () => {
        asignarSeve(!seve)
    };

    return (
        <View style={styles.contenedor}>
        <Button title="Mostrar/Ocultar Texto" onPress={sepuedever} />
        {seve && <Text style={styles.estilo}>¡Hola, soy el texto oculto!</Text>}
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
  estilo :{
    
    fontSize: 20,
    fontWeight : 'bold',

}
}

export default ToggleText;



