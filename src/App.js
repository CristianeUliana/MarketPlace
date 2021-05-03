
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';




function App() {
  
  return (
        <View style={styles.container}>
          <Text style={styles.title}>
            Olá Mundo
          </Text>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  }
});

export default App;
