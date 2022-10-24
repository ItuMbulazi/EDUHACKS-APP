import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider, Pressable } from "native-base";
import { View, TextInput, ImageBackground,
    StyleSheet, Dimensions,TouchableOpacity,ScrollView } from 'react-native';
import secondlogo from './images/secondlogo.png'
import reminder from './images/reminders.png'
import search from './images/search.png'
import user from './images/user.png'
import math from './images/math.webp'
import { Video, AVPlaybackStatus } from 'expo-av';

export default function MathsLit({navigation}) {

      const AllPage =()=>{
navigation.navigate('all')
  }

    const MathsPage =()=>{
navigation.navigate('maths')
  }

    const MathLitPage =()=>{
navigation.navigate('mathlit')
  }

    const PhysicsPage =()=>{
navigation.navigate('physics')
  }

  const AccountingPage =()=>{
    navigation.navigate('accounting')
      }
    


  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  let screenWidth = Dimensions.get('window').width
  let screenHeight = Dimensions.get('window').height

  return (

    <ScrollView>

  

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


      <ScrollView horizontal={true}>
        

        <Box style={styles.optionBtn}>
        <TouchableOpacity style={styles.btn}><Text style={styles.btntext} onPress={AllPage}>All</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn}><Text style={styles.btntext} onPress={MathsPage}>Maths</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn}><Text style={styles.btntext} onPress={MathLitPage}>Maths Lit</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn}><Text style={styles.btntext} onPress={PhysicsPage}>Physics</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn}><Text style={styles.btntext} onPress={AccountingPage}>Accounting</Text></TouchableOpacity>
      </Box>

      </ScrollView>

         <Text style={{color:'#726D6D', fontSize:16, marginTop: 20, marginLeft:20, marginBottom:20, }}>Explore</Text>


<Box alignItems="center">


      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700", height:'auto', }} _web={{
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
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
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

        
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              Financial Maths
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              Algebra in 3min.
            </Text>
          </Stack>
         
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>


         <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700",  height:'auto', 
    }} _web={{
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
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
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
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              Charts
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              Simplified for gr12
            </Text>
          </Stack>
         
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>


       <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700",  height:'auto', marginBottom:100
    }} _web={{
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
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
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
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              Time & Speed 
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              All triangles
            </Text>
          </Stack>
      
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>

</Box>


</ImageBackground>
  
  </ScrollView>


  );
}

   


const styles = StyleSheet.create({

  navbar:{
    flexDirection:'row',
    marginTop:30,
    width:300
    
  },

  logoimage:{
     marginLeft: 15,
     height: 70,
    width: 150,
    

  },

  btn: {
    padding: 18,
    color: 'white',
   
  },

  optionBtn: {
    flexDirection:'row',
    marginTop: 50,
    marginLeft:30,
  },

  btntext:{
   fontWeight:'bold' ,
   fontSize: 16,
   

  },

   video: {
    alignSelf: 'center',
    width: 450,
    height: 200,
  },
   
});