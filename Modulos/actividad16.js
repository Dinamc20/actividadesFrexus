import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function Actividad16() {
  const [pies, setPies] = useState('');
  const [pulgadas, setPulgadas] = useState(null);

  const convertirAPulgadas = () => {
    const piesN = parseFloat(pies);

    if (isNaN(piesN) || piesN <= 0) {
      setPulgadas('Por favor, introduce un número válido de pies.');
      return;
    }

    const resultadoP = piesN * 12;

    setPulgadas(`${piesN} pies equivalen a ${resultadoP.toFixed(2)} pulgadas.`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Conversión de pies a pulgadas</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={pies}
        onChangeText={setPies}
        placeholder="Ingresa la cantidad en pies"
      />
      <Button title="Convertir a pulgadas" onPress={convertirAPulgadas} />
      {pulgadas && <Text style={styles.resultado}>{pulgadas}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  resultado: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
