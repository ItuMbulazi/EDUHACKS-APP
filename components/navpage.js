import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import All from './all'
import Maths from './maths'
import MathLit from './mathlit'
import Physics from './physics'
import Profile from './profileSingleAndGroup'
import BtmNav from './btmNav'
import Login from './login'
import Signup from './signup'
import Ionicons from 'react-native-vector-icons/Ionicons';


// You can import from local files
import AssetExample from './AssetExample';
import  Settings  from './SettingsPage'
import Explore from './VideosHome'
import SelectVideo from './SelectVideo'


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


const Stack = createNativeStackNavigator();

export default function App() {

  function Home() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="all" component={All} />
        <Stack.Screen name="maths" component={Maths} />
   
        <Stack.Screen name="mathlit" component={MathLit} />
        <Stack.Screen name="physics" component={Physics} />
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Settings" component={Settings}/>
        <Stack.Screen name="Explore" component={Explore}/>
       
      </Stack.Navigator>
    );
  }

  function Upld(){
    return(
      <Stack.Navigator   screenOptions={{headerShown: false}}>
      <Stack.Screen name="all" component={SelectVideo} />
    </Stack.Navigator>
    )

  }
  function Prof(){
    return(
      <Stack.Navigator>
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
    )

  }
  const Tab = createBottomTabNavigator();
  const homeName = "Home";
const detailsName = "Add";
const settingsName = "Profile";
  return (
    <View style={styles.container}>
      <NativeBaseProvider>

      <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'add' : 'add-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#181752',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={detailsName} component={Upld}/>
        <Tab.Screen name={settingsName} component={Prof}/>
  

      </Tab.Navigator>

      
     
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