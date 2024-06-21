import React from 'react';
import { View } from 'react-native';
import Judul from '../component/Judul';
import Input from '../component/Input';
import Tombol from '../component/Tombol';
import Teks from '../component/Teks';
import Icon from '../component/Icon';

const ForgetPassword = () => {
     return (
        <View style={{
            flex: 1,
           marginBottom: 50,
        }}>
            <View style={{

            }}>
                <Judul text="Forget Password" />
            </View>

            <View style={{
                padding: 5
            }}>
            <Teks text="Please, enter your email address. You will receive a link to create a new password via email." />
            </View>

            <View style={{}}>
               <Input placeholder="Email" borderColor="#FF0000" placeholderTextColor="#FF0000" />
            </View>
            
            <View style={{
                marginTop:-20
            }}>

            <Teks text="Not a valid email address. Should be your@email.com" color="red" fontSize={11} />
            </View>

            <View style={{
                marginTop: -20,

            }}>
                 <Tombol backgroundColor="#FF0000" text="SEND" />
            </View>

            <View style={{
                marginTop: -50
              

            }}>
            </View>

            <View style={{
                gap: 30

            }}>
            </View>
            
        </View>
    );
}

export default ForgetPassword;