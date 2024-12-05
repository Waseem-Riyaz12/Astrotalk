import React from 'react';
import {Dimensions, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VideoCalling from './Screens/videocall/VideoCalling';
import Phone from './Screens/phone/Phone';
import Messages from './Screens/messages/Messages';
import NestedHome from './Screens/Home/NestedHome';
import Gradient from './components/gradient/LinearGradient';
import {
  HomeIcon,
  VideoIcon,
  MessageIcon,
  PhoneIcon,
} from './assets/svg/SvgIcons';

const Tab = createBottomTabNavigator();
const {height} = Dimensions.get('window');

// Common screen options for all tabs
const commonScreenOptions = {
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarActiveTintColor: 'white',
  tabBarInactiveTintColor: 'black',
  tabBarStyle: {
    height: height * 0.07,

    // backgroundColor: '#ff7e5f',
  },
  tabBarLabelStyle: {
    // fontFamily: 'Work-Sans',
    // fontWeight: '200',
    // fontSize: 8,
  },
  tabBarBackground: () => <Gradient />,
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
            focused ? <Text style={{color, fontSize: 10}}>Home</Text> : null,
          tabBarIcon: ({color, size}) => <HomeIcon fill={color} />,
        }}
      />
      <Tab.Screen
        name="VideoCalling"
        component={VideoCalling}
        options={{
          title: 'Video',
          tabBarLabel: ({focused, color}) =>
            focused ? <Text style={{color, fontSize: 10}}>Video</Text> : null,
          tabBarIcon: ({color, size}) => <VideoIcon fill={color} />,
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          title: 'Messages',
          tabBarLabel: ({focused, color}) =>
            focused ? (
              <Text style={{color, fontSize: 10}}>Messages</Text>
            ) : null,
          tabBarIcon: ({color, size}) => <MessageIcon fill={color} />,
        }}
      />
      <Tab.Screen
        name="Phone"
        component={Phone}
        options={{
          title: 'Phone',
          tabBarLabel: ({focused, color}) =>
            focused ? <Text style={{color, fontSize: 10}}>Phone</Text> : null,
          tabBarIcon: ({color, size}) => <PhoneIcon fill={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
