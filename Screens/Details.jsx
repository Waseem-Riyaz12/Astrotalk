import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Steps from '../components/Steps';
import Step1 from '../components/stepDetails/Step1';

import {useNavigation} from '@react-navigation/native';
import Step2 from '../components/stepDetails/Step2';
import Step3 from '../components/stepDetails/Step3';

const {width, height} = Dimensions.get('window');
const Details = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep(step + 1);
  };
  return (
    <View style={styles.container}>
      <Header step={step} setStep={setStep} navigation={navigation} />
      <Steps step={step} />
      {step === 1 && (
        <Step1 handleNext={handleNext} name={name} setName={setName} />
      )}
      {step === 2 && <Step2 handleNext={handleNext} />}
      {step === 3 && <Step3 handleNext={handleNext} />}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  subcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headertext: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  subheader: {
    width: '100%',
    height: height * 0.05,
    marginTop: height * 0.03,
  },
});
function Header({step, setStep, navigation}) {
  return (
    <View style={styles.subcontainer}>
      <TouchableOpacity
        onPress={() => {
          if (step === 1) {
            navigation.goBack();
          } else {
            setStep(step - 1);
          }
        }}>
        <AntDesign name="arrowleft" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.headertext}>Step into the stars</Text>
    </View>
  );
}
