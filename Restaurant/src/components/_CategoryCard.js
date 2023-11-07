import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { Avatar, Button, Card, } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import {useRoute,useNavigation} from '@react-navigation/native'
import { myColor } from '../screens';
const _CategoryCard = ({item}) => {
    const navigation = useNavigation()
    const route=useRoute()
    const categ = item.title
  return (
    <View style={styles.container}> 
    
    <Card>
      <TouchableOpacity onPress={(item)=>navigation.navigate('List', {categ})}>
        <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
     
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('List', {categ})}> 
    
          <Card.Cover  source={item.image} />
        
      </TouchableOpacity>

       
</Card>
  </View>
  )
}

export default _CategoryCard

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
    fontSize:25,
    fontWeight:'800',
    margin:10,
    color:myColor
  },

})