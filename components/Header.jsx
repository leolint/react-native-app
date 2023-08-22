import * as React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function Header({ userName }) {


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.calendar}>Sun, 1 March 2022</Text>
            <Text style={styles.text}>Hello, <Text style={styles.userName}>{userName}</Text></Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    calendar:{
        color: '#2F2F2F',
        marginTop:16,
        marginBottom:5,
        fontSize:16
    },
    text: {
        fontSize: 28,
        color: '#2F2F2F'
    },
    userName: {
        fontSize: 28,
        color: '#FF5C00',
        textTransform:'capitalize'
    }
});

export default Header;
