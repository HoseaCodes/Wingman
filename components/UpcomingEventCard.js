import React from 'react'
import { Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { truncateText } from '../utils/index'

export default function UpcomingEventCard({
    events,
}) {
    const openEventUrl = (url) => {
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
      };
  return (
    <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {events.map((event, index) => (
            <TouchableOpacity key={index} style={styles.event} onPress={() => openEventUrl(event.url)}>
              <Image style={styles.eventImage} source={
                event.source === 'API' ? { uri: event.image } : event.image} />
              <Text style={styles.eventTextTitle}>{truncateText(event.name, 20)}</Text>
              <Text style={styles.eventTextSubtitle}>{event.venue}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
  )
}


const styles = StyleSheet.create({
    scrollViewContent: {
      paddingLeft: 25,
      paddingRight: 25,
    },
    event: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginRight: 20,
      gap: 10,
      width: 211,
    },
    eventImage: {
      width: 211,
      height: 125,
      borderRadius: 20,
    },
    eventTextTitle: {
      fontFamily: 'Yaro',
      fontSize: 14,
      fontWeight: 'bold',
      color: '#000000',
      textAlign: 'center',
    },
    eventTextSubtitle: {
      fontFamily: 'Uber',
      fontSize: 12,
      color: '#BABABA',
      width: '100%',
      textAlign: 'center',
    },
  });