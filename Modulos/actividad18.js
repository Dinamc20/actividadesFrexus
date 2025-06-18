import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function Actividad18() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState(null);

  const convertirAFahrenheit = () => {
    const celsiusN = parseFloat(celsius);

    if (isNaN(celsiusN)) {
      setFahrenheit('Por favor, introduce un número válido de grados centígrados.');
      return;
    }

    const rFahrenheit = (celsiusN * 9/5) + 32;

    setFahrenheit(`${celsiusN}°C equivalen a ${rFahrenheit.toFixed(2)}°F.`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Conversión de °C a °F</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={celsius}
        onChangeText={setCelsius}
        placeholder="Ingresa la temperatura en °C"
      />
      <Button title="Convertir a °F" onPress={convertirAFahrenheit} />
      {fahrenheit && <Text style={styles.resultado}>{fahrenheit}</Text>}
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
