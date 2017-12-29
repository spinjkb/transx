/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */

import React, {PureComponent} from 'react'
import {View, Text, TextInput,StyleSheet, TouchableOpacity, Image, PixelRatio} from 'react-native'
import { PermissionsAndroid } from 'react-native';


import {Icon,Divider, Button,FormLabel,FormInput } from 'react-native-elements';
 

const color = {
    theme: '#06C1AE',
    border: '#e0e0e0',
    background: '#f3f3f3'
}



class Transorderdetail extends PureComponent {


    setNativeProps = (nativeProps) => {
        this._root.setNativeProps(nativeProps);
    }


    constructor(props){
        super(props);
      
        
        this.state = {
        error:null,
        loading: false,
        refreshing: false,
        drivername:'',
        carno:'',
        startpoind:'',
        godsname:'',
        randnum:'',
        mao_zhong:'',
        net_zhong:'',
        pi_zhong:'',

        }
    }


 
 
      
   
   componentWillReceiveProps(){

        
        console.log('************************',this.props)
        const url =this.props.transorder_serial;
        
        if(! url){
            console.log('##########################no url =blank ')
            return undefined;
        }

        
        fetch(url)
          .then(res => res.json())
          .then(res => {
            this.setState(
            {
              
                error: res.error || null,
                loading: false,
                refreshing: false,
                drivername:res.drivername,
                carno:res.carno,
                randnum:res.randnum,
                startpoind:res.startpoind,
                godsname:res.godsname,
                mao_zhong:res.mao_zhong,
                net_zhong:res.net_zhong,
                pi_zhong:res.pi_zhong
            });
          })
          .catch(error => {
            console.log(error)
            this.setState({ error, loading: false });
          });


   }



    render() {
        
        return (
            <View>
  


                <FormLabel>货品C</FormLabel>
                 <FormInput  underlineColorAndroid="#112233" readonly     value= {this.state.godsname}   />

                 <FormLabel>车牌号码</FormLabel>
                 <FormInput  underlineColorAndroid="#112233" readonly    value= {this.state.carno}   />

                 <FormLabel>司机名称</FormLabel>
                 <FormInput  underlineColorAndroid="#112233"  readonly  value= {this.state.drivername}   />

                 <FormLabel>毛重</FormLabel>
                 <FormInput  underlineColorAndroid="#112233"  readonly  value= {this.state.mao_zhong}   />

                 <FormLabel>净重</FormLabel>
                 <FormInput  underlineColorAndroid="#112233"  readonly  value=  {this.state.net_zhong}   />

                 <FormLabel>皮重</FormLabel>
                 <FormInput  underlineColorAndroid="#FF0000"    value=  {this.state.pi_zhong}    />


                               

               
           </View>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 0,
    backgroundColor: '#ecf0f1',
  },

  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

 
export default Transorderdetail
