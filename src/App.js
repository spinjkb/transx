

import React from 'react';

import {Platform,   DeviceEventEmitter, NativeAppEventEmitter, ActivityIndicatorIOS, AsyncStorage} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {registerScreens, registerScreenVisibilityListener} from './screens/Route';

import { Icon } from 'react-native-elements';


 


import BackgroundTimer from 'react-native-background-timer'; 


global.Geolocation = require('Geolocation'); 

console.ignoredYellowBox =['Remote debugger'];
XMLHttpRequest = GLOBAL.originalXMLHttpRequest ? GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;



// const intervalId = BackgroundTimer.setInterval(() => {
//   // this will be executed every 200 ms
//   // even when app is the the background
//   console.log('tic');
// }, 5000);



// DevMenu.show();

function   initNavitems() {
    var items = [{
      label: 'Navigation',
      screen: 'example.Types',
      icon: require('../img/list.png'),
      title: 'Navigation Types',
    }, 

    {
      label: 'Actions',
      screen: 'example.Actions',
      icon: require('../img/swap.png'),
      title: 'Navigation Actions',
    },

    {
        label: '运单扫码',  
        screen: 'eureka.Transorders.Orderscan',
        icon: require('../img/transform.png'),
        title: '运单扫码',
    },

    {
        label: '运单2',
        screen: 'app.Transorders.index',
        icon: require('../img/transform.png'),
        title: '运单列表',
    },

 

      {
        label: 'Profile',
        screen: 'example.Profile',
        icon: require('../img/transform.png'),
        title: 'Profile2',
      }
    ];
  return items 
}



function setupItems(items){
  

  Navigation.startTabBasedApp({
  tabs:items,
  animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
  tabsStyle: {
    tabBarBackgroundColor: '#003a66',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#ff505c'
    
  }
  , appStyle: {
    tabBarBackgroundColor: '#003a66',
    navBarButtonColor: '#ffffff',
    tabBarButtonColor: '#ffffff',
    navBarTextColor: '#ffffff',
    tabBarSelectedButtonColor: '#ff505c',
    navigationBarColor: '#003a66',
    navBarBackgroundColor: '#003a66',
    statusBarColor: '#002b4c',
    tabFontFamily: 'BioRhyme-Bold',
    forceTitlesDisplay: true

  }
  ,

    drawer: {
      left: {
        screen: 'example.Types.Drawer'
      }

    }
   });


}



AsyncStorage.getItem("access_token")
.then( (token) =>
      {
        
         if(token){
                    console.log('已经登录')
                    return 1
                  }else{
                    console.log('没有登录')
                    return 0 
                  }
      }
)
.then( (flag) =>
    {
        console.log(flag)
        registerScreens(flag)
        let items=initNavitems();
        console.log(items)
        setupItems(items)

    }
).done();






 