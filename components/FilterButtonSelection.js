import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, PanResponder, Dimensions, Image, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

const FilterButtonSelection = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const translateX = useRef(new Animated.Value(0)).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (evt, gestureState) => {
                // Update translateX as user swipes
                translateX.setValue(gestureState.dx);
            },
            onPanResponderRelease: (evt, gestureState) => {
                const swipeThreshold = width / 4;

                // Change the active filter based on the swipe direction
                if (gestureState.dx > swipeThreshold) {
                    // Swiped right
                    if (activeFilter === 'Date Suggestions') {
                        setActiveFilter('All');
                        Animated.spring(translateX, {
                            toValue: 0,
                            useNativeDriver: true,
                        }).start();
                    } else if (activeFilter === 'Popular Places') {
                        setActiveFilter('Date Suggestions');
                        Animated.spring(translateX, {
                            toValue: -width / 4,
                            useNativeDriver: true,
                        }).start();
                    }
                } else if (gestureState.dx < -swipeThreshold) {
                    // Swiped left
                    if (activeFilter === 'All') {
                        setActiveFilter('Date Suggestions');
                        Animated.spring(translateX, {
                            toValue: -width / 4,
                            useNativeDriver: true,
                        }).start();
                    } else if (activeFilter === 'Date Suggestions') {
                        setActiveFilter('Popular Places');
                        Animated.spring(translateX, {
                            toValue: -width / 2,
                            useNativeDriver: true,
                        }).start();
                    }
                } else {
                    // Reset position if swipe is not significant
                    Animated.spring(translateX, {
                        toValue: -width * (['All', 'Visited Places', 'Date Suggestions', 'Popular Places'].indexOf(activeFilter) / 4),
                        useNativeDriver: true,
                    }).start();
                }
            },
        })
    ).current;

    return (
        <View style={styles.container}>
            <Animated.View
                style={[styles.buttonContainer, { transform: [{ translateX }] }]}
                {...panResponder.panHandlers}
            >
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity
                        style={[
                            styles.filterButton,
                            activeFilter === 'All' && styles.activeButton,
                        ]}
                        onPress={() => setActiveFilter('All')}
                    >
                        <Image source={require('../assets/images/group.png')} />
                        <Text
                            style={[
                                styles.buttonText,
                                activeFilter === 'All' && styles.activeButtonText,
                            ]}
                        >
                            All
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.filterButton,
                            activeFilter === 'Visited Places' && styles.activeButton,
                        ]}
                        onPress={() => setActiveFilter('Visited Places')}
                    >
                        <Image source={require('../assets/images/places.png')} />
                        <Text
                            style={[
                                styles.buttonText,
                                activeFilter === 'Visited Places' && styles.activeButtonText,
                            ]}
                        >
                            Visited Places
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.filterButton,
                            activeFilter === 'Date Suggestions' && styles.activeButton,
                        ]}
                        onPress={() => setActiveFilter('Date Suggestions')}
                    >
                        <Image source={require('../assets/images/suggestion.png')} />
                        <Text
                            style={[
                                styles.buttonText,
                                activeFilter === 'Date Suggestions' && styles.activeButtonText,
                            ]}
                        >
                            Date Suggestions
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.filterButton,
                            activeFilter === 'Popular Places' && styles.activeButton,
                        ]}
                        onPress={() => setActiveFilter('Popular Places')}
                    >
                        <Image source={require('../assets/images/popularity.png')} />
                        <Text
                            style={[
                                styles.buttonText,
                                activeFilter === 'Popular Places' && styles.activeButtonText,
                            ]}
                        >
                            Popular Places
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 38,
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 10,
        backgroundColor: 'whitesmoke',
    },
    activeButton: {
        backgroundColor: '#fff',
        borderColor: '#DE341F',
        borderWidth: 0.6,
    },
    buttonText: {
        fontFamily: 'Uber Move',
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 13,
        textAlign: 'left',
        color: '#000000',
        marginLeft: 5,
    },
    activeButtonText: {
        color: '#000',
    },
});

export default FilterButtonSelection;
