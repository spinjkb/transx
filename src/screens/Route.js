
import {Navigation, ScreenVisibilityListener} from 'react-native-navigation';

import {
  ActivityIndicatorIOS,
  AsyncStorage
} from 'react-native';


import Storage from 'react-native-storage';


import Types from './types/NavigationTypes';
import Actions from './actions/Actions';

import Transitions from './transitions/Transitions';
import Profile  from './profile/Profile';

 
import Push from './types/Push';
import Drawer from './types/Drawer';
import ListScreen from './types/ListScreen';
import DummyScreen from './types/DummyScreen';
import LightBox from './types/LightBox';
import Notification from './types/Notification';
import Modal from './types/Modal';
import CustomTopBarScreen from './types/CustomTopBarScreen';
import CustomButtonScreen from './types/CustomButtonScreen';
import TopTabs from './types/TopTabs';
import TabOne from './types/tabs/TabOne';
import TabTwo from './types/tabs/TabTwo';

import CollapsingHeader from './transitions/CollapsingHeader';
import SharedElementTransitions from './transitions/SharedElementTransitions';

import Cards from './transitions/sharedElementTransitions/Cards/Cards';
import CardsInfo from './transitions/sharedElementTransitions/Cards/Info';

import Masonry from './transitions/sharedElementTransitions/Masonry/Masonry';
import MasonryItem from './transitions/sharedElementTransitions/Masonry/Item';


import Login from './auth/Login';
 
import Transorders  from './transorders/Transorders';
import Blank        from './transorders/Blank';

import Qrscanner        from './qrcode/Qrscanner';

 

 
   function   checkAuth(flag,fun) {
      
       console.log(flag)
       if(flag ==1){
           return fun
       }else{



            Login.prototype.tsf=function(){
              console.log('function setted from route')
            }

            // Login.tsf()
            // let magicn=8964
            let  redirectfun= () => { 
                
                 Login.prototype.cbpush=function(){
                      return fun
                 }

                 return  Login
                }

           console.log('--------------------------------') 
           return redirectfun
        // return {<Login />}
       }
   }

 
 


export function registerScreens(logedflag){

  Navigation.registerComponent('example.Types', () => Types);
  Navigation.registerComponent('example.Actions', () => Actions);
  Navigation.registerComponent('example.Transitions', () => Transitions);
  Navigation.registerComponent('example.Profile',     checkAuth( logedflag, () => Profile ) );
 
  
  Navigation.registerComponent('example.Types.Push', () => Push);
  Navigation.registerComponent('example.Types.Drawer', () => Drawer);
  Navigation.registerComponent('example.Types.Screen', () => Drawer);
  Navigation.registerComponent('example.Types.ListScreen', () => ListScreen);
  Navigation.registerComponent('example.Types.DummyScreen', () => DummyScreen);
  Navigation.registerComponent('example.Types.Modal', () => Modal);
  Navigation.registerComponent('example.Types.LightBox', () => LightBox);
  Navigation.registerComponent('example.Types.Notification', () => Notification);
  Navigation.registerComponent('example.Types.CustomTopBarScreen', () => CustomTopBarScreen);
  Navigation.registerComponent('example.Types.CustomButtonScreen', () => CustomButtonScreen);
  Navigation.registerComponent('example.Types.TopTabs', () => TopTabs);
  Navigation.registerComponent('example.Types.TopTabs.TabOne', () => TabOne);
  Navigation.registerComponent('example.Types.TopTabs.TabTwo', () => TabTwo);

  Navigation.registerComponent('example.Transitions.CollapsingHeader', () => CollapsingHeader);
  Navigation.registerComponent('example.Transitions.SharedElementTransitions', () => SharedElementTransitions);
  Navigation.registerComponent('example.Transitions.SharedElementTransitions.Cards', () => Cards);
  Navigation.registerComponent('example.Transitions.SharedElementTransitions.Cards.Info', () => CardsInfo);
  Navigation.registerComponent('example.Transitions.SharedElementTransitions.Masonry', () => Masonry);
  Navigation.registerComponent('example.Transitions.SharedElementTransitions.Masonry.Item', () => MasonryItem);
 

  Navigation.registerComponent('app.Transorders.index', () => Transorders);
  Navigation.registerComponent('app.Transorders.blank', () => Blank);
  Navigation.registerComponent('Qrscanner', () => Qrscanner);

 


}


export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
    didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
    didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
  }).register();
}
