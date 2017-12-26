import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  NativeModules,
  abcdef8888
} from 'react-native';

import {Navigation} from 'react-native-navigation';
import Transorderdetail from './Transorderdetail'

import {Icon,Divider,  FormLabel,FormInput } from 'react-native-elements';

 
 

const RightCustomButton = ({text}) =>
  <TouchableOpacity
    style={[styles.buttonContainer]}
    onPress={()=>Navigation.handleDeepLink({link:"qrscan"})}
  >
    <View style={styles.button}>
      <Text style={{ color: 'white' }}>{text}</Text>
    </View>
  </TouchableOpacity>;



 


Navigation.registerComponent('CustomButton', () => RightCustomButton);

export default class Orderscan extends React.Component {

  static navigatorButtons = {
    rightButtons: [
      {
        id: 'custom-button',
        component: 'CustomButton',
        passProps: {
          text: '+' 
        }
      }
    ]
  };

  componentWillMount() {
    navigator = this.props.navigator;
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
     console.log(event)
     if(event.link==='qrscan'){
       console.log("now scann pic!")

       this.props.navigator.push({
          screen: 'Qrscanner',
          title: '扫描',
       });

     }


  }
  

  
   popScann = () => {

     
      console.log('popScann')
   };

 

  render() {
    return (
      <View style={styles.container}>
         
        <Transorderdetail />
      
      </View>
    );
 }

  componentWillUnmount() {
    navigator = null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  buttonContainer: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    backgroundColor: 'tomato',
    width: 34,
    height: 34,
    borderRadius: 34 / 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
