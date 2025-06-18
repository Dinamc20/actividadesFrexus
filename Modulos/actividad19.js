import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Actividad19() {
  const [inicialesArte, setInicialesArte] = useState('');

  useEffect(() => {
    const arteIniciales = `

RRRRRRRRRRRR              
      R    R       
    R R RRRR
  RR
R

AAAAAAAAAAA       
     A     A     
     A     A     
AAAAAAAAAAA      

GGGGGGGGGGG     
G         G  
G   G     G
GGGGG     G 

MMMMMMMMMMM
        M
      M
    M    
      M
         M
MMMMMMMMMMM
`;
    console.log(arteIniciales);
    setInicialesArte(arteIniciales);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Iniciales Acostadas: R A G M</Text>
      <Text style={styles.ascii}>{inicialesArte}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  ascii: {
    fontFamily: 'monospace',
    fontSize: 16,
    textAlign: 'left',
    whiteSpace: 'pre-line',
  },
});
