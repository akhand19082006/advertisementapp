import React, { Component } from 'react'
import { StyleSheet, Text, View , Dimensions,} from 'react-native';
import db from '../config'
import {ListItem,Icon} from 'react-native-elements'
import {SwipeListView} from 'react-native-swipe-list-view'
import Animated from 'react-native-reanimated';
export default class SwipeableFlatList extends Component{
    constructor(props){
        super(props);
        this.state={
            allNotification:this.props.allNotification 
        }
    }
    updateMarkAsRead=(Notification)=>{
        db.collection("AllNotifications").doc(Notification.docId)
        .update({NotificationStatus:"read"})
    }
    onSwipeValueChange=swipeData=>{
        var allNotification = this.state.allNotification
        const{key,value} = swipeData
        if(value< -Dimensions.get("window").width){
            const newdata = [...allNotification]
            this.updateMarkAsRead(allNotification[key])
            newdata.splice(key,1)
            this.setState({allNotification:newdata})
        }

    }
    renderItem=data=>(
        <Animated.View>
        <ListItem 
        leftElement={<Icon name="book" type="font-awesome" color='#696969' />}
        title={data.item.BookName}
        titleStyle={{color:"Black",fontWeight:"bold"}}
        subtitle={data.item.message}
        bottomDivider
        />
        </Animated.View>
    )
    renderHiddenItem=()=>(
        <View style={styles.View1}>
            <View style={[styles.View2,styles.View3]}>
                <Text style={styles.Text}>
                    Mark as read
                </Text>
            </View>
        </View>
    )
    render(){
        return(
            <View style={{flex:1,backgroundColor:'white'}}>
                <SwipeListView
                disableRightSwipe
                data={this.state.allNotification}
                renderItem={this.renderItem}
                renderHiddenItem={this.renderHiddenItem}
                rightOpenValue={-Dimensions.get("window").width}
                previewRowKey={"0"}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onSwipeValueChange={this.onSwipeValueChange}
                keyExtractor={(item,index)=>index.toString()}
                />
            </View>
        )
    }
    
}
const styles = StyleSheet.create({
    View1:{
        alignItems:'center',
        backgroundColor:'#29b6f6',
        flex:1,
        flexDirection:"row",
        justifyContent:'space-between',
        padding:15
    },
    View2:{
        alignItems:'center',
        justifyContent:'space-between',
        bottom:0,
        position:"absolute",
        top:0,
        width:100
    },
View3:{
    backgroundColor:'#29b6f6',
    right:0,
},
Text:{
    color:"White",
    fontWeight:'bold',
    fontSize:15,
    textAlign:'center',
    alignSelf:'flex-start'
}
})