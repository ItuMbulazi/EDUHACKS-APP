import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from "native-base";
import { View, TextInput, ImageBackground,
    StyleSheet, Dimensions,TouchableOpacity,Pressable,ScrollView } from 'react-native';
import secondlogo from './images/secondlogo.png'
import reminder from './images/reminders.png'
import search from './images/search.png'
import user from './images/user.png'
import math from './images/math.webp'
import { Video, AVPlaybackStatus } from 'expo-av';
import { auth, storage , db} from "../firebase/firebaseconfig";
import { getStorage, uploadBytes, updateMetadata,getDownloadURL } from "firebase/storage";
import { ref, uploadBytesResumable } from "firebase/storage";

export default function VideoClicked({route , navigation}) {
const [uri,setUri]=React.useState('')

  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => false,
    });
  }, [navigation]);

  const getURI=async()=>{

    const reference=ref(storage, `${route.params.subject}` + `/` + `${route.params.title}`);
    await getDownloadURL(reference).then((x)=>{
      setUri(x);
    
  
    })
  }
  React.useEffect(() => {
    getURI();
    
  }, []);
  

const vid=`${route.params.uri}`;
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});


  let screenWidth = Dimensions.get('window').width
  let screenHeight = Dimensions.get('window').height 


  return (

    <ScrollView alignItems="center">

  

    <ImageBackground style={{ flex: 1, width: screenWidth, height: screenHeight, justifyContent: 'center', alignItems: 'center' }} source={require('./images/background.jpg')}>



     <Box style={styles.navbar}>

        <View>

          <Image source={secondlogo} style={styles.logoimage} />

        </View>


        <View style={{marginLeft:170, marginTop:-70}}>

        <TouchableOpacity><Image source={reminder} style={{ width: 25, height: 25, marginTop:90, marginLeft:-90}} /></TouchableOpacity>
          <TouchableOpacity><Image source={search} style={{ width: 25, height: 25, marginTop:-25, marginLeft:-40}} /></TouchableOpacity>
          <TouchableOpacity><Image source={user} style={{ width: 25, height: 25, marginTop:-25,  }} /></TouchableOpacity>
           
           
        </View>

      </Box>



<Box style={{alignItems:"center"}}>



      <Box width="100%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700", height:'auto'}} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:vid
        }}
        useNativeControls
        resizeMode="cover"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
           
          </Center>
        </Box>

         <TouchableOpacity style={{backgroundColor:'green', width:30, height:30, borderRadius:30, marginTop:20}}><Image source={user} style={{ width: 30, height: 30,  }} /></TouchableOpacity>

        
        <Stack p="4" space={3} style={{marginLeft:30, marginTop:-50}}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
        {route.params.title}
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
             {uri}
            </Text>
          </Stack>

          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
              {route.params.subject}
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>

</Box>


      <Text style={{color:'#726D6D', fontSize:16, marginTop: 50, marginLeft:20, marginBottom:20, }}>Comments</Text>

      <Box style={{flexDirection:'row'}}>

       <TouchableOpacity style={{backgroundColor:'green', width:30, height:30, borderRadius:30}}><Image source={user} style={{ width: 30, height: 30, }} /></TouchableOpacity>

         <Text style={{color:'#3C4048', height: 25, width:220, fontSize:16, marginLeft:10, }}>Bianca Tlhatsoane</Text>

         
      <Text style={{color:'#726D6D', fontSize:16, marginTop: 20, marginLeft:-220, marginBottom:10, }}>Very simple, thank you</Text>



      </Box>




</ImageBackground>
  
  </ScrollView>


  );
}

   


const styles = StyleSheet.create({

  navbar:{
    flexDirection:'row',
    marginTop:30,
    width:300,
    marginBottom:50,
    
  },

  logoimage:{
     marginLeft: 15,
     height: 70,
    width: 150,
    

  },


   video: {
    alignSelf: 'center',
    width: 400,
    height: 400,
  },
   
});