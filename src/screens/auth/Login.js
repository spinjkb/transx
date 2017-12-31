 
 

import React, {Component} from 'react';
import {
  StyleSheet, 
  View, 
  Text, 
  Alert, 
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
  AsyncStorage
} from 'react-native';


import {Navigation, ScreenVisibilityListener} from 'react-native-navigation';


import {Icon,Divider, Button,FormLabel,FormInput } from 'react-native-elements';
 

import {registerScreens, registerScreenVisibilityListener} from '../Route';

import Camera from 'react-native-camera';

import * as AppConstClass from '../../config/constants';

import Profile  from '../profile/Profile';


import {Separator} from 'react-native-form-generator';

import  {  StoreInit } from '../../mobx/StoreOp'




const ACCESS_TOKEN = AppConstClass.ACCESS_TOKEN;

const API_ROOT= AppConstClass.API_ROOT;

class Login extends Component {


  constructor(props) {
    super(props);
    
    console.log(this.props)
     
    this.state = {
      email: "",
      password: "",
      msg: "",
      callback:'',
      showProgress: false,
    };

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }



  componentWillMount() {
       
  }
   
   componentDidMount() {
        
         
  }




  onNavigatorEvent(event) {
    if (event.type === 'PreviewActionPress') {
      if (event.id === 'action-cancel') {
        Alert.alert('Cancelled');
      }
      if (event.id === 'action-delete-sure') {
        Alert.alert('Deleted');
      }
    }
  }
  
    storeToken(responseData){
    AsyncStorage.setItem(ACCESS_TOKEN, responseData, (err)=> {
      if(err){
        console.log("an error");
        throw err;
      }
      console.log("success");
    }).catch((err)=> {
        console.log("error is: " + err);
    });
  }

  async onLoginPressed() {

    this.setState({showProgress: true})
    
    try {
      let response = await fetch(API_ROOT+ 'transorder/login', {
                              method: 'POST',
                              headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify(
                              {
                                  email: this.state.email,
                                  password: this.state.password,
                              })
                            });


       
      
      if (response.status == 200 ) {

          let res = await response.json();
          console.log(res);
          //Handle success
          let retcode=res.code;
          this.setState({msg: res.msg});
          

          //登录成功

          if(retcode ==0 ){
              let accessToken = res.access_token;
              this.storeToken(accessToken);

              StoreInit(res);

              this.props.navigator.pop({
                 animated: true, // does the pop have transition animation or does it happen immediately (optional)
                 animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
              });


 
          }
           
      } else {
          //Handle error
          let error = response.status;
          throw error;
      }
    } catch(error) {
        this.setState({msg: error});
        console.log("error " + error);
        this.setState({showProgress: false});
    }
  }


  
  render() {
     return (
      <View style={styles.container}>

      
      

        <FormLabel  labelStyle={styles.FormLabel}   >手机号</FormLabel>
        <FormInput  inputStyle={styles.FormInput}  underlineColorAndroid="#223344"   selectionColor="rgba(0,0,0,0.4)"   onChangeText={ (text)=> this.setState({email: text})} />
        
        <Separator />

        <FormLabel>密码</FormLabel>

        <FormInput    underlineColorAndroid="#223344"   selectionColor="rgba(0,0,0,0.4)"   onChangeText={ (text)=> this.setState({password: text}) } />
        
        <Button
          raised
          icon={{name: 'home', size: 16}}
          buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
          onPress={this.onLoginPressed.bind(this)}
          textStyle={{textAlign: 'center'}}
          title={`Login888`}
        />

         
  
    
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  FormLabel:{
   fontSize:14,
   color:'red',
   fontWeight:"normal"
  },

  FormInput:{
   fontSize:14,
    fontWeight:"normal",

  },
  
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

 
export default Login;
