/*
This is a view i use in a test app,
very useful to list all the use cases
*/

import React from 'react';

import {
  AppRegistry,
  StyleSheet,TextInput,
  Text,DatePickerAndroid,
  View,ScrollView,TouchableHighlight, Modal
} from 'react-native';




import { Form,
  Separator,InputField, LinkField,
  SwitchField, PickerField,DatePickerField,TimePickerField
} from 'react-native-form-generator';


import {Divider,Icon, Button,FormLabel,FormInput } from 'react-native-elements';


  
export default class Announce extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formData:{}
    }
  }


  componentWillMount() {
    navigator = this.props.navigator;
  }


  showdate(){
        try {
  const {action, year, month, day} =  DatePickerAndroid.open({
    // Use `new Date()` for current date.
    // May 25 2020. Month 0 is January.
    date: new Date(2020, 4, 25)
  });
  if (action !== DatePickerAndroid.dismissedAction) {
    // Selected year, month (0-11), day
  }
} catch ({code, message}) {
  console.warn('Cannot open date picker', message);
}
     
  }

  handleFormChange(formData){
    

    this.setState({formData:formData})
    this.props.onFormChange && this.props.onFormChange(formData);
  }
  handleFormFocus(e, component){
    //console.log(e, component);
  }
  openTermsAndConditionsURL(){

  }
  resetForm(){

    this.refs.registrationForm.refs.first_name.setValue("");
    this.refs.registrationForm.refs.last_name.setValue("");
    this.refs.registrationForm.refs.other_input.setValue("");
    this.refs.registrationForm.refs.meeting.setDate(new Date());
    this.refs.registrationForm.refs.has_accepted_conditions.setValue(false);
  }
  render(){

 return (
 
     <ScrollView>

      <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >运输计划号</FormLabel>

        <View style={styles.inputWrap}>
         <FormInput  inputStyle={styles.inputcvv}  underlineColorAndroid="#100F0E"   selectionColor="rgba(0,0,0,0.4)"   onChangeText={ (text)=> this.setState({email: text})} />
        </View>
      </View>

      <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >发货地点</FormLabel>

        <View style={styles.inputWrap}>
         <FormInput  inputStyle={styles.inputcvv}  underlineColorAndroid="#100F0E"   selectionColor="rgba(0,0,0,0.4)"   onChangeText={ (text)=> this.setState({email: text})} />
        </View>
      </View>

    
      <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >收货地点</FormLabel>

        <View style={styles.inputWrap}>
         <FormInput  inputStyle={styles.inputcvv}  underlineColorAndroid="#100F0E"   selectionColor="rgba(0,0,0,0.4)"   onChangeText={ (text)=> this.setState({email: text})} />
        </View>
      </View>


      <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >货品名称</FormLabel>
        <View style={styles.inputWrap}>
         <FormInput  inputStyle={styles.inputcvv}  underlineColorAndroid="#100F0E"   selectionColor="rgba(0,0,0,0.4)"   onChangeText={ (text)=> this.setState({email: text})} />
        </View>
      </View>

 
      <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >单价(顿公里)</FormLabel>
        <View style={styles.inputWrap}>
         <FormInput  inputStyle={styles.inputcvv}  underlineColorAndroid="#100F0E"   selectionColor="rgba(0,0,0,0.4)"   onChangeText={ (text)=> this.setState({email: text})} />
        </View>
      </View>

      <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >发车时间</FormLabel>
        <View style={styles.inputWrap}>
         <FormInput  inputStyle={styles.inputcvv}  underlineColorAndroid="#100F0E"   selectionColor="rgba(0,0,0,0.4)"   onChangeText={ (text)=> this.setState({email: text})} />
        </View>
      </View>
      
       <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >联系电话</FormLabel>
        <View style={styles.inputWrap}>
         <FormInput  inputStyle={styles.inputcvv}  underlineColorAndroid="#100F0E"   selectionColor="rgba(0,0,0,0.4)"   onChangeText={ (text)=> this.setState({email: text})} />
        </View>
       </View>
      
       <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >需要车型</FormLabel>
        <View style={styles.inputWrap}>
         <FormInput  inputStyle={styles.inputcvv}  underlineColorAndroid="#100F0E"   selectionColor="rgba(0,0,0,0.4)"   onChangeText={ (text)=> this.setState({email: text})} />
        </View>
       </View>

      <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >需要车辆数</FormLabel>
        <View style={styles.inputWrap}>
         <FormInput  inputStyle={styles.inputcvv}  underlineColorAndroid="#100F0E"   selectionColor="rgba(0,0,0,0.4)"   onChangeText={ (text)=> this.setState({email: text})} />
        </View>

       </View>

     <Button
          raised
          icon={{name: 'home', size: 32}}
          buttonStyle={{width:150,backgroundColor: 'red',marginTop:20, borderRadius: 9}}
          textStyle={{textAlign: 'center'}}
          title={`发布`}
       />



    </ScrollView>

                 

         
 
 )

    }
  }
 
  const styles = StyleSheet.create({
  row: {
    flex: 0,
    flexDirection: "row",
    height:45,
    marginLeft:5,
    marginRight:5,
    marginTop:10,
    
  },

   FormLabel:{
   fontSize:16,
   color:'#100F0E',
   marginRight:0,
   fontWeight:"normal"
  },

  inputWrap: {
    flex: 1,
    marginTop: 4,

  },

  
  inputcvv: {
    fontSize: 16,
    color: "#100F0E"

  }
});