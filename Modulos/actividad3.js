import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Actividad3() {
  const [cal1, setCal1] = useState('');
  const [cal2, setCal2] = useState('');
  const [cal3, setCal3] = useState('');
  const [cal4, setCal4] = useState('');
  const [promedio, setPromedio] = useState(null);

  const calcularPromedio = () => {
    const c1 = parseFloat(cal1);
    const c2 = parseFloat(cal2);
    const c3 = parseFloat(cal3);
    const c4 = parseFloat(cal4);

    if ([c1, c2, c3, c4].every(c => !isNaN(c))) {
      const promedioFinal = (c1 + c2 + c3 + c4) / 4;
      setPromedio(promedioFinal.toFixed(2));
    } else {
      setPromedio('Por favor ingrese todas las calificaciones correctamente');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ingrese calificación 1:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={cal1}
        onChangeText={setCal1}
      />
      <Text style={styles.label}>Ingrese calificación 2:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={cal2}
        onChangeText={setCal2}
      />
      <Text style={styles.label}>Ingrese calificación 3:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={cal3}
        onChangeText={setCal3}
      />
      <Text style={styles.label}>Ingrese calificación 4:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={cal4}
        onChangeText={setCal4}
      />
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
    padding: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    width: '80%',
    borderColor: '#aaa',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});
