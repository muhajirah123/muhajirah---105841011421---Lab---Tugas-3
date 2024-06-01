import React from 'react';
import { View, Text } from 'react-native';


    const Tombol = ({ backgroundColor, text}) => {
        return (
            <View style={{
                backgroundColor: backgroundColor,
                borderRadius: 50,
                width: 300,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 50,
                marginBottom: 90,
                marginTop: -0.3// Kurangi nilai marginTop untuk menaikkan tombol
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                    lineHeight: 20
                }}>
                    {text}
                </Text>
            </View>
        );
    };
    
    export default Tombol;