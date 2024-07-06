import React from 'react';
import {View,Text,Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './pages/LoginPage';
import Masuk from './pages/Masuk';
import ForgetPassword from './pages/ForgetPassword';
import Profil from './pages/Profil';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function HomeScree({navigation}){
  return(
    <View style={{flex: 1,aligntems:'center',justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
      title="Go to Login"
      onPress={()=>navigate('Profil')}/>
    </View>
  )
}
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Stack.Screen name="Home" component={HomeScree} />
        <Stack.Screen name="Profil" component={Profil} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;