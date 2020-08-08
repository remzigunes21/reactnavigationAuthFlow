import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Heading from '../components/Heading';

const TextButton = ({title, style, onPress, ...props}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      {...props}>
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

    borderRadius: 10,
  },
  text: {
    color: 'purple',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
});
