import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";

const Refeitorio: React.FC = () => {
  const [qtd, setQtd] = useState('');
  const navigation = useNavigation();

  const ticketPrice = 2;

  const totalValue = parseFloat(qtd) * ticketPrice;

  const handleLogin = () => {
    // Aqui entra o código para autenticar o usuário
    Alert.alert('Refeitorio', `Quantidade: ${qtd}\nValor Total: R$ ${totalValue.toFixed(2)}`);
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
    </View>
  );
};

export default Refeitorio;
