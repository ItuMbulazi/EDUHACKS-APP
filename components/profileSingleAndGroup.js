import React from 'react'
import {Button, Card,Title,Text} from 'react-native-paper'
import {ScrollView,StyleSheet,View,ImageBackground,Image} from 'react-native'
import { auth } from '../firebase/firebaseconfig'
import { getAuth, signOut } from "firebase/auth";




function profileSingleAndGroup({navigation}) {
 
  const Signout=()=>{}
 
  return (
    <ImageBackground style={{flex: 1, width: 390, height: 800}} >
    <ScrollView>
       
        <Image style={{marginLeft:100,borderRadius:200,width:200,height:200,marginTop:60}} source={require('./images/pp.jpg')}/>
        <Text>{auth.currentUser.email}</Text>
        <Title style={{marginLeft:180}}>Profile</Title>
        <Button textColor='black' icon='help-circle' mode='outlined' style={styles.btn}>Help and feedback</Button>
        <Button icon='update' mode='outlined' style={styles.btn}>Update details</Button>
        <Button icon='cog' mode='outlined' style={styles.btn} onPress={()=>navigation.navigate('Settings')}>Settings</Button>
        <Button icon='logout' mode='outlined' style={styles.btn} onPress={signOut}>Signout</Button>

</ScrollView>
</ImageBackground>
  )
}
  const styles=StyleSheet.create({
    btn:{
      
        alignSelf:'stretch',
        justifyContent:'center',
        alignItems:'center',
        height:50,
        color:'black'
    }
  })


export default profileSingleAndGroup