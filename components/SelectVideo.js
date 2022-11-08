import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Platform,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import { Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { Video, AVPlaybackStatus } from "expo-av";
import secondlogo from "./images/secondlogo.png";
import { Icon, ScrollView } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { auth, storage , db} from "../firebase/firebaseconfig";
import { getStorage, uploadBytes, updateMetadata,getDownloadURL,doc,getDoc,getDocs } from "firebase/storage";
import "firebase/storage";
import { RadioButton } from "react-native-paper";
import {
  Select,
  CheckIcon,
  FormControl,
  WarningOutlineIcon,
} from "native-base";
import { collection, addDoc,setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable } from "firebase/storage";
import { async } from "@firebase/util";


export default function ImagePickerExample({navigation}) {
  const [image, setImage] = useState(null);
  const video = React.useRef(null);
  const [text, setText] = React.useState();
  const [description,setDescription]=React.useState('')
  const [status, setStatus] = React.useState({});
  const [testVideo, setTestVideo] = useState(null);
  const [subject, setSubject] = React.useState("");
  const [time,setTime]=React.useState('')
const [publisherName,setPublisherName]=React.useState('')

  const [cc, setCC] = React.useState("");

  useEffect(()=>{

    
  },[]);




  const func=async ()=>{
    const storage=getStorage();
    const reference=ref(storage,ref1);
    await getDownloadURL(reference).then((x)=>{

    
      setCC(x);
    })
  }
 

const getDATE=()=>{
  var date = new Date().getDate(); //Current Date
  var month = new Date().getMonth() + 1; //Current Month
  var year = new Date().getFullYear(); //Current Year
  var hours = new Date().getHours(); //Current Hours
  var min = new Date().getMinutes(); //Current Minutes
  var sec = new Date().getSeconds(); //Current Seconds
setTime(date+month+year);
}

  const UploadToFirebase = async () => {
    const storage = await getStorage(); //the storage itself
    const ref1 = await ref(storage, `${subject}` + `/` + `${text}`); //how the imag
    
    const img = await fetch(testVideo);
    const bytes = await img.blob();

    await uploadBytes(ref1, bytes); //upload images
    const reference=ref(storage,`${subject}/${text}`);
    await getDownloadURL(reference).then((x)=>{
      console.log(x)
      setCC(x);
    })
    await addDoc(collection(db, "Hacks"), {
        videoTitle: text,
        description:description,
        subject: subject,
        video: testVideo,
        uri:cc,
  
      })
        .then(async () => {
          alert("Save successfully");
          await addDoc(collection(db, "Hacks"+ auth.currentUser.uid), {
            videoTitle: text,
            description:description,
            subject: subject,
            video: testVideo,
            uri:cc,
            publisherName:publisherName
       

          })
          navigation.navigate('all')
         
        })
        .catch((error) => {
         console.log(error.message)
       
          // Updated metadata for 'images/forest.jpg' is returned in the Promise
    
      
    })
      
 
   
}


  const pickVideo = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    setTestVideo(result.uri);
   
  };
  



  return (
    <ScrollView>
      <ImageBackground
        style={{
          flex: 1,
          width: 390,
          height: 800,
          alignItems: "center",
          justifyContent: "center",
        }}
        source={require("./images/background.jpg")}
      >
        <View>
          <Image source={secondlogo} style={styles.logoimage} />
        </View>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: `${testVideo}`,
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
          <TextInput
            style={{
              color: "grey",
              margin: 20,
              alignContent: "center",
              borderColor: "black",
              borderWidth: 1,
              width: 300,
              height: 40,
              backgroundColor: "#EAEAEA",
              borderColor: "#726D6D",
            }}
            placeholder="Caption your video"
            onChangeText={(newText) => setText(newText)}
          />
          <TextInput
            style={{
              color: "grey",
              margin: 20,
              alignContent: "center",
              borderColor: "black",
              borderWidth: 1,
              width: 300,
              height: 90,
              backgroundColor: "#EAEAEA",
            }}
            placeholder="Description"
            flat="focused"
            activeOutlineColor="blue"
            onChangeText={(newText) => setDescription(newText)}
          />
          <Text>Publisher name</Text>
          <TextInput
            style={{
              color: "grey",
              margin: 20,
              alignContent: "center",
              borderColor: "black",
              borderWidth: 1,
              width: 300,
              height: 40,
              backgroundColor: "#EAEAEA",
              borderColor: "#726D6D",
            }}
            placeholder="Caption your video"
            onChangeText={(newText) => setText(newText)}
          />


          <FormControl w="3/4" maxW="300" isRequired isInvalid>
            <Select
              selectedValue={subject}
              minWidth="200"
              accessibilityLabel="Choose Subject"
              placeholder="Choose Subject"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1"
              onValueChange={(itemValue) => setSubject(itemValue)}
            >
              <Select.Item label="Mathematics" value="Mathematics" />
              <Select.Item
                label="Mathematics Literacy"
                value="Mathematics Literacy"
              />
              <Select.Item label="Accounting" value="Accounting" />
              <Select.Item
                label="Physical Sciences"
                value="Physical Sciences"
              />
            </Select>
            {subject == null ? (
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Please make a selection!
              </FormControl.ErrorMessage>
            ) : (
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              ></FormControl.ErrorMessage>
            )}
          </FormControl>
          <TouchableOpacity
            onPress={pickVideo}
            style={{
              color: "#726D6D",
              width: 120,
              height: 60,
              marginBottom: 10,
            }}
          >
            <Icon
              ml="2"
              size="20"
              color="#181752"
              as={<Ionicons name="add-circle-outline" />}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={UploadToFirebase}
            style={{
              backgroundColor: "#181752",
              color: "#726D6D",
              width: 120,
              marginTop: 10,
              height: 60,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 22,
                marginLeft: 20,
                marginTop: 10,
              }}
            >
              Upload
            </Text>
          </TouchableOpacity>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ECF0F1",
  },
  video: {
    alignSelf: "stretch",
    height: 100,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
