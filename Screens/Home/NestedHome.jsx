import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './Dashboard';
import WalletScreen from './WalletScreen';
import PaymentScreen from './PaymentScreen';

const Stack = createNativeStackNavigator();
const NestedHome = () => {
  const headerstyle = title => ({
    title: title,

    headerStyle: {
      backgroundColor: '#FFFFFF',
    },
    headerTitleStyle: {
      fontWeight: '400', // Bold header title
      fontSize: 16, // Custom font size
      letterSpacing: 0.5, // Optional: Add letter spacing
      fontfamily: 'WorkSans', // Custom font family
    },
    headerTitleAlign: 'center',
    headerTintColor: '#000000',
  });
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WalletScreen"
        component={WalletScreen}
        options={headerstyle('Load Wallet Balance')}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={headerstyle('Payment information')}
      />
    </Stack.Navigator>
  );
};

export default NestedHome;

const styles = StyleSheet.create({});
