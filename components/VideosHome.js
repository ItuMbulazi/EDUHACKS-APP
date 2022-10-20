import * as React from 'react';
import { View, StyleSheet, ScrollView,ImageBackground,TouchableOpacity,Modal } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Avatar ,HStack, NativeBaseProvider,Container, Header, Content, VStack,Thumbnail, Text,
StatusBar,Box,IconButton,Icon} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import {  Heading, AspectRatio, Image, Center,  Stack,Input } from "native-base";
import secondlogo from './images/secondlogo.png'
import reminder from './images/reminders.png'
import search from './images/search.png'
import user from './images/user.png'
import math from './images/math.webp'
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";



export default function ExpertHome({navigation}) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const Videos = [
    {
      id: "0",
      image:
      require('./images/video.mp4'),
      title: "AWESOME hacks",
      duration:'3mins',
      uploader: "Tiisetso",
      views:'1,000,000 views',
      uploadtime:'15h00'
    },
    {
      id: "0",
      image:
      require('./images/video.mp4'),
      title: "math video",
      duration:'2mins',
      uploader: "Bophelo",
      views:'12 views',
      uploadtime:'15h00'
    },
    {
      id: "0",
      image:
      require('./images/video.mp4'),
      title: "OuT OF THIS WORLD TRICK",
      duration:'39sec',
      uploader: "Itu",
      views:'123,000,000,000,000 views',
      uploadtime:'15h00'
    },
    {
      id: "0",
      image:
      require('./images/video.mp4'),
      title: "physics hack",
      duration:'1min',
      uploader: "Bianca",
      views:'250 views ',
      uploadtime:'15h00'
    },
    {
      id: "0",
      image:
      require('./images/video.mp4'),
      title: "MANYAMA MAYAMS MAYAMBELA HACKAMS",
      duration:'5mins',
      uploader: "Manyama",
      views:'1000 views',
      uploadtime:'15h00'
    },
    {
      id: "0",
      image:
      require('./images/video.mp4'),
      title: "AWESOME hacks",
      duration:'3mins',
      uploader: "Tiisetso",
      views:'1,000,000 views',
      uploadtime:'15h00'
    },
    {
      id: "0",
      image:
      require('./images/video.mp4'),
      title: "physics hack",
      duration:'1min',
      uploader: "Bianca",
      views:'250 views ',
      uploadtime:'15h00'
    },
    {
      id: "0",
      image:
      require('./images/video.mp4'),
      title: "OuT OF THIS WORLD TRICK",
      duration:'39sec',
      uploader: "Itu",
      views:'123,000,000,000,000 views',
      uploadtime:'15h00'
    },
    {
      id: "0",
      image:
      require('./images/video.mp4'),
      title: "AWESOME hacks",
      duration:'3mins',
      uploader: "Tiisetso",
      views:'1,000,000 views',
      uploadtime:'15h00'
    },
    {
      id: "0",
      image:
      require('./images/video.mp4'),
      title: "AWESOME hacks",
      duration:'3mins',
      uploader: "Tiisetso",
      views:'1,000,000 views',
      uploadtime:'15h00'
    },
    {
      id: "0",
      image:
      require('./images/video.mp4'),
      title: "AWESOME hacks",
      duration:'3mins',
      uploader: "Tiisetso",
      views:'1,000,000 views',
      uploadtime:'15h00'
    },

  ];
  const [visible, setVisible] = React.useState(false);
  const showModal = () => {
    setVisible(true);
   
  }
  const hideModal = () => {setVisible(false);

  }

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
  return (
< NativeBaseProvider>
    <View style={{height:1000,width:1000}} >
 
     
    <ImageBackground style={{flex: 1, width: 380, }} source={require('./images/background.jpg')}>
    <Box style={styles.navbar}>

<View>

  <Image source={secondlogo} style={styles.logoimage} />

</View>


<View style={{marginLeft:150, marginTop:-70}}>

<TouchableOpacity ><Image source={reminder} style={{ width: 25, height: 25, marginTop:90, marginLeft:-90}} /></TouchableOpacity>
  <TouchableOpacity onPress={showModal} ><Image source={search}  style={{ width: 25, height: 25, marginTop:-25, marginLeft:-40}} /></TouchableOpacity>
  <TouchableOpacity onPress={()=>navigation.navigate('Profile')}><Image source={user} style={{ width: 25, height: 25, marginTop:-25,  }} /></TouchableOpacity>
   
    
  <Modal visible={visible} onDismiss={hideModal} >
  <VStack my="4"  space={5} w="100%" maxW="300px" divider={<Box px="2">
 
</Box>}>
<VStack w="100%" space={5} alignSelf="center">
<HStack><Icon onPress={hideModal} ml="2" size="6" color="gray.400" as={<Ionicons name="md-arrow-back" />} />
<Input placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="2" 
InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} 
InputRightElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="md-close" />} />} 
/>
</HStack>

</VStack>
</VStack>

</Modal>
</View>

</Box>

<ScrollView>
{Videos.map((vid)=>(<>
<Video
  ref={video}
  style={{height:300,alignSelf:'stretch',marginTop:40}}

  source={
 vid.image
  }

  useNativeControls
  resizeMode="contain"
  isLooping
  onPlaybackStatusUpdate={status => setStatus(() => status)}
/>
<View >

<HStack style={{marginLeft:20}} justifyContent="center" space={2}>
      <Avatar bg="green.500" style={{marginRight:20}}source={require('./images/pp.jpg')}>
        AJ
      </Avatar>
      <View style={{flexDirection:'column'}}>
      <View style={{flexDirection:'row'}}>
      <Text style={{fontWeight:'900'}}>{vid.title}</Text>
      <Text>{vid.duration}</Text>
    </View>
    <View style={{flexDirection:'row'}}>
      <Text style={{fontWeight:'500'}}>{vid.uploader}</Text>
      <Text>{vid.views}</Text>
      <Text>{vid.uploadtime}</Text>
      </View>
      </View>
     
    
      </HStack>
  
</View>
 
</> ))}
      
</ScrollView>

      
</ImageBackground>
    </View>
    </ NativeBaseProvider>
  );
}

const styles=StyleSheet.create({
  texts:{
    fontSize:20
  },


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
  
    btntext:{
     fontWeight:'bold' ,
     fontSize: 16,
     
  
    },
    
  
    optionBtn: {
      flexDirection:'row',
      marginTop: 50,
      marginLeft:30,
    },
  
     video: {
      alignSelf: 'center',
      width: 320,
      height: 200,
    },
     

})