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

       constructor(props) {
        super(props);
        this.state = {
            passedData:null
        };
    }


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
     
     if(event.link==='qrscan'){
     
       this.props.navigator.push({
          screen: 'Qrscanner',
          title: '扫描',
          passProps: {
            onPassProp: (data) => {
              this.setState({passedData: data})  //强制订单详情进行重新渲染.
              this.forceUpdate()

            }
          }
       });
     }
  }
  
  
 

  detail(orderurl){
        
        console.log("中文：",orderurl)
        return (
                    
                    <Transorderdetail    transorder_serial={orderurl} ></Transorderdetail>
               )
  
  }

 render() {
    return (
      <View style={styles.container}>
        <Text>
            订单详情: 
            {this.state.passedData } 
        </Text> 
          <Transorderdetail   unamx={'alex'}  transorder_serial={this.state.passedData }  ></Transorderdetail>
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
