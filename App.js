import React from 'react';
import { SafeAreaView, View, Image } from 'react-native';
import CustomButton from './tombol';
import Teks from './teks'; 

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Teks />
        { <Image 
          source={require('./assets/logo.png')}  // Ensure the path to your image is correct
          style={{ width: 200, height: 200, marginVertical: 90 }}  // Adjust the size as needed
        /> }
        <CustomButton />
      </View>
    </SafeAreaView>
  );
}