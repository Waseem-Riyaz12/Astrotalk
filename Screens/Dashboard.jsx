import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from '../components/CSS/DashboardStyles';
import LinearGradient from 'react-native-linear-gradient';
import Bell from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SearchInput from '../components/common/SearchInput';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      {/* Configure the StatusBar */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      {/* Custom View Extending into Status Bar */}
      <Cornerdiv />

      {/* Rest of the Screen Content */}
      <View style={styles.content}>
        <View style={styles.textbox}>
          <Text style={styles.nametext}>Hello Amit</Text>
          <Text style={styles.welcometext}>Welcome to Jyotishvani</Text>
        </View>

        <Icons />
      </View>

      <SearchInput
        width={'100%'}
        height={50}
        placeholder={'Search for Astrologer, Jyotishvani products'}
        bw={0.5}
        bc={'#D6D6D6'}
        br={10}
        ph={20}
        pc={'#6D6D6D'}
        color={'#4A4A4A'}
        name={'search1'}
        isize={20}
        icolor={'#4A4A4A'}
        position={'absolute'}
        right={20}
        top={'30%'}
      />
    </View>
  );
};

const Cornerdiv = () => {
  return (
    <LinearGradient style={styles.cornerdiv} colors={['#F6A61F', '#FF8700']} />
  );
};

export default Dashboard;
const Icons = () => {
  return (
    <View style={styles.iconbox}>
      <TouchableOpacity>
        <Bell name="bell" color={'#E2363D'} size={20} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon name="wallet" color={'#040404'} size={20} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="bars" color={'#040404'} size={20} />
      </TouchableOpacity>
    </View>
  );
};
