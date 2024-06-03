import React from 'react';
import { View } from 'react-native';
import Judul from '../component/Judul';
import Input from '../component/Input';
import Tombol from '../component/Tombol';
import Teks from '../component/Teks';
import Icon from '../component/Icon';

const Masuk = () => {
     return (
        <View style={{
            flex: 1,
            backgroundColor: '#FFFFFF'
        }}>
            <View style={{

            }}>
                <Judul text=" Sign Up" />
            </View>


            <View style={{
                marginTop: 30
            }}>
                <Input placeholder="Name" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
            </View>

            <View style={{}}>
                <Teks text="Already have an account?" />
            </View>

            <View style={{
                marginTop: -40
            }}>
                <Tombol backgroundColor="#FF0000" text="SignUp" />
            </View>

            <View style={{
                marginTop: -70,
                marginLeft: -100,

            }}>
                <Teks text="Or SignUp with social account" />
            </View>

            <View style={{
                marginTop: -60,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 40

            }}>
                <Icon imageSource={require('./assets/Google.png')} />

                <Icon imageSource={require('./assets/fb.png')} />
            </View>


        </View>
    );
}

export default Masuk;