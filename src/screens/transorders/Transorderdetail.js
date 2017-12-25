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

    constructor(props){
    super(props);

    this.state = {
      transorder_serial: "",     
      merchantName: "商户",
      goodsName:'二887煤',
       
     }
    }



    render() {
        
        return (
            <View style={styles.container}>
                <View style={{margin:30}}>
                   <Text style={styles.mTextColor}> 
                        {this.state.goodsName} 
                    </Text>
                </View>

           </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: 10,
        backgroundColor: '#ecf0f1',

    },
    
    icon: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 10,
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
