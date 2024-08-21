import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 400, // Ajuste o tamanho máximo conforme necessário
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginHorizontal: 10,
    backgroundColor: '#D9D9D9', // Cor de fundo do botão (opcional)
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default styles;
