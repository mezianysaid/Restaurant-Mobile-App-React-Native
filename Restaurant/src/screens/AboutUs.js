import { StyleSheet, Text, View ,SafeAreaView,ScrollView, Image,Dimensions} from 'react-native'
import React from 'react'
import { myColor } from '.'
import {Card} from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import server from '../../assets/images/s1.jpg'
const {height,width}=Dimensions.get('screen')
const AboutUs = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>~ About Us ~</Text>
            </View>
            <View style={{margin:10}}>
            <Image 
                source={server}
                style={styles.image}
                />
            </View>
            <Card style={styles.about} elevation={5}>
               <Card.Content>

                <Text style={{fontSize:15}}>
                Full-service restaurants are where diners are seated at tables and are waited on. Their orders are taken while they are at the table, and the food and drink is delivered to the table. Full-service encompasses fine dining, silver service and casual dining geared toward families. In some cases, food is cooked at the table, but in all cases there is no requirement for guests to leave the table once they have arrived.
                </Text>
               </Card.Content>

            </Card>
            <Card style={styles.social} elevation={5}>
               <Card.Content style={styles.btnSocial}>

                <MaterialCommunityIcons name='facebook' size={30} color={myColor} />
                <MaterialCommunityIcons name='instagram' size={30}  color={myColor} />
                <MaterialCommunityIcons name='youtube' size={30}  color={myColor} />
               </Card.Content>

            </Card>

    </ScrollView>
    </SafeAreaView>
  )
}

export default AboutUs

const styles = StyleSheet.create({
    container:{
        margin:10,
        flex:1
    },
    header:{
        height:30,
        backgroundColor:myColor,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        alignItems:'center'
    },
    headerTitle:{
        color:'white',
        fontSize:20,
        fontWeight:'700'
    },
    about:{
        marginTop:2,
        borderWidth:1,
        borderColor:myColor
    },
    social:{
       
        marginTop:10,
        borderWidth:1,
        borderColor:myColor,
        // borderRadius:20
    },
    btnSocial:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:20
    },
    image:{
        alignSelf:'center',
        width:width-30,
        height:300,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
    }
})