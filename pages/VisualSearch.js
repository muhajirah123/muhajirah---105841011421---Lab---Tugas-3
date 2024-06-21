import * as React from 'react';
import { View, Text, Button } from 'react-native';

function VisualSearch({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Visual Search Screen</Text>
      <Button
        title="Go to Masuk"
        onPress={() => navigation.navigate('Masuk')}
      />
      <Button
        title="Go to LoginPage"
        onPress={() => navigation.navigate('LoginPage')}
      />
      <Button
        title="Go to ForgetPassword"
        onPress={() => navigation.navigate('ForgetPassword')}
      />
    </View>
  );
}

export default VisualSearch;
