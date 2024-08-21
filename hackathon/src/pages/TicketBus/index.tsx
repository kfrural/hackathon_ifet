import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";

const TicketBus: React.FC = () => {
    const [qtd, setQtd] = useState('');
    const navigation = useNavigation();

    const ticketPrice = 0.90;
  
    const totalValue = parseFloat(qtd) * ticketPrice;
  
    const handleLogin = () => {
      Alert.alert('Onibus', `Quantidade: ${qtd}\nValor Total: R$ ${totalValue.toFixed(2)}`);
    };
    const handleGoBack = () => {
      navigation.goBack();
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={handleGoBack}>
        <Image
          source={require('../../assets/Return.png')}
          style={styles.img}
        />
      </TouchableOpacity>
        <View style={styles.base}>
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
      </View>
    );
  };

export default TicketBus;
