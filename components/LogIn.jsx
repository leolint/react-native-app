import * as React from 'react';
import { useState } from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet, TouchableHighlight, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';


function LogIn({ navigation }) {

  const [userName, setUserName] = useState('User')

  const onChange = (text) => {
    setUserName(text)
  }

  const load = () => {
    navigation.navigate('Main' , {userName});
  };

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <Text style={styles.logIn}>Log In</Text>
      <Text style={styles.placeholder}>User Name</Text>
      <TextInput
        style={styles.input}
        maxLength={20}
        onChangeText={onChange}
      />
      <TouchableHighlight onPress={load} style={styles.buttonWrapper}>
        <LinearGradient style={styles.button} colors={['#FF5C00', '#FFA450']}>
          <Text style={styles.buttonText}>Login</Text>
        </LinearGradient>
      </TouchableHighlight>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainWrapper: {
    flex:1,
    alignItems:'center',
    paddingLeft: 38,
    paddingRight: 38,
    paddingTop: 39,
    backgroundColor:'#EDEDED'
  },
  logIn: {
    width:'100%',
    fontSize: 44,
    color: '#2F2F2F',
    fontWeight: 'bold',
    marginBottom: 53,
    textAlign:'left',
    paddingLeft: 10
  },
  placeholder: {
    color:'grey',
    width:'100%',
    paddingBottom:5,
    textAlign:'left',
    paddingLeft: 10
  },
  input:{
    width:300,
    backgroundColor:'white',
    borderColor:'grey',
    borderWidth:1,
    borderRadius:5,
    marginBottom:40,
    paddingLeft:10
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 298,
    height: 50,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
})

export default LogIn;
