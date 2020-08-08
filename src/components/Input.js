import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const Input = ({style, onChangeText, ...props}) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      {...props}
      style={[styles.input, style]}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ccc',
    width: '100%',
  },
});
