import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import Image1 from "../../components/logo";
import Image2 from "../../components/logo";

const ViajacaoRioPombaScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Viação Rio Pomba</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Image1
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image2
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViajacaoRioPombaScreen;
