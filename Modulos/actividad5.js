import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Actividad5() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [hipotenusa, setHipotenusa] = useState(null);

  const calcularHipotenusa = () => {
    const catA = parseFloat(a);
    const catB = parseFloat(b);

    if (!isNaN(catA) && !isNaN(catB)) {
      const h = Math.sqrt(catA ** 2 + catB ** 2);
      setHipotenusa(`La hipotenusa es ${h}`);
    } else {
      setHipotenusa('Por favor, ingrese valores válidos para ambos catetos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ingrese cateto a:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
        placeholder="Ejemplo: 7"
      />
      <Text style={styles.label}>Ingrese cateto b:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
        placeholder="Ejemplo: 5"
      />
      <Button title="Calcular hipotenusa" onPress={calcularHipotenusa} />
      {hipotenusa && <Text style={styles.resultado}>{hipotenusa}</Text>}
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
    marginBottom: 5,
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
