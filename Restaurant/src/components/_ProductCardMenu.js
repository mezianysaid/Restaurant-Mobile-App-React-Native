
import { StyleSheet, Text, View,TouchableOpacity,Alert } from 'react-native'
import React ,{useState} from 'react'
import { Avatar, Button, Card, } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import _AddForm from './_AddForm';
const myColor='#0E94A0'
const _ProductCardMenu = ({item}) => {
    const navigation = useNavigation()
    const [visible,setVisible]= useState(false)
    const showModal = () => setVisible(true);
  return (
    <View style={styles.container}>
      <_AddForm _visible={visible} _setVisible={setVisible}/>
       <Card > 
        {/* <Card.Content> */}

        <TouchableOpacity style={styles.card} onPress={()=> navigation.navigate("ProductDetails", {item})}>
        <View style={{maxHeight:70}}>
        <Card.Cover style={styles.image}  source={item.image} />

        </View>
        <View>
          <Text style={styles.title}>{item.title}</Text>

        </View>
        <View>
        <Button  style={styles.btnprice}>
                    <Text style={styles.price} numberOfLines={1}>${item.price}</Text>
        </Button>
                <TouchableOpacity onPress={()=>showModal()}>
                      <Button buttonColor={myColor}>
                          <Icon name='plus' size={20} color='white'></Icon>
                      </Button>        
                </TouchableOpacity>
        </View>

        
        </TouchableOpacity>
       
  </Card>
    </View>
  )
}

export default _ProductCardMenu

const styles = StyleSheet.create({
    container:{
        margin:5,
        flex:1
    },
    card:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        alignItems:'center'
    },
    image:{
        width:100,
        height:70,
    },
  title:{
    fontSize:15,
    fontWeight:'600'
  },
  price:{
    color:myColor,
    fontSize:16,
    fontWeight:'700'
  }
})