import React from 'react';
import { useState, useEffect} from 'react';
import { Text, View, StyleSheet, ImageBackground, Image,  TouchableOpacity,TextInput } from 'react-native';
import Constants from 'expo-constants';
import background from './images/background.jpg'
import logo from './images/logo.png';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase/firebaseconfig'
import {
  ref,
  uploadBytesResumable 
} from "firebase/storage";
import {storage} from '../firebase/firebaseconfig'
import { getStorage, uploadBytes } from "firebase/storage";
import AsyncStorage from '@react-native-async-storage/async-storage';




 export default function Login({navigation}){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const auth = getAuth();


  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...

        navigation.navigate('all')
      } else {
        // User is signed out
        // ...
      }
    });
  })

  const signin=()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    navigation.navigate('all')
      alert('is logged')
  
 
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });
  }




  
  return(
      <ImageBackground style={{flex: 1, width: 390, height: 800}} source={require('./images/background.jpg')}>
        <View>
    
        <Image source={logo} style={{width:370, height:200 }}/>

<Text style={{color:'#726D6D', fontStyle:'normal', fontSize:36, textAlign:'center'}}>LOGIN</Text>

<TextInput onChangeText={email=>setEmail(email)} style={styles.input} placeholder='Username' flat="focused" activeOutlineColor='blue'/>

 <TextInput onChangeText={password=>setPassword(password)} style={styles.input} placeholder='Password'/>

 <TouchableOpacity onPress={signin}  style={styles.btn}><Text style={styles.text}>LOGIN</Text></TouchableOpacity>

 <Text style={{color:'#726D6D', marginTop:20, marginLeft:150}}>Forgot password?</Text>

 <Text style={{marginLeft:190, marginTop:20}}>Or</Text>

 <TouchableOpacity onPress={()=>navigation.navigate('signup')} style={styles.btn}><Text style={{color:'#726D6D',
fontSize:22,
marginLeft:20,
marginTop:10}}>SIGN UP</Text></TouchableOpacity>
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
  backgroundColor:'#181752',
  color:'#726D6D',
  width:120,
  height:60,
  marginTop:20,
  borderRadius:30,
  marginLeft:140
},

text:{
  color:'#726D6D',
  fontSize:22,
  marginLeft:30,
  marginTop:10
}
});