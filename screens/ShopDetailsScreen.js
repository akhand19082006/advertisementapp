import React,{Component} from 'react'
import {Header,Icon,Badge , Card} from 'react-native-elements'
import { Text, View} from 'react-native';
import firebase from 'firebase'


export default class ShopDetailScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            userId:firebase.auth().currentUser.email,
            shopName:this.props.navigation.getParam('details')['ShopName'],
            shopCategory:this.props.navigation.getParam('details')['ShopCategory'],
            ownerName:this.props.navigation.getParam('details')['OwnerName'],
            contactNumber:this.props.navigation.getParam('details')['ContactNumber'],
            pincode:this.props.navigation.getParam('details')['Pincode'],
            area:this.props.navigation.getParam('details')['Area'],
            landMark:this.props.navigation.getParam('details')['LandMark'],
            towncity:this.props.navigation.getParam('details')['Towncity'],
            state:this.props.navigation.getParam('details')['State'],
            descriptionOnShop:this.props.navigation.getParam('details')['DescriptionOnShop'],
        }
    }
    render(){
        return(
            <View style={{flex:1}}>
             <View style={{flex:0.1}}>
                <Header            
                leftComponent={<Icon name='arrow-left' type='feather' color='#696969' onPress={()=>this.props.navigation.goBack()} />}
                centerComponent={{text:"Shop Details",style:{color:'#abcdef',fontSize:20,fontWeight:"bold"}}}
                backgroundColor="#eaf8fe"

                />
             </View>
             <View style={{flex:0.3}}>
                 <Card title={"Shop Information"} titleStyle={{fontSize:20}} >
                    <Card>
                        <Text style={{fontWeight:'bold'}}>
                        Shop Name:{this.state.shopName}
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                            Shop Category:{this.state.shopCategory}
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                            Address:{this.state.area + this.state.landMark + this.state.towncity + this.state.state + this.state.pincode} 
                        </Text>
                    </Card>
                    <Card>
                        <Text>
                           Drscription on shop:{this.state.descriptionOnShop}
                        </Text>
                    </Card>
                    
                 </Card>
             </View>
  
            </View>
        )
    }   
}
