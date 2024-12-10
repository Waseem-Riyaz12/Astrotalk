// In App.js in a new
import 'react-native-gesture-handler';

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Provider, useSelector} from 'react-redux';
import {store, persistor} from './redux/store';
import Dashboard from './Screens/Home/Dashboard';
import TabNavigation from './TabNavigation';
import WalletScreen from './Screens/Home/WalletScreen';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from './Screens/auth/SplashScreen';
import LoginScreen from './Screens/auth/LoginScreen';
import OtpScreen from './Screens/auth/OtpScreen';
import SuccessSplash from './Screens/auth/SuccessSplash';
import Details from './Screens/auth/Details';
import PersonalDetails from './Screens/messages/PersonalDetails';
import ChatScreen from './Screens/messages/ChatScreen';
import EditProfile from './Screens/Home/EditProfile';

import Settings from './Screens/Home/Settings';

const Stack = createNativeStackNavigator();
const AuthenticatedUserStack = () => {
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
        name="TabNavigation"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PersonalDetails"
        component={PersonalDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={headerstyle('Profile')}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const UserAuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
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
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  const {isAuthenticated} = useSelector(state => state.auth);
  console.log(isAuthenticated);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthenticatedUserStack /> : <UserAuthStack />}
    </NavigationContainer>
  );
};

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
}

export default App;
