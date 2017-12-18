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


class Profile extends React.Component {

	componentWillMount() {
    this.getToken();
  }

  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }

  async getToken() {
    try {
      let accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);
      if(!accessToken) {
          console.log("Token not set");
      } else {
          this.verifyToken(accessToken)
      }
    } catch(error) {
        console.log("Something went wrong");
    }
  }
  //If token is verified we will redirect the user to the home page
  async verifyToken(token) {
    let accessToken = token

    try {
      let response = await fetch('https://afternoon-beyond-22141.herokuapp.com/api/verify?session%5Baccess_token%5D='+accessToken);
      let res = await response.text();
      if (response.status >= 200 && response.status < 300) {
        //Verified token means user is logged in so we redirect him to home.
        this.navigate('home');
      } else {
          //Handle error
          let error = res;
          throw error;
      }
    } catch(error) {
        console.log("error response: " + error);
    }
  }
    pushRegisterScreen = () => {
    this.props.navigator.push({
      screen: 'example.Types.Push',
      title: '注册',
    });
  };

   pushLoginScreen = () => {
    this.props.navigator.push({
      screen: 'app.Profile.Login',
      title: '登录',
    });
  };


  render() {
    return (
       <View style={styles.container}>
        <Text style={styles.title}>Profile </Text>
        <TouchableHighlight onPress={this.pushRegisterScreen} style={styles.button}>
          <Text style={styles.buttonText}>注册2</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress= {this.pushLoginScreen}  style={styles.button}>
          <Text style={styles.buttonText}>登录</Text>
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
