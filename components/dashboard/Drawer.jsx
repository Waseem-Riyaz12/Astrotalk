import {
  Dimensions,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import theme from '../common/Theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {data} from '../../static/Data';
import {useSelector} from 'react-redux';

const {width, height} = Dimensions.get('window');

const Drawer = ({navigation, showdrawer, setShowdrawer}) => {
  const {phoneDetails, user} = useSelector(state => state.auth);
  return (
    <Modal
      visible={showdrawer}
      animationType="fade"
      transparent={true}
      onRequestClose={() => setShowdrawer(false)}>
      {/* Centered View for Modal */}
      <View style={styles.centeredView}>
        <View style={styles.modal}>
          <View style={styles.modalheader}>
            {/* name and dp */}
            <View style={styles.modalheaderleft}>
              <Image
                source={require('../../assets/images/Dp.png')}
                style={styles.dp}
              />

              {/* name and number */}
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',

                    justifyContent: 'space-around',
                  }}>
                  <Text style={styles.name}>{user.name}</Text>
                  <Pressable onPress={() => navigation.navigate('EditProfile')}>
                    <FontAwesome name="edit" size={15} color="black" />
                  </Pressable>
                </View>
                <Text style={styles.number}>{phoneDetails.phone}</Text>
              </View>
            </View>

            {/* close button */}
            <TouchableOpacity onPress={() => setShowdrawer(false)}>
              <Entypo name="cross" size={30} color="black" />
            </TouchableOpacity>
          </View>
          {/* rest of the body */}
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)}
                key={index}
                style={styles.modalbody}>
                <Entypo name={item.icon} size={20} color="black" />
                <Text style={styles.text}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
          <View style={styles.follow}>
            {/* follow icons here */}
            <View style={styles.followicon}>
              <Text style={styles.text}>Follow us on</Text>
              <TouchableOpacity>
                <Image source={require('../../assets/images/facebook.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../../assets/images/twitter.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../../assets/images/insta.png')} />
              </TouchableOpacity>
            </View>

            {/* Version here */}
            <View style={styles.version}>
              <Text style={styles.versiontext}>Version 1.1.111</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modal: {
    width: width * 0.8,
    height: height * 0.9,
    backgroundColor: 'white',
    borderTopLeftRadius: 5,
    // alignItems: 'center',
    position: 'absolute',
    left: 0,
    bottom: height * 0.07,
  },
  modalText: {
    fontSize: 18,
    color: 'black',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalheader: {
    width: '100%',
    height: '10%',
    borderBottomWidth: 0.5,
    borderColor: theme.colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  modalheaderleft: {
    height: '100%',
    // borderWidth: 1,
    // justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  dp: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.text,
    marginRight: 6,
    // fontFamily: 'WorkSans-Bold',
  },
  number: {
    fontSize: 12,
    fontWeight: '400',
    color: '#4A4A4A',
    textAlign: 'center',
  },
  modalbody: {
    width: '100%',
    height: '8%',
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderColor: theme.colors.border,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.text,
    // textAlign: 'center',
    marginLeft: width * 0.09,
  },
  follow: {
    width: '100%',
    height: '15%',
    position: 'absolute',
    bottom: 0,
  },
  followicon: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    width: '90%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  version: {
    width: '100%',
    height: '40%',
    borderTopWidth: 0.5,
    borderColor: theme.colors.border,
    position: 'absolute',
    bottom: 0,
  },
  versiontext: {
    fontSize: 16,
    fontWeight: '500',
    color: '#F6A61F',
    textAlign: 'center',
    marginTop: height * 0.02,
  },
});
