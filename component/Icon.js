import react from  "react";
import { View,Image,StyleSheet } from "react-native";

const Icon = ({ imageSource}) => {
    return (
        <View style = {style.container}>
            <Image source = {imageSource} style =
            {style.image}/>
        </View>

    );
}

const style = StyleSheet.create({
    container:{
        width: 35,
        height:50,
        marginTop: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor:'argb(255,255,255,1',
        borderRadius: 24,
        shadowColor:'#000',
        shadowOffset: {width:0, height:2},
        shadowOpacity :0.10,
        textShadowRadius: 3.84
    },
    image:{
        width:30,
        height: 30,
        resizeMode:'contain'
    },

});
export default Icon;