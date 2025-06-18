import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Actividad11() {
  const [kg, setKg] = useState('');
  const [libras, setLibras] = useState(null);

  const convertir = () => {
    const kgNum = parseFloat(kg);
    if (isNaN(kgNum)) {
      setLibras('Por favor, ingresa un valor válido en kilogramos.');
    } else {
      const resultado = kgNum * 2.2;
      setLibras(`${kgNum} kilogramos es igual a ${resultado.toFixed(2)} libras`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Kilogramos a Libras</Text>
      
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={kg}
        onChangeText={setKg}
        placeholder="Kilogramos a convertir"
      />
      
      <Button title="Convertir" onPress={convertir} />

      {libras && (
        <Text style={styles.resultado}>{libras}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
  resultado: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
