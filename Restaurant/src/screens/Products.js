import { StyleSheet, Text, View ,ScrollView,SafeAreaView, FlatList, TouchableOpacity} from 'react-native'
import React,{useState, useEffect} from 'react'
import _ProductCard from '../components/_ProductCard';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import {DATA} from '../screens/index'
import {useNavigation, useRoute} from '@react-navigation/native'

const myColor="#0E94A0"
const Products = ({navigation}) => {
  const navigate=useNavigation()
  const route=useRoute()
  let {categ} = route.params?route.params:''
  const [category, setCategory] = useState('')  
  const [data,setData] = useState(DATA);  

const filterProducts = ()=>{

  setCategory(categ)  
  if(category){
    const result = DATA.filter((item)=>{
      const itemData = item.category ? item.category.toLowerCase():''.toLowerCase()
      const queryData = category.toLowerCase()
      return itemData.indexOf(queryData) > -1;    
    })
    setData(result)         
  }else{         
    setData(DATA)
  } 
}

useEffect(()=>{   
  filterProducts()   
},[categ,category])

const SeeProducts=()=>{
  setData(DATA)
}
  const navigationTo = useNavigation()
  return (
    <SafeAreaView style={{marginHorizontal:4}}>
      {/* <ScrollView> */}
        <View style={styles.appBar}>
          <TouchableOpacity style={styles.iconBack} onPress={()=>navigation.goBack()}>
            <Icon name='arrow-left' size={24} color='white'  />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>SeeProducts()}> 
          <Text style={styles.title}>See All </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconMenu} onPress={()=>navigationTo.navigate("ProductsMenu")}>
            <Icon name='list' size={24} color='white'  />
          </TouchableOpacity>
        </View>
      <View >
      <FlatList
        data={data}
        renderItem={({item}) => <_ProductCard item={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={{columnGap:17}}
      />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}

export default Products

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
  iconMenu:{
    margin:1,
    width:33,  
    marginRight:10
  },
  title:{
    fontSize:17,
    fontWeight:'600',
    color:'white'
  }
})