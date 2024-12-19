import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import theme from '../../components/common/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import CustomHeader from '../../components/common/CustomHeader';
import AstroCard from '../../components/message/AstroCard';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window');
const Messages = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <CustomHeader headertext={'Chat with Astrologer'} />

      {/* Body */}
      <Filteroptions />

      {/* AstroCard */}
      <AstroCard />
    </SafeAreaView>
  );
};

export default Messages;

const Filteroptions = () => {
  return (
    <View style={styles.options}>
      <TouchableOpacity style={styles.filter}>
        <Ionicons name="filter" size={14} color={theme.colors.icon} />
        <Text style={styles.filtertext}>Filter</Text>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search for Astrologer"
          placeholderTextColor={theme.colors.placeholder}
          style={styles.input}
        />
        <Feather
          name="search"
          size={20}
          color={theme.colors.icon}
          style={styles.icon}
        />
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingRight: 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          width: width * 0.2,
          height: 35,
          flexDirection: 'row',
          position: 'absolute',
          paddingVertical: 'auto',
          paddingHorizontal: 10,
          right: 20,
        }}>
        <TouchableOpacity>
          <Entypo name="heart" size={20} color={'#FF2D55'} />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome6
            name="heart-circle-plus"
            size={20}
            color={'red'}
            style={{marginLeft: 15}}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Entypo
            name="heart"
            size={20}
            color={'#FF2D55'}
            style={{marginLeft: 15}}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome6
            name="heart-circle-plus"
            size={20}
            color={'red'}
            style={{marginLeft: 15}}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  options: {
    width: width,
    height: height * 0.08,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    marginHorizontal: -20,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  filter: {
    width: 70,
    height: 35,
    borderRadius: 16,
    borderWidth: 0.6,
    borderColor: theme.colors.border,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  filtertext: {
    fontSize: theme.fonts.sizes.small,
    color: theme.colors.text,
    fontWeight: theme.fonts.weights.light,
    fontFamily: theme.fonts.families.regular,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  input: {
    width: width * 0.4,
    height: 35,
    borderWidth: 0.6,
    borderColor: theme.colors.border,
    borderRadius: 16,
    fontSize: theme.fonts.sizes.vsmall,
    color: theme.colors.text,
    fontWeight: theme.fonts.weights.light,
    paddingLeft: 10,
    paddingRight: 35, // To avoid text overlap with the search icon
    marginLeft: width * 0.07,
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
});
