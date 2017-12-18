import React, {Component} from 'react';
import {
  StyleSheet, 
  View, 
  Text, 
  Button, 
  Alert, 
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
  AsyncStorage
} from 'react-native';


import * as AppConstClass from '../../config/constants';

const ACCESS_TOKEN = AppConstClass.ACCESS_TOKEN;

const API_ROOT= AppConstClass.API_ROOT;

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      msg: "",
      showProgress: false,
    };

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
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

             let accessToken = res.access_token;
             this.storeToken(accessToken);

             storage.save({
                key: 'loginState',   // Note: Do not use underscore("_") in key!
                data: { 
                  from: 'some other site',
                  userid: 'some userid',
                  token: accessToken
                },
                
                // if not specified, the defaultExpires will be applied instead.
                // if set to null, then it will never expire.
                expires: 1000 * 3600
              });
 


             Alert.alert( 'Alert Title','success' + accessToken)
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
        <Text style={styles.heading}>
          Native on Rails
        </Text>
        <TextInput
          onChangeText={ (text)=> this.setState({email: text}) }
          style={styles.input} placeholder="Email">
        </TextInput>
        <TextInput
          onChangeText={ (text)=> this.setState({password: text}) }
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}>
        </TextInput>
        <TouchableHighlight onPress={this.onLoginPressed.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableHighlight>

        <Text style={styles.error}>
          {this.state.msg}
        </Text>

    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 80
  },
  input: {
    height: 50,
    width:200,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec'
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  heading: {
    fontSize: 30,
  },
  error: {
    color: 'red',
    paddingTop: 10
  },
  success: {
    color: 'green',
    paddingTop: 10
  },
  loader: {
    marginTop: 20
  }
});
export default Login;
