import React, { Component } from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import SideDrawer from './SideDrawer';
import AddCreatingScreen from '../screens/AddCreatingScreen';
import AddSeeingScreen from '../screens/AddSeeingScreen'
 export const AppDrawerNavigator = createDrawerNavigator({
     Home:{
         screen:AddSeeingScreen
     },
    CreateYourAdd:{
         screen:AddCreatingScreen
     },
     


    

     
 },
 {
     contentComponent:SideDrawer
 },
 {
     initialRouteName:'Home'
 }
 )