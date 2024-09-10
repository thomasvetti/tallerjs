import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ChildCounter = ({ Cuenta, IncrementarContador }) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.counterText}>Contador desde el hijo: {Cuenta}</Text>
      <Button title="Incrementar Contador" onPress={IncrementarContador} />
    </View>
  );
};

const styles = StyleSheet.create({
    contenedor: {
    marginTop: 20,
    alignItems: 'center',
  },
  estilocuenta: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ChildCounter;
