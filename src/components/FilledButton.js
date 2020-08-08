import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Heading from './Heading';

const FilledButton = ({title, style, onPress, ...props}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      {...props}>
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export default FilledButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'purple',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
