import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/common/CustomHeader';
import {settingsdata} from '../../static/Data';
import theme from '../../components/common/Theme';

const {width, height} = Dimensions.get('window');

const Settings = () => {
  return (
    <View style={styles.container}>
      <CustomHeader headertext={'Settings'} showbalance={false} />
      {settingsdata.map(item => {
        return <RenderSettingItems item={item} key={item.id} />;
      })}
    </View>
  );
};

export default Settings;

const RenderSettingItems = ({item, key}) => {
  return (
    <View key={key} style={styles.settingitems}>
      {item?.id === 1 || item?.id === 2 ? (
        <Text>{item.title}</Text>
      ) : (
        <Pressable>
          <Text style={styles.title}>{item.title}</Text>
        </Pressable>
      )}

      <View>
        {item?.id === 1 && (
          <View style={{borderWidth: 1}}>
            <Text style={styles.subtitle}>Jyotishvani Mall</Text>
          </View>
        )}

        <Text style={styles.subtitle}>{item.subtitle2}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  settingitems: {
    width: '100%',
    height: height * 0.07,
    borderBottomWidth: 0.5,
    borderColor: theme.colors.border,
    marginHorizontal: -20,
    flexDirection: 'row',
    paddingHorizontal: 3,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: theme.fonts.sizes.medium,
    color: theme.colors.text,
    fontWeight: '500',
  },
  trackDisabled: {
    width: 50,
    height: 20,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  track: {
    width: 50,
    height: 20,
    borderRadius: 15,
    backgroundColor: '#34C759',
    // borderWidth: 0.5,
    // borderColor: '#FFFFFF',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  thumb: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});
