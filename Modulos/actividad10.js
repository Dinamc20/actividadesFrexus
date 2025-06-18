import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Actividad10() {
  const [numeros, setNumeros] = useState(['', '', '', '', '', '']);
  const [promedio, setPromedio] = useState(null);

  const calcularPromedio = () => {
    const convertidos = numeros.map(n => parseFloat(n));
    if (convertidos.some(isNaN)) {
      setPromedio('Por favor, ingresa todos los números correctamente.');
    } else {
      const suma = convertidos.reduce((acc, val) => acc + val, 0);
      setPromedio((suma / convertidos.length).toFixed(2));
    }
  };

  const handleCambioNumero = (valor, index) => {
    const nuevos = [...numeros];
    nuevos[index] = valor;
    setNumeros(nuevos);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Promedio de Seis Números</Text>

      {numeros.map((num, index) => (
        <TextInput
          key={index}
          style={styles.input}
          keyboardType="numeric"
          value={num}
          onChangeText={(valor) => handleCambioNumero(valor, index)}
          placeholder={`Número ${index + 1}`}
        />
      ))}

      <Button title="Calcular promedio" onPress={calcularPromedio} />

      {promedio !== null && (
        <Text style={styles.resultado}>
          {isNaN(promedio) ? promedio : `El promedio es: ${promedio}`}
        </Text>
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
    marginVertical: 6,
  },
  resultado: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

