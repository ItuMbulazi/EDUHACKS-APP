import React,{useState} from 'react';
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';
import { Text, View, TextInput, ImageBackground, 
    StyleSheet, Dimensions ,Image,TouchableOpacity,Pressable,ScrollView,Modal } from 'react-native';
    import {Button, Card, Title, Paragraph,Portal,Provider} from 'react-native-paper'




const menu= ({navigation}) => {

  
  
  const [visible, setVisible] = React.useState(false);


  const showModal = () => {
    setVisible(true);
   
  }
  const hideModal = () => {setVisible(false);

  }
  const containerStyle = {backgroundColor: 'white', padding: 20};


  const [cart,setCart] = useState([]);

  const Order= (() =>{
  
 
    try {
        const docRef = addDoc(collection(db, "users"), {
          username:username,
         order:item.name,
          price:item.price,
        
        });
        console.log("Document written with ID: ", docRef.id);
    }
       catch (e) {
        console.error("Error adding document: ", e);
       }
    })
  return (
    <View>
      <ScrollView>
        <Title style={{marginLeft:200}}>Menu</Title>
        <View >
          
              <View style={styles.box} > 
              {images.map((item) => (
              
              <Card style={{borderRadius:20,height:200}} >
                <TouchableOpacity onPress={showModal}>
                <Card.Cover source={item.image} />
                </TouchableOpacity>
              
               
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                  <Title>{item.name}</Title>
          <Image key={item.id} source={item.image} style={{marginRight:100}}/>
          <Button onPress={hideModal}>Add to cart</Button>
        </Modal>
          
          </Card>
              ))}
 
              
            </View>
      </View>
    
      </ScrollView>
    </View>
  

  
  );
};
  
export default menu;
  
const styles = StyleSheet.create({

    container :{
        alignContent:'center',
        margin:37
    },

 
  imgTop:{
    width:100,
    height:150,
borderRadius:10,
  marginTop:0,
  margin:5
   
  },
  imgBottom:{
    width:100,
    borderRadius:10,
    height:150,
    margin:5
 
  
   
  },
  text:{
 
    color:"red"
  },
  box:{

    borderRadius:20,
    marginBottom:20,
    marginTop:10,
    margin:15,
    width:300,
  
    
     

  }
});