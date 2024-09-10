import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const RegistrationForm = ({ registro }) => {
  const [nombreUsuario, asignarNombreUsuario] = useState('');
  const [Correo, asignarCorreo] = useState('');
  const [Contraseña, asignarContraseña] = useState('');

  const confirmacionRegistro = () => {
    const data = { nombreUsuario, Correo, Contraseña }; // aca creamos el objeto el cual nos va a servir para almacenar la info y compartirla con app
    registro(data);  // connn este parametro logramos enviar la info a app.js 
  };

  return (
    <View style={styles.contenedor}>
      

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombreUsuario}
        onChangeText={asignarNombreUsuario}
      />

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={Correo}
        onChangeText={asignarCorreo}
        keyboardType="email-address" //esto es para que cuando abra el teclado abra con el @
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={Contraseña}
        onChangeText={asignarContraseña}
        secureTextEntry={true} // esto es para tapar la contraseña
      />

      <Button title="Registrarse" onPress={confirmacionRegistro} />
    </View>
  );
};

const styles = {
    contenedor: {
        flex: 1,
        // backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
  },
 
  input : {
    borderWidth:1,
    borderColor: '#777',
    padding:8,
    margin:10,
    width:300,
    
  },
};

export default RegistrationForm;
