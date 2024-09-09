import React from 'react';
import { SafeAreaView, StyleSheetm, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Greetings from './components/Greetings';
import UserDetails from './components/UserDetails';  
import Task from './components/Task';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Greetings />
      <View style={styles.separator} />
      <UserDetails />
      <View style={styles.separator} />
      <Task task={task} />
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
  separator: {
    height: 1,
    width: '80%',
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
});
