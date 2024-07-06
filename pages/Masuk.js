import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Judul from '../component/Judul';
import Input from '../component/Input';
import Tombol from '../component/Tombol';
import Teks from '../component/Teks';
import Icon from '../component/Icon';

const Masuk = ({ navigation }) => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#FFFFFF'
    }}>
      <View>
        <Judul text="Sign Up" />
      </View>

      <View style={{
        marginTop: -15
      }}>
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
          <Teks text="Already have an account?" />
        </TouchableOpacity>
      </View>

      <View style={{
        marginTop: -80
      }}>
        <Tombol backgroundColor="#FF0000" text="Sign Up" />
      </View>

      <View style={{
        marginTop: -50,
        marginLeft: -100,
      }}>
        <Teks text="Or Login with social account" />
      </View>

      <View style={{
        marginTop: -40,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20
      }}>
        <Icon imageSource={require('../assets/Google.png')} />
        <Icon imageSource={require('../assets/fb.png')} />
      </View>

      <View style={{
        marginTop: 20,  // Adjust margin for better positioning
        alignItems: 'center',
      }}>
        <Tombol 
          backgroundColor="#0000FF" 
          text="Go to Login Page" 
          onPress={() => navigation.navigate('LoginPage')} 
        />
      </View>
    </View>
  );
}

export default Masuk;
