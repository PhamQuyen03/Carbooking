/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, TouchableOpacity
} from 'react-native';

import FBSDK from 'react-native-fbsdk';
import firebase from 'firebase';

const { LoginButton, AccessToken, LoginManager } = FBSDK;
const configure = {
  apiKey: "AIzaSyAi6LKa1ub-sm5evTr2NoJeRwJOKHibs2M",
  authDomain: "sample-49071.firebaseapp.com",
  databaseURL: "https://sample-49071.firebaseio.com",
  projectId: "sample-49071",
  storageBucket: "sample-49071.appspot.com",
  messagingSenderId: "654960816099"
};
firebase.initializeApp(configure);

export default class App extends React.PureComponent {
  // componentDidMount() {
  //   AccessToken.getCurrentAccessToken().then(
  //     (data) => {
  //       console.log(data.accessToken.toString());
  //     }
  //   )
  // }
  handlerLoginFb = () => {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login was cancelled');
        } else {
          alert('Login was successful with permissions: '
            + result.grantedPermissions.toString());
        }
      },
      function(error) {
        alert('Login failed with error: ' + error);
      }
    );
  }
  render() {
    return (
      <View>
        <LoginButton
          publishPermissions={['publish_actions']}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then((data) => {
                    const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                    firebase.auth().signInWithCredential(credential).then(result => {
                      LoginManager.logInWithReadPermissions(['public_profile', 'email']);
                      console.log('manager', LoginManager.getDefaultAudience().then(data => console.log('data', data)));
                    // do something
                      // const user = result.toString();
                      // alert("login succes.", result.toString());
                    }, (error) => {
                    // do something
                    });
                    // alert(data.accessToken.toString())
                  }, (error) => {
                    // do something
                  }
                )
              }
            }
          }
          onLogoutFinished={() => {}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
