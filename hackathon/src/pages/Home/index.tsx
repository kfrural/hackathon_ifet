import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';

const Home: React.FC = () => {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');

  const handleRefeitorio = () => {
    Alert.alert('Refeição', `Você escolheu recarregar tickets para o refeitório.`);
    setMatricula('Refeitorio');
  };

  const handleOnibus = () => {
    Alert.alert('Ônibus', `Você escolheu recarregar tickets para o ônibus.`);
    setSenha('Onibus');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recarregar carteirinha</Text>
      
      <TouchableOpacity style={styles.button} onPress={handleRefeitorio}>
        <Text style={styles.buttonText}>Refeitório</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={handleOnibus}>
        <Text style={styles.buttonText}>Ônibus</Text>
      </TouchableOpacity>

      <Text style={styles.saldoText}>Saldo:</Text>
      <Text style={styles.ticketText}>Tickets refeitório: {matricula}</Text>
      <Text style={styles.ticketText}>Tickets ônibus: {senha}</Text>
    </View>
  );
};

export default Home;
