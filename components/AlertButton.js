import React from 'react';
import { View, Button, Alert  } from 'react-native';

const AlertButton = ({ Mensaje }) => {
  const AlertaMensaje = () => {
    Alert.alert(Mensaje); // Muestra la alerta con el mensaje recibido
  };

  return (
    <View style={styles.contenedor}>
      <Button title="Mostrar Alerta" onPress={AlertaMensaje} />
    </View>
  );
};

const styles = {
    contenedor: {
    margin: 20,
  },
};

export default AlertButton;
