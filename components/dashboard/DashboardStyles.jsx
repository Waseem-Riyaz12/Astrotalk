import {StyleSheet, Platform, StatusBar, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  cornerdiv: {
    width: width * 0.57,
    height: height * 0.29,
    // borderWidth: 1,
    position: 'absolute',
    resizeMode: 'contain',
    top: -20,
    left: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? 10 : StatusBar.currentHeight + 10, // Push content below header
  },
  nametext: {
    fontFamily: 'WorkSans',
    fontWeight: '400',
    fontSize: 16,
    color: 'white',
  },
  welcometext: {
    fontFamily: 'WorkSans',
    fontWeight: '700',
    fontSize: 28,
    color: 'white',
    maxWidth: 160,
  },
  textbox: {
    width: width / 2,
    height: width / 2.4,
  },
  iconbox: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-around',
    position: 'absolute',
    right: 0,
  },
  iconContainer: {
    width: 40, // Fixed width
    alignItems: 'center',
  },
});

export default styles; // Correct export
