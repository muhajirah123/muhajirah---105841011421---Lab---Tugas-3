import React from 'react';
import { View, Text } from 'react-native';

const CustomButton = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      flexDirection: 'row',
      padding: 20,
      marginBottom: 50
    }}>
      <View style={{
        border: '3.5px solid rgb(86,55,33)',
        width: 100,
        height: 50,
        marginRight: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          color: 'rgb(86,55,33)',
          fontSize: 20,
          fontWeight: 'bold'
        }}>
          Login
        </Text>
      </View>
      <View style={{
        backgroundColor: ' rgb(86,55,33)',
        width: 100,
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
          Register
        </Text>
      </View>
    </View>
  );
}

export default CustomButton;