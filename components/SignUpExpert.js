import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import logo from './images/logo.png'
import * as ImagePicker from 'expo-image-picker';


import { ScrollView } from 'native-base';


 export default function SignUpExpert({navigation}){


  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => false,
    });
  }, [navigation]);

  
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

<TextInput style={styles.input} placeholder='Username'/>

<TextInput  style={styles.input} placeholder='Email'/>

<TextInput  style={styles.input} placeholder='Phone number'/>

<TextInput  style={styles.input} placeholder='Password'/>

 <TextInput  style={styles.input} placeholder='Confirm Password'/>

 
 <TouchableOpacity style={styles.crendentialbtn} onPress={pickImage }><Text style={styles.text} >CREDENTIALS</Text></TouchableOpacity>
<TextInput style={{width:50,height:10}}>{pickImage}</TextInput>

 <TouchableOpacity style={styles.btn  } onPress={()=>navigation.navigate('Explore')}><Text style={styles.text} >NEXT</Text></TouchableOpacity>
 

        
 
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
  marginLeft:-5,
  
 } 
  

});