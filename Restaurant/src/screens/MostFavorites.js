import { StyleSheet, Text, View ,SafeAreaView,ScrollView,TouchableOpacity, FlatList} from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
// import { myColor } from './index'
import {useNavigation} from '@react-navigation/native' 
import {DATA} from './index'
// import _CategoryCard from '../components/_CategoryCard'
import _ProductCard from '../components/_ProductCard'
const myColor="#0E94A0"
const MostFavorites = ({navigation}) => {
  const navigationTo=useNavigation()
  return (
   <SafeAreaView style={styles.container}>
   
    <View style={styles.appBar}>
          <TouchableOpacity style={styles.iconBack} onPress={()=>navigationTo.navigate("Home")}>
            <MaterialIcons name='arrow-circle-left' size={30} color='white'  />
          </TouchableOpacity>
          <Text style={styles.categ}>Most Favorities</Text>
          <TouchableOpacity style={styles.iconMenu} onPress={()=>navigationTo.navigate("ProductsMenu")}>
            <MaterialIcons name='restaurant-menu' size={24} color='white'  />
          </TouchableOpacity>
        </View>
      <View >
          
      <FlatList
        data={DATA}
        renderItem={({item}) => <_ProductCard item={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={{columnGap:10}}
        key={item => item.id}
      />  
      </View>
   
   </SafeAreaView>
  )
}
export default MostFavorites

const styles = StyleSheet.create({
  container:{
    margin:4,
    flex:1
  },
  appBar:{
    height:35,
    marginHorizontal:10,
    backgroundColor:myColor,
    margin:6,
    borderRadius:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',   
  },
  iconBack:{
    margin:1,
    width:30,
    marginLeft:4,
    
    // marginRight:10
  },
  iconMenu:{
    margin:1,
    width:33,  
    // marginRight:4
  },
  categ:{
    fontSize:20,
    fontWeight:'700',
    color:'white'
  }
})






