import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
//import Greetings from './components/Greetings';
import UserDetails from './components/UserDetails';  

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <UserDetails/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
