import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Actividad12() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultados, setResultados] = useState(null);

  const calcular = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResultados('Por favor, introduce números válidos.');
      return;
    }

    const suma = a + b;
    const resta = a - b;
    const multiplicacion = a * b;
    const division = b !== 0 ? a / b : 'Indefinido (división por cero)';

    setResultados(
      `Suma: ${suma}\nResta: ${resta}\nMultiplicación: ${multiplicacion}\nDivisión: ${division}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Operaciones Básicas</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
        placeholder="Introduce un número"
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
        placeholder="Introduce otro número"
      />

      <Button title="Calcular" onPress={calcular} />

      {resultados && <Text style={styles.resultado}>{resultados}</Text>}
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
    textAlign: 'center',
    fontWeight: 'bold',
    whiteSpace: 'pre-line',
  },
});
