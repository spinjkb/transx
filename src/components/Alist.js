'use strict';

import {observable, autorun,computed} from 'mobx';
import React from 'react';
import PropTypes from 'prop-types';
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

  class   Alist extends React.Component
{

  constructor(){
    super();
    this.state = {
      selectedOption: null,
      selectedIndex: -1,
    };

  }
 
 
   renderOnerow( option, selected, onSelect, index) {
    

      const textStyle = {
        paddingTop: 10,
        paddingBottom: 10,
        color: 'black',
        flex: 1,
        fontSize: 14,
      };
      const baseStyle = {
        flexDirection: 'row',
      };
      var style;
      var checkMark;

      if (index > 0) {
        style = [baseStyle, {
          borderTopColor: '#eeeeee',
          borderTopWidth: 1,
        }];
      } else {
        style = baseStyle;
      }

      if (selected) {
        checkMark = <Text style={{
          flex: 0.1,
          color: '#007AFF',
          fontWeight: 'bold',
          paddingTop: 8,
          fontSize: 20,
          alignSelf: 'center',
        }}>✓</Text>;
      }

      return (
        <TouchableWithoutFeedback  key={index}>
          <View style={style}>
            <Text style={textStyle}>{option}</Text>
            {checkMark}
          </View>
        </TouchableWithoutFeedback>
      );
    }



 

    renderOneRow( option, selected, onSelect, index) {

      const textStyle = {
        paddingTop: 10,
        paddingLeft: 24,
        paddingBottom: 10,
        color: 'black',
        flex: 1,
        fontSize: 14,
      };

      const baseStyle = {
        flexDirection: 'row',
        borderTopWidth: 1,
      };

      var style;
      var checkMark;

      if (index > 0) {
        style = [baseStyle, {
          borderTopColor: '#eeeeee',
          borderTopWidth: 1,
          backgroundColor:'white',
        }];
      } 

      if (selected) {
        checkMark = <Text style={{
          flex: 0.1,
          color: 'red',
          fontWeight: 'bold',
          paddingTop: 8,
          fontSize: 20,
          alignSelf: 'center',
        }}>✓</Text>;
      }

      return (                   
        <TouchableWithoutFeedback onPress={() => this.selectOne(index,option)} key={index}>
          <View style={style}>
            <Text style={textStyle}>{option}</Text>
               { this.renderMark( this.state.selectedIndex, {index} ) }

          </View>
        </TouchableWithoutFeedback>
      );
    }

  
  renderMark( selectedIndex,index){
     if(selectedIndex === index.index){
      return (
      <Text style={{
          flex: 0.1,
          color: 'red',
          fontWeight: 'bold',
          paddingTop: 8,
          fontSize: 20,
          alignSelf: 'center',
        }}>✓</Text>
        )

     }else
     {
     return null;
     }
  }


  selectOne(index,option){
 
    //取消选择 
    if( this.state.selectedIndex ==index){

        ConfigStore.Configs.hello=option
        // ConfigStore.Configs.announce.dest_id=-1;
        // ConfigStore.Configs.announce.dest_text=null;


       this.setState({
           selectedOption: null,
           selectedIndex: -1
          });

    }else
    {
        
        this.setState({
           selectedOption: option,
           selectedIndex: index
          });
     
     ConfigStore.Configs.hello=option
     // ConfigStore.Configs.announce.dest_id=index;
     // ConfigStore.Configs.announce.dest_text=option;

    }
 
  }

  render() {
    
    return ( 
           <ScrollView style={styles.container}>
             <View style={{flex: 1}}>
            <View style={{marginTop: 10, backgroundColor: 'white'}}>
              <Text style={{padding: 20, fontWeight:'bold'}}>选择</Text>

              <View style={{
                backgroundColor: '#eeeeee',
                paddingTop: 5,
                paddingBottom: 5,
              }}>
                <Text style={{
                  color: '#555555',
                  paddingLeft: 20,
                  marginBottom: 5,
                  marginTop: 5,
                  fontSize: 14,
                }}>列表</Text>

                 { this.props.cfgdata.map((item) =>  this.renderOneRow( item.value, false, null, item.key) ) }

              </View>
              <Text style={{
                margin: 20,
              }}>
              
               当前选择:{this.state.selectedOption}

              </Text>
            </View>
          </View>
         </ScrollView>
       )
    }
}

export default Alist


const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#ffffff',
  },

});

 