import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import background from './images/background.jpg'
import logo from './images/logo.png'
 export default function Update(){
  return(
      <ImageBackground style={{flex: 1, width: 390, height: 800}} source={require('./images/background.jpg')}>
        <View>
        <Image source={logo} style={{width: 370, height: 200 }}/>
        <Text style={{color:'#726D6D', fontStyle:'normal', fontSize:'30px', textAlign:'center'}}>UPDATE</Text>
<TextInput style={styles.input} placeholder='Username'/>
<TextInput style={styles.input} placeholder='Phone Number'/>
        <TouchableOpacity style={styles.btn}><Text style={{color:'#726D6D',
fontSize:22,
marginLeft:30,
marginTop: 12}}>UPDATE</Text></TouchableOpacity>
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
    borderRadius: 30,
    height: 60,
    width: 300,
    marginLeft: 50,
    paddingLeft: 15,
    marginTop:20
    },
    btn:{
      backgroundColor:'#181752',
      color:'#726D6D',
      width: 150,
      height: 60,
      marginTop: 20,
      borderRadius: 30,
      marginLeft: 140
    },
});