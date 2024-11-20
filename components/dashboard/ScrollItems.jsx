import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

const ScrollItems = () => {
  const data = [
    {id: '1', name: 'Category 1'},
    {id: '2', name: 'Category 2'},
    {id: '3', name: 'Category 3'},
    {id: '4', name: 'Category 4'},
    {id: '5', name: 'Category 5'},
    {id: '6', name: 'Category 6'},
  ];

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <Categories item={item} index={index} dataLength={data.length} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id} // Use the unique `id` for keys
      />
    </View>
  );
};

const Categories = ({item, index, dataLength}) => {
  return (
    <View
      style={[
        styles.container,
        index === dataLength - 1 && {marginRight: 0}, // Remove marginRight for the last item
      ]}>
      <Text style={styles.itemtext}>{item.name}</Text>
      <Image
        source={require('../../assets/images/pooja.jpg')}
        style={styles.image}
      />
    </View>
  );
};

export default ScrollItems;

const styles = StyleSheet.create({
  container: {
    width: width * 0.25,
    height: width * 0.25,
    marginVertical: 10,
    marginRight: 25, // Default marginRight for all items
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  itemtext: {
    position: 'absolute',
    color: 'white',
    zIndex: 1,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'WorkSans',
    bottom: 5,
  },
});
