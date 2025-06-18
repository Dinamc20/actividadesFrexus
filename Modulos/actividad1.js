import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Actividad1() {
  const [nombre, setNombre] = useState('');
  const [saludo, setSaludo] = useState('');

  const manejarSaludo = () => {
    if (nombre.trim() !== '') {
      setSaludo(`Hola ${nombre}`);
    } else {
      setSaludo('Por favor, ingresa tu nombre');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ingrese su nombre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <Button title="Saludar" onPress={manejarSaludo} />
      {saludo !== '' && <Text style={styles.saludo}>{saludo}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    borderColor: '#999',
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  saludo: {
    fontSize: 20,
    marginTop: 15,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});

