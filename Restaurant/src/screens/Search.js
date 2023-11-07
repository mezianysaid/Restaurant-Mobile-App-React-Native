import { StyleSheet, Text, View,Image, Dimensions , FlatList,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { Searchbar } from 'react-native-paper';
import srch from '../../assets/images/srch.jpg'
import _ProductCardMenu from '../components/_ProductCardMenu';
import { DATA } from './index'
const myColor='#0E94A0'
const {height,width}=Dimensions.get('screen')

const SearchImage = ()=>{
  return(
    <>
    <Image 
      source={srch}
      style={styles.SrchImage}
    />
    </>
  )
}

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data,setData] = useState([]);

  
  const SearchFilter = (query)=>{
    if(query){
      const result = DATA.filter((item)=>{
        const itemData = item.title ? item.title.toLowerCase():' '.toLowerCase()
        const queryData = query.toLowerCase()
        return itemData.indexOf(queryData) > -1;
      })
      setData(result)
      setSearchQuery(query)
    }else{
      setData(null)
      setSearchQuery(query)
    }
  }
  
const ProductsFound = ()=> {
  return(
    <View>
        <FlatList
                data={data}
                renderItem={({item}) => <_ProductCardMenu item={item} />}
                keyExtractor={item => item.id}
                numColumns={1}
                contentContainerStyle={{columnGap:17}}
              />
    </View>
  )
}
  return (
    <View style={styles.container}>
      <View style={styles.upperSearch}>
      <Searchbar
      placeholder="Search..."
      onChangeText={(text) => SearchFilter(text)}
      value={searchQuery}     
      style={styles.searchInput}
    />
      </View>
      <View style={styles.result}>
      {!searchQuery ? (
          <View>
        <SearchImage/>
          </View>
      ):(
        <View>
          <ProductsFound/>
        </View>
      )} 
      </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container:{
    margin:10,
    flex:1
  },

  searchInput:{
    height:50,
    backgroundColor:"#B9E6FF",
    borderWidth:1,
    borderColor:'grey',
   
  },
  SrchImage:{
    marginTop:20,
    width:width-20,
    height:height/2+50,
    resizeMode:'stretch',
    borderRadius:20
  }
})