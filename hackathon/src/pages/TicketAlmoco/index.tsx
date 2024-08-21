import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';

const Refeitorio: React.FC = () => {
    const [qtd, setQtd] = useState('');

    // Valor do ticket
    const ticketPrice = 2;
  
    // Calcula o valor total
    const totalValue = parseFloat(qtd) * ticketPrice;
  
    const handleLogin = () => {
      // Aqui entra o código para autenticar o usuário
      Alert.alert('Refeitorio', `Quantidade: ${qtd}\nValor Total: R$ ${totalValue.toFixed(2)}`);
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Refeitorio</Text>
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

export default Refeitorio;
