import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity,  Dimensions, } from 'react-native';
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
import { ScrollView } from 'native-base';



 export default function Login({navigation}){

  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => false,
    });
  }, [navigation]);


  const [email,setEmail]=React.useState('');
  const [password,setPassword]=React.useState('');


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
      
      
      const storage = getStorage();
      const storageRef = ref(storage, '1.jpg');

      const uploadTask = uploadBytesResumable(storageRef, 'image.jpg', metadata);

      
      // 'file' comes from the Blob or File API
      uploadBytes(storageRef, 'Image').then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });
      navigation.navigate('all')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });
  }




let screenWidth = Dimensions.get('window').width
let screenHeight = Dimensions.get('window').height


  return(

    <ScrollView justifyItems='center'>

      
<ImageBackground style={{ flex: 1, width: screenWidth, height: screenHeight, justifyContent: 'center', alignItems: 'center' }} source={require('./images/background.jpg')}>
        <View>
    
        <Image source={logo} style={{width:370, height:200 }}/>

<Text style={{color:'#726D6D', fontStyle:'normal', fontSize:36, textAlign:'center'}}>LOGIN</Text>

<TextInput onChangeText={email=>setEmail(email)} style={styles.input} placeholder='Username' flat="focused" activeOutlineColor='blue'/>

 <TextInput onChangeText={password=>setPassword(password)} style={styles.input} placeholder='Password'/>

 <TouchableOpacity onPress={signin} style={styles.btn1}><Text style={styles.text}>LOGIN</Text></TouchableOpacity>

 <TouchableOpacity onPress={()=>navigation.navigate('forgotpassword')}><Text style={{color:'#726D6D', marginTop:20, textAlign:'center'}}>Forgot password?</Text></TouchableOpacity>

 <Text style={{ marginTop:20, textAlign:'center'}}>Or</Text>

 <TouchableOpacity onPress={()=>navigation.navigate('packages')} style={styles.btn2}><Text style={{color:'#726D6D',
fontSize:22,

marginTop:10}}>SIGN UP</Text></TouchableOpacity>
        </View>
      </ImageBackground>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
container:{
  justifyContent:'center',
  alignItems:'center',
},

input:{
  justifyContent:'center',
  marginLeft:30,
backgroundColor:'#D8D6D6',
borderRadius:30,
height:60,
width:300,
paddingLeft:15,
marginTop:20
},

btn1:{
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

btn2:{
  textAlign:'center',
  justifyContent:'center',
  marginLeft:120,
  backgroundColor:'#181752',
  color:'#726D6D',
  width:120,
  height:60,
  marginTop:20,
  borderRadius:30,
  paddingLeft:15,
  paddingBottom:9,
},

text:{
  color:'#726D6D',
  fontSize:22,
  justifyContent:'center',
  marginTop:10
}
});