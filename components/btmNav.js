
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {StyleSheet, View} from 'react-native'
import { Ionicons, MaterialIcons } from "@expo/vector-icons";



import All from './all'

import Profile from './profileSingleAndGroup'
import Upload from './SelectVideo'

const Tab = createBottomTabNavigator();

function BottomNav() {
  return (

    <View style={styles.container}>
   
        
    <Tab.Navigator tabBarOptions={{ style:{backgroundColor:"red"}  }
   
    }>
      <Tab.Screen name="Home" component={All} 
       options={{
        headerShown: false,
        tabBarLabel: 'Home', 
        tabBarIcon: ({ color }) => (
          <Ionicons name='home-outline'size={30} color={color} />
        ),
      }}
      />

      <Tab.Screen name="Music" component={Upload} 
      options={{
        headerShown:false,
        tabBarLabel: 'Upload',
        tabBarIcon: ({ color }) => (
          <Ionicons name="add-circle-outline" color={color} size={30}  />
       
        ),
      }}
     
      />

<Tab.Screen name="Emotions" component={Profile} 
      options={{
        headerShown:false,
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <Ionicons name="person-circle-outline" color={color} size={30} />
       
       
        ),
      }}
      />





    </Tab.Navigator>
    
    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    padding: 8,
    height:'100%',
  }, 
  
  plus: {
        width:40,
        height:40,
        backgroundColor:'#9FC9F3',
        borderRadius:20,
     
      },

    });

export default BottomNav;
