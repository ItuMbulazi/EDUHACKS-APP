import React from 'react'
import {Button, Card,Title,Text} from 'react-native-paper'
import {ScrollView,StyleSheet,View,ImageBackground,Image, Dimensions, TouchableOpacity} from 'react-native'

function profileSingleAndGroup({navigation}) {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => false,
    });
  }, [navigation]);

  let screenWidth = Dimensions.get('window').width
  let screenHeight = Dimensions.get('window').height

  return (
    <ImageBackground style={{ flex: 1, width: screenWidth, height: screenHeight, justifyContent: 'center', alignItems: 'center' }} >
    <ScrollView>
       
        <Image style={{justifyContent:'center',borderRadius:200,width:200,height:200,marginTop:60}} source={require('./images/pp.jpg')}/>
        <Title style={{marginLeft:70,marginTop:20 }}>Profile</Title>
        
        <Button icon='update' mode='outlined' style={styles.btn} onPress={()=>navigation.navigate('packages')} 
         >Update details</Button>
        
        <Button icon='upload' mode='outlined' style={styles.btn} onPress={()=>navigation.navigate('upload')}>Upload</Button>
        <Button icon='logout' mode='outlined' style={styles.btn} onPress={()=>navigation.navigate('login')} >Signout</Button>
        
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
        color:'black',
        marginTop:20
    }
  })


export default profileSingleAndGroup