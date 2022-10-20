import React from 'react'
import {Button, Card,Title,Text} from 'react-native-paper'
import {ScrollView,StyleSheet,View,ImageBackground,Image} from 'react-native'

function profileSingleAndGroup() {
  return (
    <ImageBackground style={{flex: 1, width: 390, height: 800}} >
    <ScrollView>
       
       
       
        <Button textColor='black' icon='help-circle' mode='outlined' style={styles.btn}>Notifications</Button>
        <Button icon='update' mode='outlined' style={styles.btn}>History and Privacy</Button>
        <Button icon='cog' mode='outlined' style={styles.btn}>Recommended Videos</Button>
        <Button icon='logout' mode='outlined' style={styles.btn}>About</Button>

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