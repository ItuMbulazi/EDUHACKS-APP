import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import logo from './images/logo.png'

import { ScrollView } from 'native-base';


 export default function SignUpExpert({navigation}){

  return(

    <View justifyContent='center'>

<ScrollView>
      <ImageBackground style={{flex: 1, width: 390, height: 900}} source={require('./images/background.jpg')}>
        
        <Image source={logo} style={{width:370, height:200}}/>

        <Text style={{color:'#726D6D', fontStyle:'normal', fontSize:36, textAlign:'center'}}>EXPERT</Text>

<TextInput style={styles.input} placeholder='Username'/>

<TextInput  style={styles.input} placeholder='Email'/>

<TextInput  style={styles.input} placeholder='Phone number'/>

<TextInput  style={styles.input} placeholder='Password'/>

 <TextInput  style={styles.input} placeholder='Confirm Password'/>

 <TouchableOpacity style={styles.crendentialbtn}><Text style={styles.text} >CREDENTIALS</Text></TouchableOpacity>

 <TouchableOpacity style={styles.btn  }><Text style={styles.text} >NEXT</Text></TouchableOpacity>

        
 
      </ImageBackground>
</ScrollView>

   
</View>
  

 

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
justifyContent:'center',
paddingLeft:15,
marginLeft:30,
marginTop:20
},

btn:{
  backgroundColor:'#181752',
  color:'#726D6D',
  width:120,
  height:60,
  marginTop:20,
  borderRadius:30,
  marginLeft:120,

},

text:{
  color:'#726D6D',
  fontSize:22,
  marginLeft:30,
  marginTop:10
},

 crendentialbtn:{
  backgroundColor:'#181752',
  color:'#726D6D',
  height:60,
  width:200,
  marginTop:20,
  borderRadius:30,
  marginLeft:80,
  
 } 
  

});