/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */

import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, PixelRatio} from 'react-native'

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
            <View style={styles.container}>
                <View style={{margin:10}}>
                   <Text style={styles.mTextColor}>
                         
                       
                         
                         
                         {this.state.godsname} 
                         {this.state.carno} 
                         {this.state.startpoind} 
                         {this.state.drivername} 
                         {this.state.mao_zhong} 
                         {this.state.net_zhong} 
                         {this.state.pi_zhong} 

                    </Text>
                </View>
           </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        alignSelf: "stretch",
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: 2,
        backgroundColor: '#ecf0f1',

    },
    
    icon: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },

    rightContainer: {
        flex: 1,
        paddingLeft: 0,
        paddingRight: 0,
    },
    price: {
        color: color.theme
    },
    h1: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222222',
    },
    p: {
        fontSize: 13,
        color: '#777777',
    },
})

export default Transorderdetail
