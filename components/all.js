import React from "react";
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
import secondlogo from "./images/secondlogo.png";
import reminder from "./images/reminders.png";
import search from "./images/search.png";
import user from "./images/user.png";
import math from "./images/math.webp";
import { Video, AVPlaybackStatus } from "expo-av";
import { db } from "../firebase/firebaseconfig";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { auth } from "../firebase/firebaseconfig";
import VideosUI from "./VideosUI";
import { collection, addDoc, getDocs } from "firebase/firestore";
import SearchModal from "./SearchModal";
import { Chip } from 'react-native-paper';
import { doc, getDoc } from "firebase/firestore";



export default function All({ navigation }) {

const [videos, setVideos] = React.useState([]);
const [mathVideos,setMathVideos]=React.useState([]);
const route = useRoute();
const [visible, setVisible] = React.useState(false);
const [url, setUrl] = React.useState("");
const video = React.useRef(null);
const [status, setStatus] = React.useState({});
let screenWidth = Dimensions.get('window').width
let screenHeight = Dimensions.get('window').height
const [videoType,setVideoType]=React.useState(null)
const [showSearchBar,setShowSearchBar]=React.useState(false);
const [chipSelected,setChipSelected]=React.useState(false)



//This is for calling the getVideos function 
  React.useEffect(() => {
    getVideos();
  }, []);


  //Getting videos from cloudstore and passing em to object
  const getVideos = async () => {
    const docRef = doc(db, "Users", "SF");
   const docSnap = await getDoc(docRef);

    try {
      const querySnapshot = await getDocs(collection(db, "Hacks"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(data);
      setVideos(data);
      console.log(videos);
    } catch (error) {}
  };

function SearchBar(){
  
if(showSearchBar==false){
  return( 
    <>

  <View> 
    <Icon onPress={()=>setShowSearchBar(true)}
   style={{marginTop:83}}
     ml="2"
     size="7"
     color="#181752"
     as={<Ionicons name="search" />}
   /></View>
   </>
  )
}
else{return(
  <Input placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
)

} 



}


  function showModal() {
    setVisible(true);
  }
const hideModal = () => {
    setVisible(false);
  };
  const  nextpage  =((video)=>{
    navigation.navigate('Video',{video})
  })


function ViewVideos(){
  if(videoType==null){
    return  <VideosUI videos={videos} horizontal={false}  />
  }
  else if(videoType=="All"){
    return  <VideosUI videos={videos} horizontal={false}  />
  }
  else if(videoType=="Mathematics"){
    return  <VideosUI videos={videos.filter(vid=>vid.subject=="Mathematics")} horizontal={false}  />
  }
  else if(videoType=="Mathematics Literacy"){
    return  <VideosUI videos={videos.filter(vid=>vid.subject=="Mathematics Literacy")} horizontal={false}  />
  }
  else if(videoType=="Physical Sciences"){
    return  <VideosUI videos={videos.filter(vid=>vid.subject=="Physical Sciences")} horizontal={false} />
  }
  else if(videoType=="Accounting"){
    return  <VideosUI videos={videos.filter(vid=>vid.subject=="Accounting")} horizontal={false}  />
  }
  
}
  return (
    <ScrollView showsVerticalScrollIndicator={false} justifyItems='center'>
      <ImageBackground
        style={{ flex: 1, alignSelf:'stretch' }}
        source={require("./images/background.jpg")}
      >
       <View style={{marginLeft:100 }}>
       <Box style={styles.navbar}>
    <View>
      <Image source={secondlogo} alt="" style={styles.logoimage} />
    </View>
   
  </Box>
      </View>

<ScrollView horizontal={true}>

       
        <TouchableOpacity style={styles.btn} onPress={()=>setVideoType('All')}>
        <Chip mode='outlined'  onPress={()=>setVideoType('All')} style={{backgroundColor:'#181752'}} textStyle={{color:'white'}}>All</Chip>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>setVideoType('Accounting')}>
             <Chip mode='outlined' onPress={()=>setVideoType('Accounting')} style={{backgroundColor:'#181752'}} textStyle={{color:'white'}}>Accounting</Chip>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}  onPress={()=>setVideoType('Mathematics')}>
          <Chip mode='outlined' onPress={()=>setVideoType('Mathematics')} style={{backgroundColor:'#181752'}} textStyle={{color:'white'}}>Mathematics</Chip>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
          <Chip mode='outlined' onPress={()=>setVideoType('Mathematics Literacy')} style={{backgroundColor:'#181752'}} textStyle={{color:'white'}}>Mathematics Literacy</Chip>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
          <Chip mode='outlined' onPress={()=>setVideoType('Physical Sciences')} style={{backgroundColor:'#181752'}} textStyle={{color:'white'}}>Physical Sciences</Chip>
          </TouchableOpacity>
        
        </ScrollView>
      
<ViewVideos/>
      </ImageBackground>
    </ScrollView>
  );
}


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
    marginTop: 5,
    marginLeft: 30,
  },

  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
});
