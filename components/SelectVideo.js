import React, { useState, useEffect } from 'react';
import { Image, View, Platform , StyleSheet,TextInput ,ImageBackground,TouchableOpacity,Text, Dimensions}  from 'react-native';
import {Button} from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import { Video, AVPlaybackStatus } from 'expo-av';
import secondlogo from './images/secondlogo.png'
import {Icon} from 'native-base'
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {storage} from '../firebase/firebaseconfig'
import { getStorage, uploadBytes } from "firebase/storage";
import {
  ref,
  uploadBytesResumable 
} from "firebase/storage";

export default function ImagePickerExample() {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => false,
    });
  }, [navigation]);

  
  const [image, setImage] = useState(null);
   const video = React.useRef(null);
   const [text,setText] = React.useState({});
  const [status, setStatus] = React.useState({});
  const [testVideo, setTestVideo] =useState(null)


const UploadToFirebase=()=>{
  const storage = getStorage();
  const storageRef = storage.ref(`files/${testVideo.name}`).put(testVideo);

  const uploadTask = uploadBytesResumable(storageRef, 'name');

  
  // 'file' comes from the Blob or File API
  uploadBytes(storageRef, 'image').then((snapshot) => {
   console.log('uploaded success')
  })
}







  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const pickVideo = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setTestVideo(result.uri);
    }
  };

  let screenWidth = Dimensions.get('window').width
  let screenHeight = Dimensions.get('window').height

  return (

    <ImageBackground style={{ flex: 1, width: screenWidth, height: screenHeight, justifyContent: 'center', alignItems: 'center' }} source={require('./images/background.jpg')}>
       <View>

<Image source={secondlogo} style={styles.logoimage} />


</View>

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

<Video
        ref={video}
        style={styles.video}
        source={{
          uri:testVideo,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
<TextInput

style={{color:'grey',margin: 20,alignContent:'center',borderColor:'black',borderWidth:1,width:300,height:40,backgroundColor:'#EAEAEA',borderColor:'#726D6D'}}
    
        placeholder="Caption your video"
        onChangeText={newText => setText(newText)}

      />
<TextInput
        style={{color:'grey',margin: 20,alignContent:'center',borderColor:'black',borderWidth:1,width:300,height:90,backgroundColor:'#EAEAEA'}}
        placeholder="Description"
        flat="focused" activeOutlineColor='blue'
        onChangeText={newText => setText(newText)}
   
      />
       <TouchableOpacity  onPress={pickVideo} style={{
  color:'#726D6D',
  width:120,
  height:60,marginBottom:10}} >
    <Icon  ml="2" size="20" color="#181752" as={<Ionicons name="add-circle-outline" />} />


  </TouchableOpacity>
   <TouchableOpacity  onPress={UploadToFirebase} style={{ backgroundColor:'#181752',
  color:'#726D6D',
  width:120,marginTop:10,
  height:60,}} ><Text style={{color:'white',fontSize:22,marginLeft:20,
  marginTop:10}}>Upload</Text></TouchableOpacity>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
     
    </View>

    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
  },
  video: {
    alignSelf: 'stretch',
    height:200,
   
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});









