import {Platform,  ActivityIndicatorIOS, AsyncStorage} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {registerScreens, registerScreenVisibilityListener} from './screens/Route';

console.ignoredYellowBox =['Remote debugger'];
XMLHttpRequest = GLOBAL.originalXMLHttpRequest ? GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;




function   initTabs() {
    var apptabs = [{
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
        label: 'Transi88',
        screen: 'example.Transitions',
        icon: require('../img/transform.png'),
        title: 'Navigation Transitions',
      }
      ,

      {
        label: 'Profile',
        screen: 'example.Profile',
        icon: require('../img/transform.png'),
        title: 'Profile2',
      }
    ];
  return apptabs 
}



function setupTabs(apptabs){
  

  Navigation.startTabBasedApp({
  tabs:apptabs,
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
        let apptabs=initTabs();
        console.log(apptabs)
        setupTabs(apptabs)

    }
).done();






 