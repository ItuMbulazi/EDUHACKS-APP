import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import logo from './images/logo.png'



 export default function ForgotPassword(){

  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => false,
    });
  }, [navigation]);
  

    let screenWidth = Dimensions.get('window').width
let screenHeight = Dimensions.get('window').height

  return(
    <ImageBackground style={{ flex: 1, width: screenWidth, height: screenHeight, justifyContent: 'center', alignItems: 'center' }} source={require('./images/background.jpg')}>
        <View>
        <Image source={logo} style={{width:370, height:200 }}/>
<Text style={{color:'#726D6D', fontStyle:'normal', fontSize:36, textAlign:'center'}}>Forgot Password?</Text>
<TextInput style={styles.input} placeholder='Enter Email'/>


 <TouchableOpacity style={styles.btn}><Text style={{color:'#726D6D',
fontSize:22,
justifyContent:'center',
marginTop:1}}>Submit</Text></TouchableOpacity>
        </View>
      </ImageBackground>
  )
}


const styles = StyleSheet.create({
btn:{
  justifyContent:'center'
},
input:{
backgroundColor:'#D8D6D6',
borderRadius:30,
height:60,
width:300,
marginLeft:50,
paddingLeft:15,
marginTop:20
},
btn:{
    textAlign:'center',
    justifyContent:'center',
    marginLeft:120,
    backgroundColor:'#181752',
    color:'#726D6D',
    width:120,
    height:60,
    marginTop:20,
    borderRadius:30,
    paddingLeft:25,
    paddingBottom:12,
},
});