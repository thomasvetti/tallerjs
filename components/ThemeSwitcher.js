import React from 'react';
import { View, Switch } from 'react-native';

const ThemeSwitcher = ({ cambiaTemaColor, temaActual }) => {
  // esto recibe dos parametros, que son una funcion la cual va a cambiar el tema, y el valor del tema actual que va a ser light o dark
  const cambioTema = (value) => {
    cambiaTemaColor(value ? 'dark' : 'light'); // aca la funcion cambia el valor del tema
  };

  return (
    <View style={styles.container}>
      <Switch 
        value={temaActual === 'dark'} // temaActual === 'dark' esto es para determinar si el switch esta activado o no
        onValueChange={cambioTema} 
      />
    </View>
  );
};
// el ThemeSwitcher basicamente renderiza un view que contiene el switch 
const styles = {
  container: {
    margin: 20,
  },
};

export default ThemeSwitcher;
