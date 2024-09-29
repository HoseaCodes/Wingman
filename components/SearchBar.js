import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importing Ionicons for the icons

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={15} color="#B0B0B0" style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#ABABAB"
          style={styles.searchInput}
        />
      </View>
      <TouchableOpacity style={styles.filterButton}>
        <Image source={require('../assets/images/filter.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 267,
    height: 47,
    backgroundColor: 'whitesmoke',
    borderRadius: 15,
    paddingHorizontal: 10,
    shadowColor: '#00000014',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 2,
    
  },
  searchIcon: {
    marginLeft: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontFamily: 'Uber Move',
    fontSize: 13,
    fontWeight: '500',
    color: '#ABABAB',
    backgroundColor: 'transparent', 
  },
  filterButton: {
    width: 47,
    height: 47,
    // backgroundColor: 'linear-gradient(193.33deg, #F5412B -3.77%, #DA321D 74.45%)',
    backgroundColor: '#DA321D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginLeft: 8,
    shadowColor: '#00000014',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 2,
  }
});

export default SearchBar;
