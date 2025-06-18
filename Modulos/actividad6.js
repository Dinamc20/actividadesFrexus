import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Actividad6() {
  const [horaActual, setHoraActual] = useState('');
  const [cantidadHoras, setCantidadHoras] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularHoraFutura = () => {
    const t = parseInt(horaActual);
    const h = parseInt(cantidadHoras);

    if (!isNaN(t) && !isNaN(h) && t >= 0 && t <= 11) {
      const futura = (t + h) % 12;
      const horaFinal = futura === 0 ? 12 : futura;
      setResultado(`En ${h} horas, el reloj marcará las ${horaFinal}`);
    } else {
      setResultado('Por favor ingrese una hora entre 0 y 11, y un número entero válido.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Hora actual (0–11):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={horaActual}
        onChangeText={setHoraActual}
        placeholder="Ejemplo: 3"
      />
      <Text style={styles.label}>Cantidad de horas:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={cantidadHoras}
        onChangeText={setCantidadHoras}
        placeholder="Ejemplo: 5"
      />
      <Button title="Calcular hora futura" onPress={calcularHoraFutura} />
      {resultado && <Text style={styles.resultado}>{resultado}</Text>}
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
