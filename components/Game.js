
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GuessForm from './GuessForm';

const Game = () => {
  const [correctAnswer] = useState('yo'); 
// LA RESPUESTA CORRECTA VA A SER yo
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>¿Quién es el hijo de mi madre que no es mi hermano?</Text>
      <GuessForm correctAnswer={correctAnswer} />
    </View>
  );
};

const styles = {
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },
};

export default Game;
