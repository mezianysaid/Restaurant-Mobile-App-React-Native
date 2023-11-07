/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import BottomNavigation from './src/screens/BottomNavigation'
import {ProductDetails} from './src/screens/index'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { PaperProvider } from 'react-native-paper';
import ProductsMenu from './src/screens/ProductsMenu';
import {MostFavorites} from './src/screens/index';
const Stack = createNativeStackNavigator();


const  App=()=>{
 

  return (
    <>    
    <PaperProvider>  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name='Bottom Navigation'
         component={BottomNavigation}
         options={{headerShown:false}}
        />
        <Stack.Screen
          name='ProductDetails'
          component={ProductDetails}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='ProductsMenu'
          component={ProductsMenu}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='MostFavorities'
          component={MostFavorites}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
