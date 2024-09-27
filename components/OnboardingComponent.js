import React, { useState } from 'react'
import { View, Text, Button } from 'react-native';

export default function OnboardingComponent({navigation}) {
    return (
        <View style={{
            display: 'flex', 
            flexDirection: "column", 
            justifyContent: "space-evenly",
            padding: 20,
            alignItems: "center",
            gap: 20
            }}
            >
            <Text>Logo</Text>
            <Button
                title="Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}