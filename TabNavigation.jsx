import React from 'react';
import {Dimensions, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Foundation';
import Dashboard from './Screens/Dashboard';
import VideoCalling from './Screens/VideoCalling';
import Phone from './Screens/Phone';
import Messages from './Screens/Messages';

const Tab = createBottomTabNavigator();
const {height} = Dimensions.get('window');

// Common screen options for all tabs
const commonScreenOptions = {
  headerShown: false,
  tabBarActiveTintColor: 'white',
  tabBarInactiveTintColor: 'black',
  tabBarStyle: {
    backgroundColor: '#F6A61F',
    height: height * 0.08,
  },
  tabBarLabelStyle: {
    fontFamily: 'Work-Sans',
    fontWeight: '600',
    fontSize: height * 0.015,
  },
};

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={commonScreenOptions}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
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
            <MaterialCommunityIcons
              name="message"
              color={color}
              size={height * 0.02}
            />
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
