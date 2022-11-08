import React from 'react'
import { Video, AVPlaybackStatus } from 'expo-av';
import { db } from "../firebase/firebaseconfig";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Avatar } from 'react-native-paper';




import {
    Box,
    Heading,
    AspectRatio,
    Image,
    Text,
    Center,
    HStack,
    Stack,
    NativeBaseProvider,
    VStack,
    Input,
    Icon,
    Button,
    PresenceTransition,
  } from "native-base";
import {
    View,
    TextInput,
    ImageBackground,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Pressable,
    ScrollView,
    Modal,
  } from "react-native";

function VideosUI(props,{navigation}) {
    
  const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
  return (

   <ScrollView horizontal={props.horizontal}>
     {props.videos.map((videos,index) => (
       <TouchableOpacity >
                     <Box   key={index}
                     style={{marginBottom:10}}
                       maxW="80"
                       rounded="lg"
                       overflow="hidden"
                       borderColor="coolGray.200"
                       borderWidth="1"
                       _dark={{
                         borderColor: "coolGray.600",
                         backgroundColor: "primary.900",
                         height: "auto",
                       }}
                       _web={{
                         shadow: 2,
                         borderWidth: 0,
                       }}
                       _light={{
                         backgroundColor: "muted.300",
                       }}
                     >
                       <Box>
                         <AspectRatio w="100%" ratio={4/ 3}>
                                  <Video
                            ref={video}
                            style={styles.video}
                            source={{
                              uri:videos.uri,
                            }}
                            useNativeControls
                            resizeMode="cover"
                            isLooping
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                          />
                         </AspectRatio>
                         <Center
                           bg="#181752"
                           _dark={{
                             bg: "violet.400",
                           }}
                           _text={{
                             color: "warmGray.50",
                             fontWeight: "700",
                             fontSize: "xs",
                           }}
                           position="absolute"
                           bottom="0"
                           px="3"
                           py="1.5"
                         >
                         
                           {videos.subject}
                         </Center>
                       </Box>
                       <Stack p="4" space={3}>
                         <Stack space={2}>
                             <TouchableOpacity onPress={()=>props.navigation}>
                             <Heading size="md" ml="-1" >
                             <Avatar.Text size={30} label={'xd'} />
                             {videos.publisherName}
                             {videos.videoTitle}
                           </Heading>
                             </TouchableOpacity>
                         </Stack>
                         <Text fontWeight="400">{videos.description}</Text>
                       </Stack>
                     </Box>
                     </TouchableOpacity>
                   ))}</ScrollView>
  
  )
}

export default VideosUI

const styles = StyleSheet.create({
    navbar: {
      flexDirection: "row",
      marginTop: 30,
      width: 300,
    },
  
    logoimage: {
      marginLeft: 15,
      height: 70,
      width: 150,
    },
  
    btn: {
      padding: 18,
      color: "white",
    },
  
    btntext: {
      fontWeight: "bold",
      fontSize: 16,
    },
  
    optionBtn: {
      flexDirection: "row",
      marginTop: 50,
      marginLeft: 30,
    },
  
    video: {
      alignSelf: "center",
      width: 320,
      height: 200,
    },
  });
  