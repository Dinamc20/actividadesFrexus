import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';

// Importamos todas las actividades estáticamente
import Actividad1 from './Modulos/actividad1';
import Actividad2 from './Modulos/actividad2';
import Actividad3 from './Modulos/actividad3';
import Actividad4 from './Modulos/actividad4';
import Actividad5 from './Modulos/actividad5';
import Actividad6 from './Modulos/actividad6';
import Actividad7 from './Modulos/actividad7';
import Actividad8 from './Modulos/actividad8';
import Actividad9 from './Modulos/actividad9';
import Actividad10 from './Modulos/actividad10';
import Actividad11 from './Modulos/actividad11';
import Actividad12 from './Modulos/actividad12';
import Actividad13 from './Modulos/actividad13';
import Actividad14 from './Modulos/actividad14';
import Actividad15 from './Modulos/actividad15';
import Actividad16 from './Modulos/actividad16';
import Actividad17 from './Modulos/actividad17';
import Actividad18 from './Modulos/actividad18';
import Actividad19 from './Modulos/actividad19';

// Array de componentes para manejo dinámico
const activities = [
  Actividad1, Actividad2, Actividad3, Actividad4, Actividad5,
  Actividad6, Actividad7, Actividad8, Actividad9, Actividad10,
  Actividad11, Actividad12, Actividad13, Actividad14, Actividad15,
  Actividad16, Actividad17, Actividad18, Actividad19
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const renderContent = () => {
    if (currentScreen === 'home') {
      return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Programación para Móviles II</Text>
          <Text style={styles.subtitle}>Selecciona una actividad</Text>
          
          <View style={styles.buttonGrid}>
            {activities.map((Activity, index) => (
              <TouchableOpacity
                key={`activity-${index}`}
                style={[styles.button, styles.activityButton]}
                onPress={() => setCurrentScreen(`activity-${index}`)}
              >
                <Text style={styles.buttonText}>Actividad {index + 1}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      );
    }

    const activityIndex = parseInt(currentScreen.split('-')[1]);
    const ActivityComponent = activities[activityIndex];
    
    return (
      <>
        <ActivityComponent />
        <TouchableOpacity 
          style={[styles.button, styles.backButton]} 
          onPress={() => setCurrentScreen('home')}
        >
          <Text style={styles.buttonText}>← Volver</Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={styles.container}>
      {renderContent()}
      <StatusBar style="auto" />
    </View>
  );
}

// Estilos (igual que en la versión anterior)
const COLORS = {
  primary: '#3498db',
  secondary: '#2ecc71',
  danger: '#e74c3c',
  background: '#f8f9fa',
  text: '#2c3e50',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 20,
  },
  scrollContainer: {
    padding: 100,
    paddingBottom: 80,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
    textAlign: 'left',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  activityButton: {
    backgroundColor: COLORS.danger,
    width: '45%',
    minHeight: 60,
  },
  backButton: {
    backgroundColor: COLORS.danger,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    paddingHorizontal: 24,
  },
  buttonText: {
    color: '000',
    fontSize: 16,
    fontWeight: '600',
  },
});