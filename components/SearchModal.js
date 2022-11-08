import React from 'react'
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
  import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

function SearchModal(props) {
  return (
    <Modal visible={props.visible} onDismiss={props.hideModal}>
    <VStack
      my="4"
      space={5}
      w="100%"
      maxW="300px"
      divider={<Box px="2"></Box>}
    >
      <VStack w="100%" space={5} alignSelf="center">
        <HStack>
          <Icon
            onPress={props.hideModal}
            ml="2"
            size="6"
            color="gray.400"
            as={<Ionicons name="md-arrow-back" />}
          />
          <Input
            placeholder="Search"
            variant="filled"
            width="100%"
            borderRadius="10"
            py="1"
            px="2"
         
          
            InputLeftElement={
              <Icon
                ml="2"
                size="4"
                color="gray.400"
                as={<Ionicons name="ios-search" />}
              />
            }
            InputRightElement={
              <Icon
                ml="2"
                size="4"
                color="gray.400"
                as={<Ionicons name="md-close" />}
              />
            }
          />
        </HStack>
      </VStack>
    </VStack>
  </Modal>
  )
}

export default SearchModal