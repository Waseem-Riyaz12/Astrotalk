import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Platform,
  Dimensions,
  Text,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchInput from '../../components/common/SearchInput';
import Button from '../../components/common/Button';
import {useNavigation} from '@react-navigation/native';
import {setAmount} from '../../redux/Reducer';
import {useDispatch} from 'react-redux';

const {width, height} = Dimensions.get('window');

const WalletScreen = () => {
  const navigation = useNavigation();
  const [selectedAmount, setSelectedAmount] = useState(''); // State for the selected amount
  const amounts = [
    '+50',
    '+100',
    '+200',
    '+500',
    '+1000',
    '+1500',
    '+2000',
    '+3000',
    '+4000',
  ];

  const handleNavigate = () => {
    if (selectedAmount) {
      navigation.navigate('PaymentScreen', {amount: selectedAmount});
      setSelectedAmount('');
    }
  };

  const handleAmountSelect = amount => {
    const numericAmount = amount.replace('+', '');
    setSelectedAmount(numericAmount); // Set the selected amount to state
  };

  const handleInputChange = text => {
    setSelectedAmount(text); // Update selectedAmount with manual input
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inner}>
          <SearchInput
            value={selectedAmount} // Display selected amount in SearchInput
            onChangeText={handleInputChange} // Update value when typing manually
            showIcon={false}
            placeholder={'Enter amount'}
            bw={0.5}
            br={8}
            bc={'#E2363D'}
            pc={'#D6D6D6'}
            ph={20}
            height={50}
            ls={2}
            size={16}
            ff={'WorkSans'}
            fw={'400'}
            kt={'numeric'}
          />
        </View>

        <View style={styles.Amountbox}>
          {amounts.map(item => {
            return (
              <RenderAmount
                key={item}
                item={item}
                isSelected={item === selectedAmount} // Check if this item is selected
                onSelect={handleAmountSelect}
              />
            );
          })}
        </View>
        <Button
          title={'Proceed to pay'}
          bg={'#FF8700'}
          color={'white'}
          size={16}
          fw={'500'}
          lh={18}
          el={5}
          onPress={handleNavigate}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const RenderAmount = ({item, isSelected, onSelect}) => {
  const handlePress = () => {
    onSelect(item); // Set this item as selected
  };

  return (
    <Pressable
      style={[
        styles.itembox,
        {backgroundColor: isSelected ? '#E2363D' : 'transparent'}, // Maroon color for selected item
      ]}
      onPress={handlePress}>
      <Text
        style={[styles.itemtext, {color: isSelected ? '#FFFFFF' : '#E2363D'}]}>
        {item}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  inner: {},
  Amountbox: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 5,
    width: width - 40,
    height: height * 0.4,
  },
  itembox: {
    width: width * 0.195,
    height: height * 0.06,
    borderWidth: 0.5,
    borderColor: '#E2363D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: height * 0.023,
  },
  itemtext: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'WorkSans',
  },
});

export default WalletScreen;
