/**
 * Sample React Native BookingCar
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import ButtonLoginFB from './components/LoginFacebook';

import withConnect from './withConnect';
// 
@withConnect
export default class BookingCar extends React.PureComponent {
  static propTypes = {
    getArticles: PropTypes.func.isRequired,
  };

constructor(props) {
  super(props);
  this.getArticles = this.props.getArticles.bind(this);
}
  componentDidMount() {
    this.getArticles('full-size-articles');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit BookingCar.js
        </Text>
        <Text style={styles.instructions}>
          {'instructions'}
        </Text>
        <ButtonLoginFB />
      </View>
    );
  }
}
// const mapDispatchToProps = dispatch => ({
//   getArticles: (type) => {
//     dispatch(getArticleCategories(type));
//   },
// });

// const mapStateToProps = state => ({
// });

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
// export default connect(mapStateToProps, mapDispatchToProps)(BookingCar);
