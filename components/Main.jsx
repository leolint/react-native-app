import * as React from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image } from 'react-native';
import Header from './Header';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

function Main({ route }) {

  const { userName } = route.params;

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header userName={userName} />
      <View style={styles.imageWrapper}>
        <Image source={require('../assets/cardBg.png')} />
        <View style={styles.radialProgressWrapper}>
          <AnimatedCircularProgress
          style={styles.radialProgress}
            size={120}
            width={15}
            fill={80}
            tintColor="#fff"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#FFB478" />
            <Text style={styles.persents}>70%</Text>
           <Text style={styles.cardText}>3 of 5 habits {'\n'}completed today!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 28,
    paddingRight: 28
  },
  imageWrapper: {
    width: '100%',
    alignItems: 'center',
    marginTop: 16,
    paddingLeft:15
  } ,
  radialProgressWrapper : {
    flexDirection:'row',
    alignItems:'center',
    position:'absolute' , 
    left: 25 , 
    top: 33
  } ,
  radialProgress : {
    position:'relative'
  } , 
  persents : {
    position: 'absolute' , 
    top: 42 , 
    left: '15%',
    color:'white',
    fontSize: 21
  } , 
  cardText : {
    color: 'white' ,
    fontSize: 20,
    marginLeft:25
  }
});

export default Main;
