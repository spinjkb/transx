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


import * as AppConstClass from '../config/constants';
 

const ACCESS_TOKEN = AppConstClass.ACCESS_TOKEN;



class Profile extends React.Component {

	componentWillMount() {
     
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
          <Text style={styles.buttonText}>xLogout</Text>
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
    paddingTop: 180
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
