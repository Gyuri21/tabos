import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Névjegy</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(0,0,0,1)" />
      <Text style={styles.text}>Gyakorló program</Text>
      <Text style={styles.text}>Hegedűs György</Text>
      <Text style={styles.text}>2022.01.10</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    color: 'black'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  separator: {
    marginVertical: 30,
    height: 2,
    width: '80%',
  },
  text:{
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold'
  }
});
