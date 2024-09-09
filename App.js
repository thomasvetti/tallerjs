import React from 'react';
import { SafeAreaView, View, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Greetings from './components/Greetings';
import UserDetails from './components/UserDetails';  
import Task from './components/Task';
import ToggleText from './components/ToggleText';
// import ToggleText from './components/ToggleText';

export default function App() {
  return (
    <SafeAreaView style={styles.contenedor}>
      <ScrollView>
      <Greetings />
      <View style={styles.separador} />
      <UserDetails />
      <View style={styles.separador} /> 
      <Task />
      <View style={styles.separador} /> 
      <ToggleText/>
      <View style={styles.separador} /> 
      <StatusBar style="auto" />
      </ScrollView> 
    </SafeAreaView>
  );
}

const styles ={
  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 60,
    marginTop: 100,
  
   
  },
  separador: {
    height: 1,
    width: '100%',
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
};
