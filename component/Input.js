import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native'

const Input =({ placeholder, borderColor,placeholderTextColor}) => {
    return (
        <View style = {styles.container}>
            <TextInput
            
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            style={[styles.Input, {borderColor}]}
            />

           
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        padding: 23,

    },
    Input: {
        backgroundColor: 'white',
        height: 64,
        width: 343,
        borderWidth: 1,
        marginBottom: -35,
        paddingHorizontal: 8,
        borderRadius: 5
    },
    text: {
        fontSize: 16,
    },

});

export default Input;
