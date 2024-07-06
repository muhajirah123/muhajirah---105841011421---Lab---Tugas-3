import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Profil = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Text style={styles.shopName}>CafeShop</Text>
        <Image style={styles.shopLogo} source={require('../assets/photo saya.png')}/>
        <Text style={styles.shopDescription}>Selamat Datang Di Cafe Shop</Text>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MyOrders')}>
          <Text style={styles.menuText}>My Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ShoppingAddresses')}>
          <Text style={styles.menuText}>Shopping Addresses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('PaymentMethods')}>
          <Text style={styles.menuText}>Payment Methods</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Promocode')}>
          <Text style={styles.menuText}>Promocode</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MyReviews')}>
          <Text style={styles.menuText}>My Reviews</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  profile: {
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginBottom: 20,
  },
  shopName: {
    fontSize: 24,
    marginBottom: 10,
  
  },
  shopLogo: {
    width: 100,
    height: 95,
    borderRadius: 50,
    marginBottom: 10,
  },
  shopDescription: {
    fontSize: 16,
  },
  menu: {
    width: '100%',
    paddingHorizontal: 20,
  },
  menuItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  menuText: {
    fontSize: 18,
  },
});

export default Profil;
