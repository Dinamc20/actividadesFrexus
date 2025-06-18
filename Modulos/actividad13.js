import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function Actividad13() {
  const [horas, setHoras] = useState('');
  const [salarioNeto, setSalarioNeto] = useState(null);

  const calcularSalario = () => {
    const horasT = parseFloat(horas);

    if (isNaN(horasT) || horasT <= 0) {
      setSalarioNeto('Por favor, introduce un número válido de horas.');
      return;
    }

    const pagoHora = 50;
    const salarioBruto = horasT * pagoHora;
    const compensacion = salarioBruto * 0.02;
    const descuentoIMSS = salarioBruto * 0.015;
    const descuentoISPT = salarioBruto * 0.012;

    const salarioFinal = salarioBruto + compensacion - descuentoIMSS - descuentoISPT;

    setSalarioNeto(
      `Salario bruto: $${salarioBruto.toFixed(2)}\n` +
      `Compensación (2%): $${compensacion.toFixed(2)}\n` +
      `Descuento IMSS (1.5%): $${descuentoIMSS.toFixed(2)}\n` +
      `Descuento ISPT (1.2%): $${descuentoISPT.toFixed(2)}\n` +
      `Salario neto: $${salarioFinal.toFixed(2)}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cálculo del salario neto</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={horas}
        onChangeText={setHoras}
        placeholder="Horas trabajadas en la quincena"
      />
      <Button title="Calcular salario neto" onPress={calcularSalario} />
      {salarioNeto && <Text style={styles.resultado}>{salarioNeto}</Text>}
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
    textAlign: 'left',
    whiteSpace: 'pre-line',
  },
});
