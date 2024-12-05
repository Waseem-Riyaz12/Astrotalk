import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import {LangIcon} from '../assets/svg/SvgIcons';

const {width, height} = Dimensions.get('window');

const Steps = ({step}) => {
  const stepIcons = [
    {activeIcon: <Icon name="user-edit" size={15} color="#fff" />},
    {
      activeIcon: (
        <MaterialCommunityIcons name="gender-male" size={15} color="#fff" />
      ),
    },
    {activeIcon: <Fontisto name="date" size={15} color="#fff" />},
    {activeIcon: <Entypo name="back-in-time" size={15} color="#fff" />},
    {activeIcon: <Entypo name="location-pin" size={15} color="#fff" />},
    {activeIcon: <LangIcon fill="white" />},
  ];

  const renderStep = (index, icon) => {
    const isActive = step === index + 1;
    const isCompleted = step > index + 1;

    return (
      <View
        key={index}
        style={[
          styles.step,
          isActive && styles.stepsActive,
          isCompleted && styles.stepCompleted,
          !isActive && !isCompleted && styles.inactiveStepBorder, // Add border only if inactive
        ]}>
        {isCompleted ? <Icon name="check" size={15} color="#fff" /> : icon}
      </View>
    );
  };

  return (
    <View>
      <View style={styles.subcontainer}>
        {stepIcons.map((item, index) => renderStep(index, item.activeIcon))}
      </View>
      <View style={styles.line} />
    </View>
  );
};

export default Steps;

const styles = StyleSheet.create({
  subcontainer: {
    flexDirection: 'row',
    width: '100%',
    height: height * 0.05,
    marginTop: height * 0.04,
  },
  step: {
    width: 30,
    height: 30,
    borderRadius: 24,
    marginRight: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: width,
    height: 1,
    borderWidth: 0.5,
    marginHorizontal: -40,
    alignSelf: 'center',
    borderColor: '#D6D6D6',
  },
  stepsActive: {
    backgroundColor: '#FF8700',
    elevation: 5,
  },
  stepCompleted: {
    backgroundColor: '#FF8700',
  },
  inactiveStepBorder: {
    borderWidth: 0.5,
    borderColor: '#4A4A4A',
  },
});
