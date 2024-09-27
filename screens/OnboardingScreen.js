import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Button } from "react-native";
import OnboardingComponent from "../components/OnboardingComponent";
import BackButton from "../components/BackButton";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'; // If using Expo SDK 44 or older

const OnboardingScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Yaro': require('../assets/fonts/yaro-regular.ttf'),
    'Uber': require('../assets/fonts/UberMoveTextRegular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BackButton />
        <Text style={styles.headerText}>
          Select 
          <Text style={styles.headerSpan}> Activites </Text>
          Your Like
        </Text>
        <Text style={styles.subtitle}>Select Your Favorite Options to Activate Your Likes and Discover What Resonates with You</Text>
        <OnboardingComponent navigation={navigation}>
          <Text>Welcome to Wingman</Text>
          <Button
            title="Get Started"
            onPress={() => navigation.navigate("Home")}
          />
        </OnboardingComponent>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20
  },
  headerText: {
    fontSize: 30,
    lineHeight: 36,
    fontFamily: 'Yaro',
    fontWeight: '400',
    marginBottom: 20,
    width: "70%",
    paddingTop: 40
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
    width: "65%",
    fontFamily: 'Uber'
  }

});

export default OnboardingScreen;
