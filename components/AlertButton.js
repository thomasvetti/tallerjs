import React from 'react';
import { View, Button, Alert } from 'react-native';

const AlertButton = ({ mensaje }) => {
  const mostrarAlerta = () => {
    Alert.alert(mensaje); // Muestra la alerta con el mensaje recibido
  };

  return (
    <View style={styles.container}>
      <Button title="Mostrar Alerta" onPress={mostrarAlerta} />
    </View>
  );
};

const styles = {
  container: {
    margin: 20,
  },
};

export default AlertButton;