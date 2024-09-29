import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const OnboardingCard = ({
    title = 'Types Of Dates',
    subtitle = 'Guiding Hearts, Navigating Love.',
    image = require('../assets/images/fire.png'),
    active = false
}) => {
  return (
    <View style={active ? styles.container : styles.inactive}>
      <Image
        source={image} 
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 314.21,
    height: 115.75,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.6,
    borderColor: '#DA331C',
    boxShadow: '0px 0px 30px 0px #00000014',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  inactive: {
    width: 314.21,
    height: 115.75,
    borderRadius: 20,
    backgroundColor: '#F9F9F9',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 26,
    height: 26,
    position: 'absolute',
    top: 45,
    left: 20,
  },
  textContainer: {
    marginLeft: 40, 
  },
  title: {
    width: 186,
    height: 19,
      fontFamily: 'Uber Move',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 19.26,
    textAlign: 'left',
    color: '#000000',
    marginBottom: 4,
  },
  subtitle: {
    width: 185.4,
    fontFamily: 'Uber Move', 
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 13.91,
    textAlign: 'left',
    color: '#494949',
  },
});

export default OnboardingCard;
