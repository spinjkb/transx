 
 

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



import {Icon,Divider, Button,FormLabel,FormInput } from 'react-native-elements';
 

import {registerScreens, registerScreenVisibilityListener} from '../Route';


import * as AppConstClass from '../../config/constants';


const ACCESS_TOKEN = AppConstClass.ACCESS_TOKEN;

const API_ROOT= AppConstClass.API_ROOT;

class Login extends Component {


  constructor(props) {
    super(props);
    
    console.log(this.props)
    //this.tsf() 
    
    // this.cbpush() 
    
    this.state = {
      email: "",
      password: "",
      msg: "",
      callback:'',
      showProgress: false,
    };

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  
  cbpush(){
   
    return null;
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
          
          if(retcode ==0 ){
              Alert.alert( 'Alert Title','success' + accessToken)

              registerScreens(1)
              let accessToken = res.access_token;
              this.storeToken(accessToken);
 
          }
          // else
          // {  
             
          // }
           
          // this.redirect('home');
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



        <FormLabel>手机号</FormLabel>
        <FormInput   underlineColorAndroid="#112233"      onChangeText={ (text)=> this.setState({email: text})} />
        <FormLabel>密码</FormLabel>

        <FormInput    underlineColorAndroid="#223344"      onChangeText={ (text)=> this.setState({password: text}) } />
         <Button
          raised
          icon={{name: 'home', size: 16}}
          buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
          onPress={this.onLoginPressed.bind(this)}
          textStyle={{textAlign: 'center'}}
          title={`登录`}
        />
 
        
          <FormLabel>
          {this.state.msg}
          </FormLabel>
      

    
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
  }
});

 
export default Login;