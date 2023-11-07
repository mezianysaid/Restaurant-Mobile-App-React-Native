import { StyleSheet, Text, 
    View, SafeAreaView,ScrollView , 
    TouchableOpacity, Image, Dimensions, Alert
} from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import {useRoute} from '@react-navigation/native'
import { Avatar, Button, Card, TextInput,Modal, Portal, List} from 'react-native-paper';
import _AddForm from '../components/_AddForm';
import {useNavigation} from '@react-navigation/native'
const myColor="#0E94A0"
const {height,width} = Dimensions.get('screen')

const ProductDetails = ({navigation}) => {
    const route = useRoute()
    const {item} = route.params;
    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const navigate = useNavigation()
   
 
  return (
    <SafeAreaView style={styles.container}>
     <ScrollView>
     <_AddForm _visible={visible} _setVisible={setVisible}/>
    
        <View style={styles.appRow}>
            <TouchableOpacity style={styles.fleshback} onPress={()=>navigation.goBack()}>
                 <Icon name='arrow-left' size={24} color='white' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.fleshback} onPress={()=>navigate.navigate("MostFavorities")}>
                 <Icon name='heart' size={24} color='white' />
            </TouchableOpacity>
        </View>
        <View style={styles.appContent}>              
        <Card >
                 {/* <View style={styles.card}> */}
                <Card.Cover source={item.image} style={styles.image} />               
                <Card.Content style={styles.actions}>          
                       <View style={styles.upperConent}>
                            
                            <View >
                                <Text style={styles.state}>AVAILABLE</Text>
                            </View>
                            <View style={styles.btnDmnd}>
                            <View  style={styles.btnprice}>
                                <Text style={styles.price} numberOfLines={1}>${item.price}</Text>
                            </View>
                            <TouchableOpacity onPress={()=>showModal()}>
                                <Button buttonColor='white' style={{paddingVertical:5}}>
                                    <Icon name='plus' size={21} color={myColor}></Icon>
                                </Button>        
                            </TouchableOpacity>
                            </View>
                       </View>
                       <Text style={styles.title}>{item.title}</Text>
                       <View style={styles.description}>
                            <Text style={styles.textDescription}>Description:</Text>
                            <Text style={styles.textDescription}>
                            Having a sharp often unpleasant taste such as beer of black coffee
                            </Text>
                       </View>
                       <View style={styles.status}>
                        <Text style={styles.textStatus}>Status: {item.status}</Text>
                        <Text style={styles.textStatus}>Dure: 30min </Text>
                       </View>
                       

                       <View style={styles.bottom}>                
                 <View style={styles.btnBtm("gold")} ></View>
                 <View style={styles.btnBtm("gold")} ></View>
                 <View style={styles.btnBtm("gold")} ></View>
                 <View style={styles.btnBtm("white")} ></View>
                 <View style={styles.btnBtm("white")} ></View>
                <View style={styles.btnBtm("white")} ></View>
                </View>

                </Card.Content>
               
                {/* </View> */}
       </Card>

        </View>
     </ScrollView>
    </SafeAreaView>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
    container:{
        margin:4,
        flex:1
    },
    appRow:{
        backgroundColor:myColor,
        height:33,
        marginHorizontal:5,
        marginTop:6,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    fleshback:{
        marginHorizontal:17,
    },
    image:{
        width:width-18,
        height:height/2-10,
        borderTopColor:myColor,
        borderTopWidth:4,
        borderRadius:10,
        marginBottom:10
    },
    appContent:{
        margin:5,
    },
    actions:{
        backgroundColor:myColor,
        borderTopEndRadius:20,
        borderTopStartRadius:20
    },
    upperConent:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
        alignItems:'center',
        // justifyContent:'space-around'
    },
    btnDmnd:{
        flexDirection:'row',
        justifyContent:'flex-end',      
    },
    price:{
        fontSize:25,
        fontWeight:'800',
        color:myColor
    },
    btnprice:{
        paddingHorizontal:20,
        paddingVertical:5,        
        backgroundColor:'white',
        borderRadius:50,
        marginHorizontal:10

    },
    description:{
        marginTop:5,
    },
    textDescription:{
        color:'white',
        fontSize:15,
        fontWeight:'500'
    },
    status:{
        marginVertical:10
    },
    textStatus:{
        fontSize:20,
        fontWeight:'600'
    },
    bottom:{
        marginBottom:-10,
        // justifyContent:'',
        flexDirection:'row'
    },
    btnBtm:(color)=>({       
        backgroundColor:color,
        width:15,
        height:15,
        marginRight:5,
        borderRadius:30
    }),
    state:{
        color:'gold',
        fontSize:14,
        fontWeight:'600'
    },
    title:{
        margin:5,
        fontSize:20,
        fontWeight:'700',
        color:'gold'
    },
    modelTitle:{
        fontSize:20,
        fontWeight:'600',
        alignSelf:'center'
    }
   
})