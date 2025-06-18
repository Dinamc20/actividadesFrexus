import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function Actividad14() {
  const [pies, setPies] = useState('');
  const [metros, setMetros] = useState(null);

  const convertirAMetros = () => {
    const piesN = parseFloat(pies);

    if (isNaN(piesN) || piesN <= 0) {
      setMetros('Por favor, introduce un número válido de pies.');
      return;
    }

    const P = 0.3048;
    const resultadoM = piesNumero * P;

    setMetros(`${piesN} pies equivalen a ${resultadoM.toFixed(4)} metros.`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Conversión de pies a metros</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={pies}
        onChangeText={setPies}
        placeholder="Ingresa la cantidad en pies"
      />
      <Button title="Convertir a metros" onPress={convertirAMetros} />
      {metros && <Text style={styles.resultado}>{metros}</Text>}
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
