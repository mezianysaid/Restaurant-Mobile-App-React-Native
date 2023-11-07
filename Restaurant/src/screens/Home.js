import { StyleSheet, Text, View, TouchableOpacity, TextInput , ScrollView} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import {useNavigation} from '@react-navigation/native'
import _Header from '../components/_Header'
import _CarouselProducts from '../components/_CarouselProducts'
const myColor="#0E94A0"
export default function Home() {
  const navigationTo = useNavigation() ;
  return (
    <View style={styles.container}>
     <_Header/>
      <ScrollView> 
      <View style={{marginTop:10, marginLeft:10}}>
        <Text style={styles.title}>
          Welcome to your Restaurant.        
        </Text>
        <Text style={styles.title}>Find the delicious Food...</Text>
      </View>
      <View style={styles.searchContainer}>
       
        <View style={styles.searchwrapper}>
        <TouchableOpacity style={{justifyContent:'center'}}>
          <Icon name='search' size={24} color='black' style={{marginHorizontal:5}} />
        </TouchableOpacity>
          <TextInput style={styles.searchText}
          value=''
          placeholder='what are you looking for ...'
          onPressIn={()=>{navigationTo.navigate("Search")}}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchbtn}>
          <Icon name='camera' size={40}  color='black' />            
          </TouchableOpacity>
        </View>
      </View>

      {/* List Carousel */}
      <View>
          <_CarouselProducts/>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    margin:5
  },
  title:{
    fontSize:40,
    fontWeight:'800',
    color:myColor,
    fontFamily:'serif'
  },
  appSearch:{

  },
  positionWrapper:{
    marginHorizontal:15,
    marginTop:6,
    flexDirection:'row',
    justifyContent:'space-between',    
    alignItems:'center'
  },
  searchContainer:{
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:myColor,
    alignContent:'center',
    marginVertical:20,
    borderRadius:20,
    height:50,
    alignItems:'center'
  },
  searchText:{
     width:'100',     
     height:'100%',
     paddingHorizontal:10
  },
  searchwrapper:{
    flex:1,
    backgroundColor:'#B9E6FF',
    marginRight:5,
    borderRadius:20,
    flexDirection:'row',
    marginLeft:1
  },
  searchbtn:{
    width:'99',
    height:'100%',
    backgroundColor:'#B9E6FF',
    borderRadius:20,
    paddingHorizontal:10,
    justifyContent:'center',
    alignItems:'center',
    marginRight:1
  }
})