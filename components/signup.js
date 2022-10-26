import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import background from './images/background.jpg'
import logo from './images/logo.png'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ScrollView } from 'native-base';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import {db} from '../firebase/firebaseconfig'



 export default function SignUp({navigation}){

  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => false,
    });
  }, [navigation]);

  const [email,setEmail]=React.useState('')
  const [password,setPassword]=React.useState('')
  const [username,setUsername]=React.useState('')
  const [number,setNumber]=React.useState('')



  const auth = getAuth();

const Signup=()=>{
      createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
  


      const user = userCredential.user;

        try {
            const docRef = addDoc(collection(db, "users"), {
              username: username,
              number:number,
              email:email,
              password:password,
           
            });
            console.log("Document written with ID: ", docRef.id);
        }
           catch (e) {
            console.error("Error adding document: ", e);
           }
      navigation.navigate('login',{username},{number})
  
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode)
   
    });
  }

  let screenWidth = Dimensions.get('window').width
  let screenHeight = Dimensions.get('window').height

  return(

<ScrollView>
      <ImageBackground style={{ flex: 1, width: screenWidth, height: screenHeight, justifyContent: 'center', alignItems: 'center' }} source={require('./images/background.jpg')}>
        <View>
        <Image source={logo} style={{width:370, height:200}}/>

        <Text style={{color:'#726D6D', fontStyle:'normal', fontSize:36, textAlign:'center'}}>SINGLE</Text>

<TextInput style={styles.input} placeholder='Username' onChangeText={(username)=>setUsername(username)} />

<TextInput  style={styles.input} placeholder='Email' onChangeText={(email)=>setEmail(email)}/>

<TextInput  style={styles.input} placeholder='Phone number' onChangeText={number=>setNumber(number)}/>

<TextInput  style={styles.input} placeholder='Password' onChangeText={(password)=>setPassword(password)}/>

 <TextInput  style={styles.input} placeholder='Confirm Password'/>

 <TouchableOpacity style={styles.btn  } onPress={Signup}><Text style={styles.text} >NEXT</Text></TouchableOpacity>

        
        </View>
      </ImageBackground>
</ScrollView>

   

  

 

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