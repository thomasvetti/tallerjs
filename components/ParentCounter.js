import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import ChildCounter from './ChildCounter'; // en este caso importamos el contenido del hijo

const ParentCounter = () => {
  const [Cuenta, Asignarcuenta] = useState(0); // Estado del contador

  // esto es la funcion en la que se incrementa cada vez que se aprieta el contador 
  const IncrementarContador = () => {
    Asignarcuenta(Cuenta + 1);
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.estilocuenta}>Contador: {Cuenta}</Text>
      <ChildCounter Cuenta={Cuenta} IncrementarContador={IncrementarContador} /> 
    </View>
  );
};

const styles = {
  contenedor: {
    padding: 20,
    alignItems: 'center',
  },
  estilocuenta: {
    fontSize: 20,
    marginBottom: 10,
  },
};

export default ParentCounter;
