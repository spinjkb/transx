'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import Camera from 'react-native-camera';


 

import { PermissionsAndroid } from 'react-native';


console.log('edit in chroem')

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>

       {/*<Text style={styles.capture} onPress={this.requestCameraPermission.bind(this)}>[ask]</Text>*/}





       <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
    onBarCodeRead={this.onBarCodeRead.bind(this)}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>


   
      </View>
    );
  }

  onBarCodeRead(e) {
    console.log(
        "Barcode Found!",
        "Type: " + e.type + "\nData: " + e.data
    );
  }


  
 async   requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        'title': 'Cool Photo App Camera Permission',
        'message': 'Cool Photo App needs access to your camera ' +
                   'so you can take awesome pictures.'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera")
    } else {
      console.log("Camera permission denied")
    }
  } catch (err) {
    console.warn(err)
  }
}


  async takePicture() {


    try {



    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        'title': 'Cool Photo App Camera Permission',
        'message': 'Cool Photo App needs access to your camera ' +
                   'so you can take awesome pictures.'
      }
    )
    
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera")

      const options = {};
    //options.location = ...
       this.camera.capture({metadata: options}).then((data) => console.log(data)).catch(err => console.error(err));


    } else {
      console.log("Camera permission denied")
    }
  } catch (err) {
    console.warn(err)
  }

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
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



export default Login;