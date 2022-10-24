import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import All from './components/all'
import Maths from './components/maths'
import MathLit from './components/mathlit'
import Physics from './components/physics'
import Accounting from './components/accounting'
import Profile from './components/profileSingleAndGroup'
import BtmNav from './components/btmNav'
import Login from './components/login'
import Signup from './components/signup'
import VideoClicked from './components/videoClicked';

import VideoUpload from './components/VideoUpload'
import Onboard from './components/Onboard'

// You can import from local files
import AssetExample from './components/AssetExample';
import  Settings  from './components/SettingsPage'
import Explore from './components/VideosHome'
import SignUpExpert from './components/SignUpExpert';
import Packages from './components/packages';
import Upload from './components/SelectVideo'
import Btm from './components/btmNav'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


const Stack = createNativeStackNavigator();

export default function App() {

  
  return (
    <View style={styles.container}>
      <NativeBaseProvider>

      <NavigationContainer>

       <Stack.Navigator>
       <Stack.Screen name='Onboard' component={Onboard}/>
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name='packages' component={Packages}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name='upload' component={Upload}/>
        <Stack.Screen name="SignupExpert" component={SignUpExpert}/>
          <Stack.Screen name="all" component={All} />
          <Stack.Screen name="maths" component={Maths} />

          <Stack.Screen name="mathlit" component={MathLit} />
          <Stack.Screen name="physics" component={Physics} />
          <Stack.Screen name="accounting" component={Accounting} />
          <Stack.Screen name="videoclicked" component={VideoClicked} />
          <Stack.Screen name="Profile" component={Profile}/>
          <Stack.Screen name="Settings" component={Settings}/>
          <Stack.Screen name="Explore" component={Explore}/>
          <Stack.Screen name="bottom" component={Btm}/>
          <Stack.Screen name="VideoUpload" component={VideoUpload}/>
         
        </Stack.Navigator>
     
      </NavigationContainer>
           
          </NativeBaseProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});