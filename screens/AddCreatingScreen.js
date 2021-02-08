import React from 'react'
import { StyleSheet, Text, View, TextInput  ,Alert , KeyboardAvoidingView} from 'react-native';
import db from '../config'
import firebase from 'firebase'
import MyHeader from '../components/header'
export default class AddCreatingScreen extends React.Component{
    constructor(){
        super();
        this.state={
            userId:firebase.auth().currentUser.email,
            shopName:"",
            shopCategory:"",
            ownerName:"",
            contactNumber:"",
            pinCode:"",
            area:"",
            landMark:"",
            towmCity:"",
            state:"",
            descriptionOnShop:"",     
        }
    }
    createUniqueId(){
        return Math.random().toString(36).substring(7)
    }
    addRequest=(shopName,shopCategory)=>{
     var userId =this.state.userId
     var randomRequestId = this.createUniqueId();
     db.collection('AllAdds').add({
         "UserId":userId,
         "ShopName":shopName,
         "ShopCategory":shopCategory,
         "RequestId":randomRequestId,
         "OwnerName":ownerName,
         "ContactNumber":contactNumber,
         "PinCode":pinCode,
         "Area":area,
         "LandMark":landMark,
        "TowmCity":towmCity,
        "State":state,
        "DescriptionOnShop":descriptionOnShop
     })
     this.setState({
         shopName:'',
         shopCategory:'',
     })
     return Alert.alert("Your Add is posted successfully")
    }
render(){
    return(
        <View style={{flex:1}}>
         <MyHeader title= "Create Your add" />
         <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>

                    <TextInput style={styles.TextInput} 
                     placeholder={"Enter Shop Name"}
                     onChangeText={(text)=>{
                         this.setState({
                             shopName:text
                         })
                     }}
                     value={this.state.shopName}
                     />

                     <TextInput style={[styles.TextInput,{height:300}]} 
                     placeholder={"Enter Shop Category"}
                     onChangeText={(text)=>{
                         this.setState({
                             shopCategory:text
                         })
                     }}
                     value={this.state.shopCategory}
                     
                     />
                      <TextInput style={styles.TextInput} 
                     placeholder={"Enter Shop Owner Name"}
                     onChangeText={(text)=>{
                         this.setState({
                            ownerName:text
                         })
                     }}
                     value={this.state.ownerName}
                     />
                      <TextInput style={styles.TextInput} 
                     placeholder={"Enter PIN code 6 digits [0-9]"}
                     onChangeText={(text)=>{
                         this.setState({
                            pinCode:text
                         })
                     }}
                     value={this.state.pinCode}
                     />
                      <TextInput style={styles.TextInput} 
                     placeholder={"Enter Area, Colony, Street, Sector, Village"}
                     onChangeText={(text)=>{
                         this.setState({
                            area:text
                         })
                     }}
                     value={this.state.area}
                     />
                      <TextInput style={styles.TextInput} 
                     placeholder={"Enter Landmark"}
                     onChangeText={(text)=>{
                         this.setState({
                            landMark:text
                         })
                     }}
                     value={this.state.landMark}
                     />
                      <TextInput style={styles.TextInput} 
                     placeholder={"Enter Town/City"}
                     onChangeText={(text)=>{
                         this.setState({
                             towmCity:text
                         })
                     }}
                     value={this.state.towmCity}
                     />
                      <TextInput style={styles.TextInput} 
                     placeholder={"Enter State / Province / Region"}
                     onChangeText={(text)=>{
                         this.setState({
                            state:text
                         })
                     }}
                     value={this.state.state}
                     />
                      <TextInput style={styles.TextInput} 
                     placeholder={"Enter Contact Number"}
                     onChangeText={(text)=>{
                         this.setState({
                            contactNumber:text
                         })
                     }}
                     value={this.state.contactNumber}
                     />
                     <TextInput style={styles.TextInput} 
                     placeholder={"Enter Your Shop Description"}
                     onChangeText={(text)=>{
                         this.setState({
                            descriptionOnShop:text
                         })
                     }}
                     value={this.state.descriptionOnShop}
                     />
                     <TouchableOpacity style={styles.button} 
                     onPress={()=>{
                         this.addRequest(this.state.ItemName,this.state.reasonToRequest)
                     }}
                     >
                        <Text style={styles.buttonText}>Request</Text>
                     </TouchableOpacity>

        
         </KeyboardAvoidingView>
        </View>
    )
}
}
const styles = StyleSheet.create({ 
    button:{
        width:"75%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"yellow",
        shadowColor:"#000",
        shadowOffset:{width:0,height:8},
        shadowOpacity:0.30,
        shadowRadius:10.32,
        elevation:16,
        marginTop:20
    },
    
    KeyboardAvoidingView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    TextInput:{
       
        width:"75%",
         height:35,
          alignSelf:'center',
          borderColor:'#ffab91',
           borderRadius:10, 
           borderWidth:1,
            marginTop:20, 
            padding:10
    },
    TouchableOpacity:{
        width:200, 
        height:40, 
        alignItems:'center',
         justifyContent:'center',
         borderWidth:1, 
         borderRadius:10, 
         marginTop:30
    },  
    TextInput:{
       
        width:"75%",
         height:35,
          alignSelf:'center',
          borderColor:'#ffab91',
           borderRadius:10, 
           borderWidth:1,
            marginTop:20, 
            padding:10
    },
    buttonText:{
        color:"blue",
        fontWeight:'200',
        fontSize:20
            },
})