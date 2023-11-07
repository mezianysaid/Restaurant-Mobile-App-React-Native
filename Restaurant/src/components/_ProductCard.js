import { StyleSheet, Text, View , TouchableOpacity,Alert,ScrollView} from 'react-native'
import React,{useState} from 'react'
import { Avatar, Button, Card, Portal,Modal,List} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import _AddForm from './_AddForm';
const myColor="#0E94A0"
const _ProductCard = ({item}) => {
    const navigation = useNavigation()
    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    
  
  return (
    <View style={styles.container}> 
     <_AddForm _visible={visible} _setVisible={setVisible}/>
      <Card>
        <TouchableOpacity onPress={()=> navigation.navigate("ProductDetails", {item})}>
        <Card.Title title={item.title} titleNumberOfLines={1} />
        </TouchableOpacity>
           <TouchableOpacity onPress={()=> navigation.navigate('ProductDetails', {item})}> 
            {/* <Card.Content> */}
            {/* <Text variant="titleLarge">Card title</Text>           */}
            <Card.Cover width={40} source={item.image} />
            
            {/* </Card.Content> */}
           </TouchableOpacity>

            <Card.Actions>          

                <Button  style={styles.btnprice}>
                    <Text style={styles.price} numberOfLines={1}>${item.price}</Text>
                </Button>
                <TouchableOpacity onPress={()=>showModal()}>
                      <Button buttonColor={myColor}>
                      <MaterialIcons name='add-circle-outline' size={21} color='white'/>
                      </Button>        
                </TouchableOpacity>

        </Card.Actions>
  </Card>
    </View>
  )
}

export default _ProductCard

const styles = StyleSheet.create({
    container:{
        margin:5,      
        flex:1

    },
    price:{
        color:myColor,
        fontWeight:'500',
        fontSize:20,
        marginHorizontal:7
        // webkit-line-clamp:1
    },
    btnprice:{       
        maxWidth:100

    }
   
})