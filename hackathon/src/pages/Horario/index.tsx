import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const HorariosOnibusIFScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Horários Ônibus IF</Text>
      <Image
        source={require('../../assets/horario.png')}
        style={styles.image}
      />
    </View>
  );
};

export default HorariosOnibusIFScreen;
