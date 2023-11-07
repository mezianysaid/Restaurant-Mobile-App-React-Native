import { StyleSheet, Text, View ,SafeAreaView,ScrollView,TouchableOpacity, FlatList} from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import { myColor } from './index'
import {useNavigation} from '@react-navigation/native' 

import {I4,f4,d1} from './index'
import _CategoryCard from '../components/_CategoryCard'
const DATA = [  
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Food',
    image:I4,
    
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Fruits',
    image:f4,
   
  },
  {
    id: '58694a0f-3da1-471futhttyf-bd96-145571e29d72',
    title: 'Drinks',
    image:d1,   
  },
  
  
];
const Categories = ({navigation}) => {
  const navigationTo=useNavigation()
  return (
   <SafeAreaView style={styles.container}>
    {/* <ScrollView> */}
    <View style={styles.appBar}>
          <TouchableOpacity style={styles.iconBack} onPress={()=>navigation.goBack()}>
            <MaterialIcons name='arrow-circle-left' size={30} color='white'  />
          </TouchableOpacity>
          <Text style={styles.categ}>Categories</Text>
          <TouchableOpacity style={styles.iconMenu} onPress={()=>navigationTo.navigate("ProductsMenu")}>
            <MaterialIcons name='restaurant-menu' size={24} color='white'  />
          </TouchableOpacity>
        </View>
      <View >
          
      <FlatList
        data={DATA}
        renderItem={({item}) => <_CategoryCard item={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={{columnGap:10}}
        key={item => item.id}
      />  
      </View>
    {/* </ScrollView> */}
   </SafeAreaView>
  )
}

export default Categories

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
    alignItems:'center'
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