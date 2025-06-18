import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Actividad8() {
  const [lado, setLado] = useState('');
  const [area, setArea] = useState(null);
  const [perimetro, setPerimetro] = useState(null);

  const calcular = () => {
    const l = parseFloat(lado);
    if (!isNaN(l)) {
      setArea(l * l);
      setPerimetro(l * 4);
    } else {
      setArea(null);
      setPerimetro(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Área y Perímetro de un Cuadrado</Text>
      <Text>Ingrese el valor de un lado:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={lado}
        onChangeText={setLado}
        placeholder="Ej. 2"
      />
      <Button title="Calcular" onPress={calcular} />
      {area !== null && perimetro !== null && (
        <View style={styles.resultado}>
          <Text>El área del cuadrado es: {area}</Text>
          <Text>El perímetro del cuadrado es: {perimetro}</Text>
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
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 8,
    marginVertical: 10,
    width: '100%',
  },
  resultado: {
    marginTop: 20,
  },
});
