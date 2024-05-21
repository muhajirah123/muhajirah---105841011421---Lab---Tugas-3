import React from 'react';
import { View, Text } from 'react-native';

const Teks = () => {
  return (
    <View style={{
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{
        color: ' rgb(86,55,33)',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 50,
      }}>
        Stars Coffee
      </Text>
    </View>
  );
}

export default Teks;