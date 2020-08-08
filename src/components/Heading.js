import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Heading = ({children, style, ...props}) => {
  return (
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

export default Heading;

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: '700',
  },
});
