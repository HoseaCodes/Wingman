import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import FilterButtonSelection from '../components/FilterButtonSelection'

export default function HomeScreen() {
    return (
        <SafeAreaView style={{ backgroundColor: 'white', borderBottomRightRadius: 35, borderBottomLeftRadius: 35 }}>
            <View style={styles.container}>
                <Image source={require('../assets/images/logo.png')} />
                <Image source={require('../assets/images/bell.png')} />
            </View>
            <SearchBar />
            <View style={{
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                height: 100
            }}>
                <FilterButtonSelection />
            </View>
            <View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        width: '100%',
        padding: 40,
        width: 375,
        height: 72.61,
        gap: 0,
        borderBottomRightRadius: 35,
        borderBottomLeftRadius: 35

    },
})