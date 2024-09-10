import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Greetings from './components/Greetings';
import UserDetails from './components/UserDetails';
import Task from './components/Task';
import ToggleText from './components/ToggleText';
import DynamicForm from './components/DynamicForm';
import ClickCounter from './components/ClickCounter';
import RegistrationForm from './components/RegistrationForm';

export default function App() {
  const [infousario, setUserData] = useState(null); // creamos un estado para actualizar la informacion que importamos de registrationfrom /esta en null porque no hay datos iniciales 

  const confirmacionRegistroUsuario = (data) => {
    setUserData(data);
  };

// en la linea   <RegistrationForm onRegister={confirmacionRegistroUsuario} /> es un intermediario
// basicamente es una funciin que pasa la informacion a  RegistrationForm  a travez de onRegister 


// lo que se hace es que cuando se presiona el boton, este llama a confirmacionRegistro el cual crea el objeto data que es
// el que guarda la info de nombre correo y contraseña

// para pasar la info finalmente se ejecuta lla funccion confirmacionRegistroUsuario por medio de  onRegister(data) 
// la comunicacion se hace entre el componente hijo que seria RegistrationForm al padre App,js


  return (
    <SafeAreaView style={styles.contenedor}>
      <ScrollView>
        <Greetings />
        <View style={styles.separador} />
        <UserDetails />
        <View style={styles.separador} />
        <Task />
        <View style={styles.separador} />
        <ToggleText />
        <View style={styles.separador} />
        <DynamicForm />
        <View style={styles.separador} />
        <ClickCounter />
        <View style={styles.separador} />
        
        <RegistrationForm registro={confirmacionRegistroUsuario} />
        {infousario && (
          <View style={styles.interfazinfo}>
            <Text style={styles.tituloregistro}>Datos Registrados:</Text>
            <Text>Nombre: {infousario.nombreUsuario}</Text>
            <Text>Correo: {infousario.Correo}</Text>
            <Text>Contraseña: {infousario.Contraseña}</Text>
          </View>
        )}

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}


//  {infousario &&  esta linea de codigo es una condicion que nos permite mostar o no la informacion que usuario registra siempre y cuando 
// el valor no sea null
// si "infousario" tiene algun valor se carga el view con la informacion registrada por el usuario 
const styles ={
  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    top: 10,
  },
  separador: {
    height: 1,
    width: '100%',
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
  interfazinfo: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  tituloregistro: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
};
