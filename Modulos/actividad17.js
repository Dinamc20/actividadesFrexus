import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function Actividad17() {
  const [galones, setGalones] = useState('');
  const [litros, setLitros] = useState(null);

  const convertirALitros = () => {
    const galonesN = parseFloat(galones);

    if (isNaN(galonesN) || galonesN <= 0) {
      setLitros('Por favor, introduce un número válido de galones.');
      return;
    }

    const GALON_A_LITRO = 3.78541;
    const resultadoL = galonesN * GALON_A_LITRO;

    setLitros(`${galonesN} galones equivalen a ${resultadoL.toFixed(4)} litros.`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Conversión de galones a litros</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={galones}
        onChangeText={setGalones}
        placeholder="Ingresa la cantidad en galones"
      />
      <Button title="Convertir a litros" onPress={convertirALitros} />
      {litros && <Text style={styles.resultado}>{litros}</Text>}
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
