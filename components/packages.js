import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity,  Dimensions } from 'react-native';
import Constants from 'expo-constants';
import background from './images/background.jpg'
import logo from './images/logo.png'



 export default function Packages({navigation}){

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

<Text style={{color:'#726D6D', fontStyle:'normal', fontSize:36, textAlign:'center'}}>Packages</Text>

 <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Signup')}><Text style={styles.text}>Free</Text>
 <Text style={{color:'#ffff', fontSize:16, marginLeft:60 }}>You get five free videos</Text>
 </TouchableOpacity>
 
 <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('SignupExpert')}><Text style={styles.text}>Expert</Text>
 <Text style={{color:'#ffff', fontSize:16, marginLeft:60 }}>Accredeble uploader</Text>
 </TouchableOpacity>
     
        </View>
      </ImageBackground>
      
   

  


    
  )
}

const styles = StyleSheet.create({


btn:{
  backgroundColor:'#181752',
  color:'#ffff',
  width:300,
  height:100,
  marginTop:20,
  marginLeft:40,
},

text:{
  color:'#ffff',
  fontSize:34,
  marginLeft:100,
  marginTop:5,
}
  
  

});