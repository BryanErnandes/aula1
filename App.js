import {  View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#000000'} barStyle='light-content' translucent={false}/>
      <View tyle={styles.container}>
        <View style={styles.Title}>
          <Text style={styles.texTitle}>Aulas</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    alignItems: 'center',
  },
  texTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#B700FA',
  }
})