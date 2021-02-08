import React,{Component} from 'react'
import {Header,Icon,Badge , Card, ListItem} from 'react-native-elements'
import { StyleSheet, Text, View, TouchableOpacity  , FlatList} from 'react-native';
import db from '../config'
import firebase from 'firebase'
import MyHeader from '../components/header'
import SwipeableFlatList from '../components/SwipeableFlatList'

export default class NotificationScreen extends Component{
    constructor(props){
     super(props);
     this.state={
         userId:firebase.auth().currentUser.email,
         allNotification:[]
     };
     this.notificationRef=null
    }
    getNotification=()=>{
        this.notificationRef=db.collection("AllNotifications")
        .where("NotificationsStatus","==","unread")
        .where("targetedUserId","==",this.state.userId)
        .onSnapshot((snapshot)=>{
            var allNotification=[]
            snapshot.docs.map((doc)=>{
                var notification=doc.data()
                notification["docId"]=doc.id
                allNotification.push(notification)
            })
            this.setState({
                allNotification:allNotification
            })
        })
    }
    componentDidMount(){
        this.getNotification()
    }
    componentWillUnmount(){
        this.notificationRef()
    }
    keyExtractor=(item,index)=>index.toString()
    renderItem=({item,index})=>{
        return(
            <ListItem 
             key={index}
             leftElement={<Icon name="book"type="font-awesome" color='#696969' />}
             title={item.BookName}
             titleStyle={{color:'Black',fontWeight:'bold'}}
             subtitle={item.message}
             bottomDivider
            />
        )
    }
 render(){
     return(
        <View style={{flex:1}}>
            <View style={{flex:0.1}}>
          <MyHeader title="Donate Books" navigation={this.props.navigation} />
            </View>
          <View style={{flex:1}}>
              {
                  this.state.allNotification.length===0
                  ?(
                   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                       <Text style ={{fontSize:20}}>
                          You Have no notification
                       </Text>
                   </View>   
                  )
                  :(
                     <SwipeableFlatList 
                     allNotification={this.state.allNotification}
                     />
                  )
              }
          </View>
        </View>
     )
 }
}