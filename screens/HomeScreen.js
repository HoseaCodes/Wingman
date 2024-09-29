import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import SearchBar from '../components/SearchBar';
import FilterButtonSelection from '../components/FilterButtonSelection';
import axios from 'axios';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { eventData } from '../data/index';
import UpcomingEventCard from '../components/UpcomingEventCard';

export default function HomeScreen() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    const [fontsLoaded] = useFonts({
        'Yaro': require('../assets/fonts/yaro-regular.ttf'),
        'Uber': require('../assets/fonts/UberMoveTextRegular.ttf'),
    });

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('https://city-pulse-api.vercel.app/api/events?city=Dallas');
                const apiEvents = response.data.map(event => ({
                    ...event,
                    source: 'API'
                }));
                const allEvents = [...eventData, ...apiEvents];
                setEvents(allEvents);
            } catch (error) {
                console.error('Error fetching events:', error);
                setEvents(eventData); // Fallback to test data if API fails
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView>
                <View style={styles.container}>
                    <Image source={require('../assets/images/logo.png')} />
                    <Image source={require('../assets/images/bell.png')} />
                </View>
                <SearchBar />
                <View style={styles.filterContainer}>
                    <FilterButtonSelection />
                </View>
                <View>
                    <Text style={styles.eventTitle}>Upcoming <Text style={styles.eventTitleSpan}>Events</Text></Text>
                    <UpcomingEventCard events={events} />
                </View>
                <View style={styles.eventsContainer}>
                    <Text style={styles.eventTitle}>Dating <Text style={styles.eventTitleSpan}>Advice And Tips</Text></Text>
                    <View>
                        <View>
                            <Image source={require('../assets/images/man.png')} />
                            <Text>Bailey Jaeger</Text>
                            <Image source={require('../assets/images/star.png')} />
                            <Entypo name="check" size={24} color="black" />
                        </View>
                        <Text>Morning Date at a Hidden Art Gallery</Text>
                        <Text>In the quiet gallery's glow, our morning whispers with unspoken wonder. Among hidde... Read More</Text>
                        <Image source={require('../assets/images/event1.png')} />
                        <FontAwesome name="thumbs-o-up" size={24} color="black" />
                        <Text>12</Text>
                        <FontAwesome name="thumbs-o-down" size={24} color="black" />
                        <Text>3</Text>
                        <FontAwesome name="bookmark-o" size={24} color="black" />
                        <Text>6</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'white',
        borderBottomRightRadius: 35,
        borderBottomLeftRadius: 35,
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        padding: 40,
        width: '100%',
        height: 72.61,
        borderBottomRightRadius: 35,
        borderBottomLeftRadius: 35,
    },
    filterContainer: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        height: 100,
    },
    eventTitle: {
        fontFamily: 'Yaro',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        marginLeft: 25,
        marginBottom: 10,
    },
    eventTitleSpan: {
        color: '#DA331C',
    },
    eventsContainer: {
        display: 'flex',
        paddingVertical: 20,

    }
});