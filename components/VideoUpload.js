import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform , StyleSheet, Dimensions} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import { Video, AVPlaybackStatus } from 'expo-av';

export default function VideoUpload() {
  const [image, setImage] = useState(null);
   const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const [testVideo, setTestVideo] =useState(null)

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
    <View style={{ flex: 1, marginTop: 20, width: screenWidth, height: screenHeight, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
       <Button title="Pick an video" onPress={pickVideo} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

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


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
