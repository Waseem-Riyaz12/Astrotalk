import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

const CustomStatusBar = ({barStyle, backgroundColor, translucent}) => {
  useEffect(() => {
    // Apply status bar configuration
    StatusBar.setBarStyle(barStyle || 'default');
    StatusBar.setBackgroundColor(backgroundColor || '#fff');
    StatusBar.setTranslucent(translucent || false);

    // Cleanup on unmount
    return () => {
      StatusBar.setBarStyle('default');
      StatusBar.setBackgroundColor('#fff');
      StatusBar.setTranslucent(false);
    };
  }, [barStyle, backgroundColor, translucent]);

  return null;
};

export default CustomStatusBar;
