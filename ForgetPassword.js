import React from 'react';
import { View } from 'react-native';
import Judul from './component/Judul';
import Input from './component/Input';
import Tombol from './component/Tombol';
import Teks from './component/Teks';
import Icon from './component/Icon';

const ForgetPassword = () => {
     return (
        <View style={{
            flex: 1,
            backgroundColor: '#FFFFFF'
        }}>
            <View style={{

            }}>
                <Judul text="Forget Password" />
            </View>


            <View style={{
                marginTop: 30
            }}>
               <Input placeholder="Email" borderColor="#FF0000" placeholderTextColor="#FF0000" />
            </View>

            <View style={{}}>
            <Teks text="Not a valid email address. Should be your@email.com" color="red" fontSize={11} />

            </View>

            <View style={{
                marginTop: -50,

            }}>
                <Tombol backgroundColor="#FF0000" text="SEND" />
            </View>

            <View style={{
                marginTop: -50,
                marginLeft: -100,

            }}>
            </View>

            <View style={{
                marginTop: -60,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 30

            }}>
            </View>


        </View>
    );
}

export default ForgetPassword;