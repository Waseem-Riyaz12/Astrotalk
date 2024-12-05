import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const Gradient = () => {
  return (
    <LinearGradient
      colors={['#F6A61F', '#FF5733']} // Customize your colors
      style={{flex: 1}}
      // start={{x: 0, y: 0}}
      // end={{x: 1, y: 1}} // You can change the direction of the gradient
      // locations={[0, 1]}
    />
  );
};

export default Gradient;
