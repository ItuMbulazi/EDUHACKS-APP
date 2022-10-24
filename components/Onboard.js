import { ScrollView } from 'native-base'
import React, { Component } from 'react'
import { View, Text, Dimensions, ImageBackground, Image, Button } from 'react-native'


export default function Onboard({navigation}) {

    let screenWidth = Dimensions.get('window').width
    let screenHeight = Dimensions.get('window').height

    return (
      <ImageBackground source={require('./images/background.jpg')}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>

          <View style={{ flex: 1, marginTop: 20, width: screenWidth, height: screenHeight, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('./images/logo1.png')} style={{marginBottom: 100}} />
          </View>

          <View style={{ flex: 1, marginTop: 20, width: screenWidth, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('./images/student.png')} style={{width: 350, height: 290,}}/>
            <Text style={{ fontSize: 20, padding: 15, color: 'white', textAlign: 'center', }}>Are you struggling with Maths, Maths Lit, Physics and Accounting</Text>
          </View>

          <View style={{ flex: 1, marginTop: 20, width: screenWidth, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('./images/Onlinelesson.png')} style={{width: 300, height: 290,}}/>
            <Text style={{ fontSize: 20, padding: 15, color: 'white', textAlign: 'center', }}>With the EduHacks app, now students can access educational hacks online at ther comfort.</Text>
          </View>

          <View style={{ flex: 1, marginTop: 20, width: screenWidth, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('./images/logo.png')} style={{width: 350, height: 350}}/>
            <Text style={{ fontSize: 20, padding: 15, color: 'white', textAlign: 'center', marginBottom: 50}}>No more struggling with Mathematics, Mathematics Literacy, Accounting, and physics.</Text>
            <Button title='get started' style={{marginBottom: 100}} onPress={() => navigation.navigate('login')}></Button>
          </View>

        </ScrollView>
      </ImageBackground>
    )
  
}