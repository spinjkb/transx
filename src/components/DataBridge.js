import React from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableWithoutFeedback } from 'react-native';
// import { RadioButtons } from 'react-native-radio-buttons';


import { Plainlist } from './Plainlist';
  
import  Alist from './Alist';


let listoptions = 
     [
       {key:1,value:'American'},
       {key:2,value:'Australian'},
       {key:3,value:'xAustralian'},
       {key:4,value:'1xAustralian'},
       {key:5,value:'34xAustralian'} 
 
     ];


export default class DataBridge extends React.Component {

  componentWillMount() {
    navigator = this.props.navigator;
  }
 
   
   

  render() {
    return (
      <ScrollView style={styles.container}>
        <Alist cfgdata={listoptions} />
      </ScrollView>
    );
  }
 

}

 
const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#ffffff',
  }

});

 




