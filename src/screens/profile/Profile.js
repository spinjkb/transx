import React from 'react';
 

import   {
  Component,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Text,
  View
} from 'react-native';


import * as AppConstClass from '../../config/constants';
 

const ACCESS_TOKEN = AppConstClass.ACCESS_TOKEN;

import { observer, inject } from "mobx-react";
@observer

class Profile extends React.Component {

	componentWillMount() {
  
     // console.log(this)

      this.props.navigator.push({
          screen: 'sys_login_reg',
          title: '登录',
          backButtonHidden:true,
          // passProps: {
          //   onPassProp: (data) => {
          //     this.setState({passedData: data})  //强制订单详情进行重新渲染.
          //     this.forceUpdate()

          //   }
          // }
       });

     
  }

  componentDidMount() {
     console.log(this)
     if(this.tsf){
                 this.tsf()
     }
  }





  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }

  async deleteToken() {
    try {
        await AsyncStorage.removeItem(ACCESS_TOKEN)
        // this.redirect('root');
    } catch(error) {
        console.log("Something went wrong");
    }
  }
      

  onLogout(){
    // this.setState({showProgress: true})
    this.deleteToken();
  }

  


      

    

  render() {
    return (
       <View style={styles.container}>
        <Text style={styles.title}>Profile </Text>
       

        <TouchableHighlight onPress= { this.onLogout.bind(this) }  style={styles.button}>
          <Text style={styles.buttonText}>退出登录?</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 80
  },

  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center'
  },
  
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  
  title: {
    fontSize: 25,
    marginBottom: 15
  }
});



export default Profile;
