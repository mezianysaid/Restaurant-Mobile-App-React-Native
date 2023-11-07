import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home, Search, Products, ProductDetails} from './index'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import Categories from './Categories';
import AboutUs from './AboutUs';
const Tab = createBottomTabNavigator();

const ScreenOptions = {
    tabBarShowLabel:false,
    tabBarHideOnKeyboard:true,
    headerShown:false,
    tabBarStyle:{
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
        elevation:8,
        height:50,
        backgroundColor:'#0E94A0'
    }

}
export default function BottomNavigation() {
  return (
    <>
     <Tab.Navigator screenOptions={ScreenOptions}>
        <Tab.Screen
           name='Home' component={Home}
           options={{
            tabBarIcon:({focused})=>{
             return <Icon name='home' size={30} color={focused ? 'white':'#8BECF5' } />
            }
           }}
        />
        <Tab.Screen
           name='Search' component={Search}
           options={{
            tabBarIcon:({focused})=>{
             return <Icon name='search' size={30} color={focused ? 'white':'#8BECF5'} />
            }
           }}
        /> 
        <Tab.Screen
           name='List' component={Products}
           options={{
            tabBarIcon:({focused})=>{
             return <MaterialIcons name='restaurant-menu' size={30} color={focused ? 'white':'#8BECF5'} />
            }
           }}
        />  
        <Tab.Screen           
           name='Categories' component={Categories}
           options={{
            tabBarIcon:({focused})=>{
             return <MaterialIcons name='category' size={30} color={focused ? 'white':'#8BECF5'} />
            }
           }}
        />   
          <Tab.Screen           
           name='About Us' component={AboutUs}
           options={{
            tabBarIcon:({focused})=>{
             return <MaterialIcons name='roundabout-right' size={30} color={focused ? 'white':'#8BECF5'} />
            }
           }}
        />   

         
    </Tab.Navigator> 
    </>
  )
}

const styles = StyleSheet.create({})