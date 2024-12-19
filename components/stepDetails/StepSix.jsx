import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import Button from '../common/Button';

const LanguageSelection = ({
  navigation,
  selectedLanguages,
  setSelectedLanguages,
  handleFinish,
}) => {
  const [error, setError] = useState('');

  const languages = [
    'Hindi',
    'English',
    'Marathi',
    'Gujarati',
    'Punjabi',
    'Bengali',
    'Tamil',
    'Telugu',
    'Kannada',
    'Malayalam',
    'Odia',
    'Assamese',
    'Maithili',
    'Sanskrit',
  ];

  const toggleLanguage = language => {
    if (selectedLanguages.includes(language.toLowerCase())) {
      // Remove language if already selected
      setSelectedLanguages(
        selectedLanguages.filter(
          item => item.toLowerCase() !== language.toLowerCase(),
        ),
      );
    } else {
      // Add language if not already selected
      setSelectedLanguages([...selectedLanguages, language.toLowerCase()]);
    }
  };

  const renderLanguageItem = ({item}) => {
    const isSelected = selectedLanguages.includes(item.toLowerCase());
    return (
      <TouchableOpacity
        style={[
          styles.languageButton,
          isSelected && styles.selectedLanguageButton,
        ]}
        onPress={() => toggleLanguage(item)}>
        <Text
          style={[
            styles.languageText,
            isSelected && styles.selectedLanguageText,
          ]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const handleContinue = () => {
    if (selectedLanguages.length === 0) {
      setError('Please select at least one language.');
    } else {
      setError('');
      handleFinish(); // Proceed if valid
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select your preferred languages:</Text>
      <FlatList
        data={languages}
        renderItem={renderLanguageItem}
        keyExtractor={item => item}
        numColumns={3}
        contentContainerStyle={styles.languageList}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <View style={{marginVertical: 20}}>
        <Button
          title={'Continue'}
          bg={'#FF8700'}
          color={'white'}
          size={16}
          fw={'500'}
          lh={18}
          onPress={handleContinue}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 16,
    fontWeight: '400',
    color: '#4A4A4A',
    fontFamily: 'WorkSans',
    marginTop: 20,
  },
  languageList: {
    justifyContent: 'space-between',
    marginTop: 30,
    marginHorizontal: 20,
  },
  languageButton: {
    borderWidth: 0.5,
    borderColor: '#D6D6D6',
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
    margin: 5,
    marginRight: 15,
    backgroundColor: '#fff',
  },
  selectedLanguageButton: {
    backgroundColor: '#E2363D',
    elevation: 5,
  },
  languageText: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'WorkSans',
  },
  selectedLanguageText: {
    color: '#fff',
  },
  error: {
    color: '#FF8700',
    fontSize: 12,
    marginTop: 10,
  },
});

export default LanguageSelection;
