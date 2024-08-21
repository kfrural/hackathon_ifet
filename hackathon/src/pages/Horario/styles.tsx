import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 80,
    color: '#333',
    textAlign: 'center',
  },
  image: {
    width: 600,
    height: 500,
    resizeMode: 'contain',
  },
});

export default styles;
