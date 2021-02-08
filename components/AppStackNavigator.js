import React from 'react'
import {Image} from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import AddSeeingScreen from '../screens/AddSeeingScreen'
import ShopDetailScreen from '../screens/ShopDetailsScreen'
export const AppStackNavigator= createStackNavigator({
    BookDonateList:{
        screen :AddSeeingScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    ShopDetails:{
        screen :ShopDetailScreen,
        navigationOptions:{
            headerShown:false
        }
    },

 },
 {
     initialRouteName:'AddSeeingScreen'
 }
)