import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';

const TicketBus: React.FC = () => {
    const [qtd, setQtd] = useState('');

    const ticketPrice = 0.90;
  
    const totalValue = parseFloat(qtd) * ticketPrice;
  
    const handleLogin = () => {
      Alert.alert('Onibus', `Quantidade: ${qtd}\nValor Total: R$ ${totalValue.toFixed(2)}`);
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Ônibus</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe a quantidade"
          value={qtd}
          onChangeText={setQtd}
          keyboardType="numeric"
        />
        <Text style={styles.totalText}>Valor a ser pago: R$ {totalValue.toFixed(2)}</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Pagar</Text>
        </TouchableOpacity>
      </View>
    );
  };

export default TicketBus;
