import React, {useState} from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const DateTimePicker = ({mode, placeholder, icon, onConfirm}) => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [open, setOpen] = useState(false);

  const formatValue = () => {
    if (mode === 'time') {
      return selectedDateTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
    }
    if (mode === 'date') {
      return selectedDateTime.toISOString().split('T')[0]; // YYYY-MM-DD format for date
    }
    return '';
  };

  return (
    <View style={styles.container}>
      {/* Input Field with Icon */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          value={formatValue()}
          editable={false} // Prevent manual editing
        />
        <TouchableOpacity
          onPress={() => setOpen(true)}
          style={styles.iconContainer}>
          <Icon name={icon} size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Date/Time Picker Modal */}
      <DatePicker
        open={open}
        modal
        mode={mode}
        date={selectedDateTime}
        onConfirm={dateTime => {
          setOpen(false);
          setSelectedDateTime(dateTime);

          // Pass only the formatted value to the parent component
          const formattedValue =
            mode === 'time'
              ? dateTime.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })
              : dateTime.toISOString().split('T')[0];
          onConfirm(formattedValue); // Notify the parent with the correct value
        }}
        onCancel={() => setOpen(false)}
      />
    </View>
  );
};

export default DateTimePicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  iconContainer: {
    marginLeft: 10,
  },
});
