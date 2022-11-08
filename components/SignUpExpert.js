import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import logo from './images/logo.png'
import * as ImagePicker from 'expo-image-picker';
import { auth, storage , db} from "../firebase/firebaseconfig";
import { getStorage, uploadBytes, updateMetadata,getDownloadURL,doc,getDoc,getDocs } from "firebase/storage";
import "firebase/storage";
import { RadioButton } from "react-native-paper";
import {
  Select,
  CheckIcon,
  FormControl,
  WarningOutlineIcon,
} from "native-base";
import { collection, addDoc,setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { async } from "@firebase/util";



import { ScrollView } from 'native-base';


 export default function SignUpExpert({navigation}){


  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => false,
    });
  }, [navigation]);
  const [cc, setCC] = React.useState("");
  const [username,setUsername]=React.useState('');
  const [email,setEmail]=React.useState('');
  const [phoneNumber,setPhoneNumber]=React.useState('');
  const [password,setPassword]=React.useState('')
  const UploadToFirebase = async () => {
  navigation.navigate('login');
      
 
   
}
const auth = getAuth();
const Signup=()=>{
  createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {



  const user = userCredential.user;
    
    try {
        const docRef = addDoc(collection(db, "users"), {
          username: username,
          number:phoneNumber,
          email:email,
          password:password,
          accountType:'Expert',
          document:image
       
        });
        console.log("Document written with ID: ", docRef.id);
    }
       catch (e) {
        console.error("Error adding document: ", e);
       }
  navigation.navigate('login')

})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorCode)

});
}
  
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  let screenWidth = Dimensions.get('window').width
  let screenHeight = Dimensions.get('window').height

  return(

    <View justifyContent='center'>

<ScrollView>
      <ImageBackground style={{ flex: 1, width: screenWidth, height: screenHeight, justifyContent: 'center', alignItems: 'center' }} source={require('./images/background.jpg')}>
        
        <Image source={logo} style={{width:370, height:200}}/>

        <Text style={{color:'#726D6D', fontStyle:'normal', fontSize:36, textAlign:'center'}}>EXPERT</Text>

<TextInput style={styles.input} placeholder='Username' onChangeText={(username)=>setUsername(username)}/>

<TextInput  style={styles.input} placeholder='Email'  onChangeText={(username)=>setEmail(username)}/>

<TextInput  style={styles.input} placeholder='Phone number'  onChangeText={(username)=>setPhoneNumber(username)}/>

<TextInput  style={styles.input} placeholder='Password'  onChangeText={(username)=>setPassword(username)}/>

 <TextInput  style={styles.input} placeholder='Confirm Password'/>

 
 <TouchableOpacity style={styles.crendentialbtn} onPress={pickImage }><Text style={styles.text} >CREDENTIALS</Text></TouchableOpacity>
 <TouchableOpacity style={styles.btn} onPress={Signup}><Text style={styles.text} >NEXT</Text></TouchableOpacity>


 
<Text>mmmmmm</Text>
        
 
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

marginTop:20
},

btn:{
  backgroundColor:'#181752',
  color:'#726D6D',
  width:120,
  height:60,
  marginTop:20,
  borderRadius:30,
  marginLeft:5,
  justifyContent:'center'

},
btn1:{
  backgroundColor:'#181752',
  color:'#726D6D',
  width:120,
  height:60,
  marginTop:10,
  borderRadius:30,
  marginLeft:5,
  justifyContent:'center'

},

text:{
  color:'#726D6D',
  fontSize:22,
  marginLeft:30,
  marginTop:10,


},
text1:{
  color:'#726D6D',
  fontSize:22,
  marginLeft:30,
  marginTop:10,


},

 crendentialbtn:{
  backgroundColor:'#181752',
  color:'#726D6D',
  height:60,
  width:200,
  marginTop:20,
  borderRadius:30,
  marginLeft:-5,
  
 } 
  

});