import React from 'react';
import {StatusBar} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

const CustomStatusBar = ({barStyle, backgroundColor, translucent}) => {
  useFocusEffect(
    React.useCallback(() => {
      // Apply the desired status bar settings
      StatusBar.setBarStyle(barStyle || 'default');
      StatusBar.setBackgroundColor(backgroundColor || '#fff');
      StatusBar.setTranslucent(translucent || false);

      // Cleanup if navigating away
      return () => {
        StatusBar.setBarStyle('default');
        StatusBar.setBackgroundColor('black');
        StatusBar.setTranslucent(false);
      };
    }, [barStyle, backgroundColor, translucent]),
  );

  return null;
};

export default CustomStatusBar;
