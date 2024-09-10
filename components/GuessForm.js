import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const GuessForm = ({ respuestaCorrecta }) => {
  const [adivinanza, asignarAdivinanza] = useState('');
  const [resultado, asignarResultado] = useState('');

  const handleSubmit = () => {
    if (adivinanza.toLowerCase() === respuestaCorrecta.toLowerCase()) {
      asignarResultado('¡Correcto!');
    } else {
      asignarResultado('Incorrecto. Inténtalo de nuevo.');
    }
  };
// esta linea  if (adivinanza.toLowerCase() === respuestaCorrecta.toLowerCase()) tiene
// el valor del usuario ingresa, la respuesta correcta alamcenada en el componente y lo mas importante que es == que basicamente si o si 
// tiene que ser el valor asinado para ganar la adivinanza
// el lowercase se pone para que la respuesta siempre sea en minuscula y asi evitar problemas 
  return (
    <View style={styles.contenedor}>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu adivinanza"
        value={adivinanza}
        onChangeText={asignarAdivinanza}
      />
      <Button title="Enviar" onPress={handleSubmit} />
      {resultado ? <Text style={styles.estilo}>{resultado}</Text> : null}
    </View>
  );
};

const styles = {
  contenedor: {
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
  },
  estilo: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
};

export default GuessForm;
