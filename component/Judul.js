import React from 'react';
import { View, Text } from 'react-native';


const Judul = ({text}) => {
    return(
        <View style = {{
            flex: 1,
            paddingTop: 50,
            marginButton: 80,
            paddingLeft: 25,

        }}>
        <Text style = {{
            color:'black',
            fontSize: 30,
            lineHeight: 30,
            fontWeight:'bold',
        }}>
            {text}
        </Text>
        </View>

    )

}

export default Judul;