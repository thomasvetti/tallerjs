// components/GuessForm.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const GuessForm = ({ correctAnswer }) => {
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = () => {
    if (guess.toLowerCase() === correctAnswer.toLowerCase()) {
      setResult('¡Correcto!');
    } else {
      setResult('Incorrecto. Inténtalo de nuevo.');
    }
  };

  return (
    <View style={styles.contenedor}>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu adivinanza"
        value={guess}
        onChangeText={setGuess}
      />
      <Button title="Enviar" onPress={handleSubmit} />
      {result ? <Text style={styles.resultado}>{result}</Text> : null}
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
  resultado: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
};

export default GuessForm;
