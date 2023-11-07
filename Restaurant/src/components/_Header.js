import { StyleSheet, Text, View, SafeAreaView , TouchableOpacity} from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import {useNavigation} from '@react-navigation/native'
const myColor="#0E94A0"
export default function _Header() {
  const navigate = useNavigation();
  return (
    <SafeAreaView>
        <View style={styles.positionWrapper}>
        <View> 
          <MaterialIcons name='location-pin' size={30} color={myColor} />
        </View>
        <View>
          <Text style={{color:myColor}}>Jorf Elmalha</Text>
        </View>
        <TouchableOpacity onPress={()=>navigate.navigate('MostFavorities')}>
        <MaterialIcons name='favorite-outline' size={30} color={myColor} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize:40,
        fontWeight:'800',
        color:myColor,
        fontFamily:'serif'
      },    
      positionWrapper:{
        marginHorizontal:15,
        marginTop:6,
        flexDirection:'row',
        justifyContent:'space-between',    
        alignItems:'center'
      },
})