import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import theme from './Theme';

const {width, height} = Dimensions.get('window');
const CustomHeader = ({showbalance = true, headertext}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.header,
          {justifyContent: showbalance ? 'space-between' : null},
        ]}>
        {showbalance ? (
          <View style={styles.balance}>
            <Text style={styles.baltext}>₹21</Text>
          </View>
        ) : (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={20} color="black" />
          </TouchableOpacity>
        )}
        <Text style={[styles.headertext, {marginHorizontal: 'auto'}]}>
          {headertext}
        </Text>
        {showbalance && (
          <View style={styles.iconbox}>
            <Image
              source={require('../../assets/images/hcall.png')}
              style={styles.icon}
            />
            <TouchableOpacity>
              <FontAwesome6 name="bars" size={20} color="#000" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    width: width,
    height: 60,
    backgroundColor: theme.colors.container,
    marginHorizontal: -20,
    flexDirection: 'row',
    elevation: 5,
    padding: 15,
  },
  balance: {
    width: 50,
    height: 25,
    backgroundColor: '#F6A61F',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  baltext: {
    fontWeight: '600',
    fontSize: 14,
    color: '#fff',
  },
  iconbox: {
    width: 80,
    height: 30,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headertext: {
    fontFamily: 'WorkSans',
    fontSize: 16,
    fontWeight: '400',
  },
});
