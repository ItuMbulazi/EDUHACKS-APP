import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import All from "./components/all";
import Maths from "./components/maths";
import MathLit from "./components/mathlit";
import Physics from "./components/physics";
import Profile from "./components/profileSingleAndGroup";
import BottomNav from "./components/btmNav";
import Login from "./components/login";
import Signup from "./components/signup";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message

// You can import from local files
import AssetExample from "./components/AssetExample";
import Settings from "./components/SettingsPage";
import Explore from "./components/VideosHome";
import SelectVideo from "./components/SelectVideo";
import { auth } from "./firebase/firebaseconfig";

// or any pure javascript modules available in npm
import { Card } from "react-native-paper";
import { Header } from "react-native/Libraries/NewAppScreen";
import { list } from "firebase/storage";

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function App() {
  const [user, setUser] = React.useState(auth.currentUser);
  const Stack = createNativeStackNavigator();
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  return (
    <View style={styles.container}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator >
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signup" component={Signup} />
            <Stack.Screen name="all" component={BottomNav} setOptions={{headerShown:false}}/>

         
            <Stack.Screen name="maths" component={Maths} />
            <Stack.Screen name="mathlit" component={MathLit} />
            <Stack.Screen name="physics" component={Physics} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Explore" component={Explore} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
