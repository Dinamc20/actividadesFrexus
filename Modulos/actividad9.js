import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Actividad9() {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [area, setArea] = useState(null);

  const calcularArea = () => {
    const b = parseFloat(base);
    const h = parseFloat(altura);

    if (!isNaN(b) && !isNaN(h)) {
      const resultado = (b * h) / 2;
      setArea(resultado);
    } else {
      setArea(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Área de un Triángulo</Text>
      
      <Text>Ingrese el valor de la altura del triángulo:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
        placeholder="Ej. 4"
      />

      <Text>Ingrese el valor de la base del triángulo:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={base}
        onChangeText={setBase}
        placeholder="Ej. 2"
      />

      <Button title="Calcular" onPress={calcularArea} />

      {area !== null && (
        <View style={styles.resultado}>
          <Text>El área del triángulo es: {area}</Text>
        </View>
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
    marginVertical: 8,
  },
  resultado: {
    marginTop: 20,
  },
});
