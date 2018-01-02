import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  NativeModules,
  Alert
} from 'react-native';

import {Navigation} from 'react-native-navigation';
import Transorderdetail from './Transorderdetail'
import {Icon,Divider,  FormLabel,FormInput } from 'react-native-elements';
 
import JPushModule from 'jpush-react-native';



 


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

  class Orderscan extends React.Component {

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
     

      console.log('%c onNavigatorEvent event', 'background: #222; color: #bada55');
      console.log(event)

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
  
  
   componentDidMount() {
          // 在收到点击事件之前调用此接口
          JPushModule.notifyJSDidLoad((resultCode) => {
              if (resultCode === 0) {
              }
          });
          JPushModule.addReceiveNotificationListener((map) => {
              console.log("alertContent: " + map.alertContent);
              console.log("extras: " + map.extras);
              // var extra = JSON.parse(map.extras);
              // console.log(extra.key + ": " + extra.value);
          });
  }


  

  getLocation() {

      
      Geolocation.getCurrentPosition(
        location => {
              var result = "速度：" + location.coords.speed +
                          "\n经度：" + location.coords.longitude +
                          "\n纬度：" + location.coords.latitude +
                          "\n准确度：" + location.coords.accuracy +
                          "\n行进方向：" + location.coords.heading +
                          "\n海拔：" + location.coords.altitude +
                          "\n海拔准确度：" + location.coords.altitudeAccuracy +
                          "\n时间戳：" + location.timestamp;
              alert(result);
              
              let gps={coords:location.coords,timestamp:location.timestamp}
              
              let email = "joe@example.com";  
              let password = "donkeybrains";  
              let usersPath = "receviegps"
              
              fetch(API_ROOT+'transorder/receviegps', {  
                method: 'POST',
                body: JSON.stringify({
                  gps
                })
              })





          },
          error => {
            alert("获取位置失败："+ error)
          }
      );
}
 


 render() {
    return (
      <View style={styles.container}>
         
         <Icon
            raised
            name='heartbeat'
            type='font-awesome'
            color='#f50' 
            size={40}
            onPress={this.getLocation }
         />
        <Text>
            订单详情:
            {this.state.passedData } 
        </Text> 
         
          <Transorderdetail   unamx={'alex'}  transorder_serial={this.state.passedData }  ></Transorderdetail>
      </View>
    );
}

componentWillUnmount() {

    JPushModule.removeReceiveCustomMsgListener();
    JPushModule.removeReceiveNotificationListener();
    navigator = null;
  }

}


export default   Orderscan

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
