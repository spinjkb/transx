import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Button,
  NativeModules,
  Alert
} from 'react-native';

import {Navigation} from 'react-native-navigation';
 
import {Icon,  FormLabel,FormInput } from 'react-native-elements';
  
import {observable, autorun,computed} from 'mobx';
 
import { observer } from 'mobx-react';

@observer
class Announce extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
            passedData:null
        };
  }

  componentWillMount() {
    navigator = this.props.navigator;
  }


   onPopPressed(){
       console.log(this.props);
       this.props.navigator.showModal({
          screen: 'DataBridge',
          title: '选择收货地点'
       });

  
  }

 // @observable city =  "BJ"

 
 @observable city = ConfigStore.Configs.hello;

 
 _onPress = () => {
    this.city='arrow'
    console.log(this.city)
    Alert.alert('change()city!'+this.city);
    
};

 
 render() {
    return (
      <ScrollView style={styles.container}>

      <Text  style={{fontSize:16}}>{this.city}</Text>
 
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
       <TouchableWithoutFeedback style={styles.fullWidthButton} onPress={this.onPopPressed.bind(this)}   underlayStyle={{style:'white'}}     >
         <View  style={{ backgroundColor:"#F5F5F5",paddingTop:15,  borderColor: 'black', borderBottomWidth:1,height:40,marginLeft:20, width:225  }} >
          <Text  style={{fontSize:16}}>{this.city}</Text>
         </View>
       </TouchableWithoutFeedback>
      </View>


      <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >货品名称</FormLabel>
        <View style={styles.inputWrap}>
         <FormInput  inputStyle={styles.inputcvv}  underlineColorAndroid="#100F0E"   selectionColor="rgba(0,0,0,0.4)"   onChangeText={ (text)=> this.setState({email: text})} />
        </View>
      </View>

 
      <View style={styles.row}>
        <FormLabel  labelStyle={styles.FormLabel}   >单价(吨公里)</FormLabel>
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

    <Button onPress={this._onPress.bind(this)} title="bad_bind" color="blue" accessibilityLabel="Tap on Me"/>
    </ScrollView>
    );

  }
}

 
 export default   Announce


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

  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10
  },
 
   fullWidthButton: {
    backgroundColor: 'red',
    color:"red",
    height:40,
    width:230,
    borderWidth: 1,
    marginLeft:20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red'
  },

 
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: 'white',
  },  
  inputcvv: {
    fontSize: 16,
    color: "#100F0E"

  }
});