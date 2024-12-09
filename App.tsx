import React, { useState } from 'react';
import { View, StatusBar, Text, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import BirdInfo from './BirdInfo';

const App = () => {
  const [cargar, setCargar] = useState(false);

  if (!cargar) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.title}>Inicio</Text>
        <Text>Suzette Tortola</Text>
        <Text>23002963</Text>
        <TouchableOpacity onPress={() => setCargar(!cargar)} style={styles.button}>
          <Text style={styles.buttonText}>Cargar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <BirdInfo />
      </SafeAreaView>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 70,
    fontWeight: 'bold',
    marginBottom: 20, // Espacio entre el título y el contenido
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
