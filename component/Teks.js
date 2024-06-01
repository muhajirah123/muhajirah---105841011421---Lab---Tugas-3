import React from "react";
import { View,Text } from "react-native";

const Teks = ({ text,color, fontSize}) => {
    return (
        <View style={{
            paddingTop: 20,
            marginBottom: 80,
            paddingLeft: 190,
            marginTop: 20
          
        }}>
            <Text style={{
                fontSize: fontSize || 16,
                color: color
                
            }}>
                {text}
            </Text>
        </View>
    )
}
export default Teks;