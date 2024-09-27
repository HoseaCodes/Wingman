import React from 'react';
import { View, StyleSheet } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const BackButton = () => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="angle-left" size={16} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 37.09,
    height: 37.09,
    borderRadius: 12,
    backgroundColor: '#DA331C',
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default BackButton;
