import React from 'react';
import {Dimensions, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import Dashboard from './Screens/Home/Dashboard';
import VideoCalling from './Screens/videocall/VideoCalling';
import Phone from './Screens/phone/Phone';
import Messages from './Screens/messages/Messages';
import NestedHome from './Screens/Home/NestedHome';

const Tab = createBottomTabNavigator();
const {height} = Dimensions.get('window');

// Common screen options for all tabs
const commonScreenOptions = {
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarActiveTintColor: 'white',
  tabBarInactiveTintColor: 'black',
  tabBarStyle: {
    backgroundColor: '#F6A61F',
    height: height * 0.06,
  },
  tabBarLabelStyle: {
    fontFamily: 'Work-Sans',
    fontWeight: '600',
    fontSize: height * 0.015,
  },
  animationEnabled: false,
  presentaion: 'card',
};

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={commonScreenOptions}>
      <Tab.Screen
        name="NestedHome"
        component={NestedHome}
        options={{
          title: 'Home',
          tabBarLabel: ({focused, color}) =>
            focused ? (
              <Text style={{color, fontSize: height * 0.015}}>Home</Text>
            ) : null,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-heart"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="VideoCalling"
        component={VideoCalling}
        options={{
          title: 'Video',
          tabBarLabel: ({focused, color}) =>
            focused ? (
              <Text style={{color, fontSize: height * 0.015}}>Video</Text>
            ) : null,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="video"
              color={color}
              size={height * 0.03}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          title: 'Messages',
          tabBarLabel: ({focused, color}) =>
            focused ? (
              <Text style={{color, fontSize: height * 0.015}}>Messages</Text>
            ) : null,
          tabBarIcon: ({color, size}) => (
            <Entypo name="chat" color={color} size={height * 0.02} />
          ),
        }}
      />
      <Tab.Screen
        name="Phone"
        component={Phone}
        options={{
          title: 'Phone',
          tabBarLabel: ({focused, color}) =>
            focused ? (
              <Text style={{color, fontSize: height * 0.015}}>Phone</Text>
            ) : null,
          tabBarIcon: ({color, size}) => (
            <Icon name="telephone" color={color} size={height * 0.03} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
