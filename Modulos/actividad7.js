import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Actividad7() {
  const [edad, setEdad] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularTiempoVivido = () => {
    const años = parseInt(edad);

    if (!isNaN(años) && años >= 0) {
      const decadas = Math.floor(años / 10);
      const lustros = Math.floor(años / 5);
      const meses = años * 12;
      const semanas = años * 52;
      const dias = años * 365;
      const horas = dias * 24;
      const minutos = horas * 60;

      setResultado({
        decadas,
        lustros,
        años,
        meses,
        semanas,
        dias,
        horas,
        minutos,
      });
    } else {
      setResultado('Por favor, ingrese una edad válida (número entero positivo)');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ingrese el número de Años:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={edad}
        onChangeText={setEdad}
        placeholder="Ejemplo: 1"
      />
      <Button title="Calcular" onPress={calcularTiempoVivido} />

      {resultado && typeof resultado === 'object' ? (
        <View style={styles.resultados}>
          <Text>Décadas: {resultado.decadas}</Text>
          <Text>Lustros: {resultado.lustros}</Text>
          <Text>Años: {resultado.años}</Text>
          <Text>Meses: {resultado.meses}</Text>
          <Text>Semanas: {resultado.semanas}</Text>
          <Text>Días: {resultado.dias}</Text>
          <Text>Horas: {resultado.horas}</Text>
          <Text>Minutos: {resultado.minutos}</Text>
        </View>
      ) : resultado ? (
        <Text style={styles.error}>{resultado}</Text>
      ) : null}
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
    marginBottom: 8,
  },
  input: {
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  resultados: {
    marginTop: 20,
    alignItems: 'flex-start',
  },
  error: {
    marginTop: 20,
    color: 'red',
    fontWeight: 'bold',
  },
});
