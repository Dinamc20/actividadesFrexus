import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Actividad4() {
  const [cm, setCm] = useState('');
  const [resultado, setResultado] = useState(null);

  const convertir = () => {
    const valorCm = parseFloat(cm);
    if (!isNaN(valorCm)) {
      const pulgadas = valorCm / 2.54;
      setResultado(`${valorCm} cm = ${pulgadas.toFixed(4)} pulgadas`);
    } else {
      setResultado('Por favor, ingrese un valor válido en centímetros');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ingrese cantidad en centímetros:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={cm}
        onChangeText={setCm}
        placeholder="Ejemplo: 45"
      />
      <Button title="Convertir a pulgadas" onPress={convertir} />
      {resultado && <Text style={styles.resultado}>{resultado}</Text>}
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
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
    textAlign: 'center',
  },
});

