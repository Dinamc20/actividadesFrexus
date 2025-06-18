import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Actividad2() {
  const [radio, setRadio] = useState('');
  const [perimetro, setPerimetro] = useState(null);
  const [area, setArea] = useState(null);

  const calcular = () => {
    const r = parseFloat(radio);
    if (!isNaN(r) && r > 0) {
      const p = 2 * Math.PI * r;
      const a = Math.PI * r * r;
      setPerimetro(p.toFixed(1));
      setArea(a.toFixed(1));
    } else {
      setPerimetro(null);
      setArea(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ingrese el radio:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ejemplo: 5"
        value={radio}
        onChangeText={setRadio}
      />
      <Button title="Calcular" onPress={calcular} />
      {perimetro && area && (
        <View style={styles.resultado}>
          <Text style={styles.resultadoTexto}>Perímetro: {perimetro}</Text>
          <Text style={styles.resultadoTexto}>Área: {area}</Text>
        </View>
      )}
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
    borderColor: '#999',
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  resultado: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultadoTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
});

