import { StyleSheet, Text, View ,SafeAreaView,ScrollView, TouchableOpacity,FlatList} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import _ProductCardMenu from '../components/_ProductCardMenu'
import {DATA} from './index'
const myColor='#0E94A0'

const ProductsMenu = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
      <View style={styles.appBar}>
          <TouchableOpacity style={styles.iconBack} onPress={()=>navigation.goBack()}>
            <Icon name='arrow-left' size={24} color='white'  />
          </TouchableOpacity>
          <Text style={styles.headTitle}>Menu</Text>
          <TouchableOpacity style={styles.iconMenu} onPress={()=>navigation.goBack()}>
            <Icon name='list' size={24} color='white'  />
          </TouchableOpacity>
        </View>
        <View>
              
        <FlatList
        data={DATA}
        renderItem={({item}) => <_ProductCardMenu item={item} />}
        keyExtractor={item => item.id}
        numColumns={1}
        contentContainerStyle={{columnGap:17}}
      />  

        </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}

export default ProductsMenu

const styles = StyleSheet.create({
  appBar:{
    height:35,
    marginHorizontal:10,
    backgroundColor:myColor,
    margin:16,
    borderRadius:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  iconBack:{
    margin:1,
    width:30,
    marginLeft:10,
    borderColor:'white',
    borderWidth:2,
    borderRadius:50,
    padding:2,
    marginRight:10
  },
  headTitle:{
    color:'white',
    fontSize:20,
    fontWeight:'700'
  },
  iconMenu:{
    margin:1,
    width:30,
    marginRight:10
  }
})