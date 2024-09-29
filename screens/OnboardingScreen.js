import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import BackButton from "../components/BackButton";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import OnboardingCard from "../components/OnboardingCard";

const OnboardingScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Yaro': require('../assets/fonts/yaro-regular.ttf'),
    'Uber': require('../assets/fonts/UberMoveTextRegular.ttf'),
  });

  const [activeCard, setActiveCard] = useState('Types Of Dates');

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleCardPress = (title) => {
    setActiveCard(title);
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <View style={styles.container}>
        <BackButton />
        <Text style={styles.headerText}>
          Select
          <Text style={styles.headerSpan}> Activites </Text>
          Your Like
        </Text>
        <Text style={styles.subtitle}>
          Select Your Favorite Options to Activate Your Likes and Discover What Resonates with You
        </Text>
        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => handleCardPress('Types Of Dates')}>
            <OnboardingCard
              title='Types Of Dates'
              subtitle='Guiding Hearts, Navigating Love.'
              image={require('../assets/images/fire.png')}
              active={activeCard === 'Types Of Dates'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleCardPress('Activities')}>
            <OnboardingCard
              title='Activities'
              subtitle='Your Safe Space to Unwind, Vent, and Heal.'
              image={require('../assets/images/brain.png')}
              active={activeCard === 'Activities'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleCardPress('Preferences')}>
            <OnboardingCard
              title='Preferences'
              subtitle='Where Ideas Collide, Friendships Flourish.'
              image={require('../assets/images/family.png')}
              active={activeCard === 'Preferences'}
            />
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    padding: 40,
    paddingLeft: 20
  },
  headerText: {
    fontSize: 30,
    lineHeight: 36,
    fontFamily: 'Yaro',
    fontWeight: '700',
    marginBottom: 20,
    width: "80%",
    paddingTop: 50
  },
  headerSpan: {
    color: '#DA331C',
    fontWeight: 'normal'
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 16,
    color: 'black',
    marginBottom: 20,
    width: "70%",
    fontWeight: '800',
    fontFamily: 'Uber'
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 20,
    gap: 20,
  }
});

export default OnboardingScreen;
