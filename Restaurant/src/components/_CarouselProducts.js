import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import {SliderBox} from 'react-native-image-slider-box'
import {d1,I1,f4,nakaya,f3,d3} from '../screens/index'
const _CarouselProducts = () => {
    const slides = [
        d1,I1,f4,nakaya,f3,d3
    ]
  return (
   <SafeAreaView style={styles.carouselContainer}>
    <SliderBox
    images={slides}
    dotColor="#0E94A0"
    inactiveDotColor='#8BECF5'
    ImageComponentStyle={{ borderRadius:30, width:"90%",height:"90%", marginBottom:5}}
    autoplay
    circleLoop
    />
    </SafeAreaView>
  )
}

export default _CarouselProducts

const styles = StyleSheet.create({
    carouselContainer:{
        flex:1,       
        alignItems:'center',        
        borderRadius:30,
        height:300,
        marginTop:0
    }
})