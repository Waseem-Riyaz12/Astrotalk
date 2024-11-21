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
  Image,
} from 'react-native';
import styles from '../components/dashboard/DashboardStyles';
import LinearGradient from 'react-native-linear-gradient';
import Bell from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SearchInput from '../components/common/SearchInput';
import ScrollItems from '../components/dashboard/ScrollItems';
import CallinngMethod from '../components/dashboard/CallingMethod';
import AppSwiper from '../components/dashboard/Swiper';
import Astrologers from '../components/dashboard/Astrologers';
import TrendingNow from '../components/dashboard/TrendingNow';
import ShoppingItems from '../components/dashboard/ShoppingItem';

const Dashboard = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Configure the StatusBar */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      {/* Custom View Extending into Status Bar */}
      <Cornerdiv />

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
        top={'50%'}
        mv={20}
        transform={[{translateY: -10}]}
      />

      {/* pagging banner */}
      <AppSwiper />

      {/* scrollitems */}
      <ScrollItems />

      {/* Calling Methods */}
      <CallinngMethod />

      {/* Real Astrologers */}
      <Astrologers
        title={'Recommended Astrologers'}
        subtitle={'See all'}
        name={'chevron-small-right'}
      />

      {/* Trending Now */}
      <TrendingNow />

      {/* For Bussiness */}
      <Astrologers
        title={'Worried about'}
        subtext={'Our Astrologers are here to guide you!'}
        texts={[' bussiness', ' education', ' health', ' children']}
        showScrollingText={true}
        showSubtext={true}
        showTouchableOpacity={false}
      />

      {/* Shopping Items */}
      <ShoppingItems />
    </ScrollView>
  );
};

const Cornerdiv = () => {
  return (
    <Image
      source={require('../assets/images/cornerdiv.png')}
      style={styles.cornerdiv}
    />
    // <LinearGradient style={styles.cornerdiv} colors={['#F6A61F', '#FF8700']} />
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
