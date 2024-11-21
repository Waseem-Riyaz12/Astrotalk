import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

const ScrollingText = ({texts, style, interval = 2000}) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Current text index
  const nextIndex = (currentIndex + 1) % texts.length; // Calculate the next text index
  const animationValue = useRef(new Animated.Value(0)).current; // Animated value for sliding

  useEffect(() => {
    const startAnimation = () => {
      // Slide up animation
      Animated.timing(animationValue, {
        toValue: -30, // Move up by 30 units (adjust as needed)
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        // Update the index immediately after sliding up
        setCurrentIndex(nextIndex);

        // Reset position below the view
        animationValue.setValue(30);

        // Slide new text into view
        Animated.timing(animationValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      });
    };

    const intervalId = setInterval(startAnimation, interval);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [animationValue, nextIndex, texts, interval]);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          style,
          styles.text,
          {transform: [{translateY: animationValue}]},
        ]}>
        {texts[currentIndex]}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden', // Prevent text from overflowing
    // Match the text height for a clean slide
  },
});

export default ScrollingText;
