import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function Actividad15() {
  const [pulgadas, setPulgadas] = useState('');
  const [metros, setMetros] = useState(null);

  const convertirAMetros = () => {
    const pulgadasN = parseFloat(pulgadas);

    if (isNaN(pulgadasN) || pulgadasN <= 0) {
      setMetros('Por favor, introduce un número válido de pulgadas.');
      return;
    }

    const PULGADA_A_METRO = 0.0254;
    const resultadoM = pulgadasN * PULGADA_A_METRO;

    setMetros(`${pulgadasN} pulgadas equivalen a ${resultadoM.toFixed(4)} metros.`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Conversión de pulgadas a metros</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={pulgadas}
        onChangeText={setPulgadas}
        placeholder="Ingresa la cantidad en pulgadas"
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
