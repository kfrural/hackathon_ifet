import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Clipboard, StyleSheet, Dimensions } from 'react-native';
import styles from './styles';

const PagamentoScreen: React.FC = () => {
  const [link] = useState('https://www.exemplo.com/pagamento'); // Substitua pelo link real
  const [beneficiario] = useState('Nome do Beneficiário'); // Substitua pelo nome real
  const [valor] = useState('R$ 20,00'); // Substitua pelo valor real
  
  // Define o tempo de expiração do PIX em segundos
  const [timeLeft, setTimeLeft] = useState(600); // Exemplo: 10 minutos (600 segundos)

  useEffect(() => {
    // Atualiza o tempo restante a cada segundo
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime > 0 ? prevTime - 1 : 0);
    }, 1000);

    return () => clearInterval(timer); // Limpa o intervalo quando o componente desmonta
  }, []);

  // Converte o tempo restante em minutos e segundos
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? `0${secs}` : secs}`;
  };

  const copyToClipboard = async () => {
    await Clipboard.setString(link);
    alert('Link copiado para a área de transferência!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagamento</Text>
      <Image
        source={require('../../assets/QRCode.webp')}
        style={styles.qrCode}
      />
      <Text style={styles.link}>{link}</Text>
      <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
        <Text style={styles.copyButtonText}>Copiar Link</Text>
      </TouchableOpacity>
      <Text style={styles.beneficiario}>Beneficiário: {beneficiario}</Text>
      <Text style={styles.valor}>Valor: {valor}</Text>
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${(timeLeft / 600) * 100}%` }]} />
      </View>
      <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
    </View>
  );
};

export default PagamentoScreen;
