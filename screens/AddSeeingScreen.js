import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity , FlatList} from 'react-native';
import {ListItem} from 'react-native-elements'
import db from '../config'
import firebase from 'firebase'
import MyHeader from '../components/header'
export default class AddSeeingScreen extends React.Component{
    constructor(){
        super();
        this.state={
            userId:firebase.auth().currentUser.email,
            totalAdd:[]

        }
        this.requestref=null
    }
    getAddList=()=>{
        this.requestref=db.collection('AllAdds')
        .onSnapshot((snapshot)=>{
            var totalAdd = snapshot.docs.map(document=>document.data())
            this.setState({
                totalAdd:totalAdd
            })
        })
    }
    componentDidMount(){
        this.getAddList()
    }
    componentWillUnmount(){
        this.requestref();

    }
    keyExtractor=(item,index)=>index.toString()
    renderItem=({item,i})=>{
        return(
            <ListItem
            key={i}
            title={item.ShopName}
            subtitle={item.ShopCategory}
            titleStyle={{color:'black' , fontWeight:'bold'}}
            rightElement={
                <TouchableOpacity style = {styles.button} 
                onPress={()=>{
                    this.props.navigation.navigate("ShopDetails",{"details":item })
                }}
                >
                   <Text style={{color:"darkblue"}}>View</Text>
                </TouchableOpacity>
            }
            bottomDivider
            />

            
        )
    }
render(){
    return(
        <View style={{flex:1}}>
          <MyHeader title="Get Best Shop and Services in your locallity" />
          <View style={{flex:1}}>
              {
                  this.state.totalAdd.length===0
                  ?(
                   <View>
                       <Text style ={{fontSize:20}}>
                           list Of All Shops in your locallity
                       </Text>
                   </View>   
                  )
                  :(
                      <FlatList 
                      keyExtractor = {this.keyExtractor}
                      data={this.state.totalAdd}
                      renderItem={this.renderItem}
                      />
                  )
              }
          </View>
        </View>
    )
}
}

const styles = StyleSheet.create({ 
    button:{
        width: 100,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"yellow",
        shadowColor:"#000000",
        shadowOffset:{width:0,height:8},
        shadowOpacity:0.30,
        shadowRadius:10.32,
        elevation:16,
        marginTop:20
    }
})