 
 

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

class Blank extends Component {

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
  
     
 
  

  
  
  render() {
     return (
      <View style={styles.container}>



        <FormLabel>Blank</FormLabel>
      
        
           

    
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

 
export default Blank;
