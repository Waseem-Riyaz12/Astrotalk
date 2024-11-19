// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './Screens/SplashScreen';
import LoginScreen from './Screens/LoginScreen';
import OtpScreen from './Screens/OtpScreen';
import SuccessSplash from './Screens/SuccessSplash';
import Details from './Screens/Details';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';
import Dashboard from './Screens/Dashboard';

const Stack = createNativeStackNavigator();
const AuthenticatedUserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const UserAuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessSplash"
        component={SuccessSplash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const MainNavigator = () => {
  const {isAuthenticated} = useSelector(state => state.auth);
  console.log('isAuthenticated', isAuthenticated);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthenticatedUserStack /> : <UserAuthStack />}
    </NavigationContainer>
  );
};
function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

export default App;
