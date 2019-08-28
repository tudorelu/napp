'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import PrimaryButton from '../components/PrimaryButton'

import theme from '../theme';

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<Text style={styles.title}> Choose Account </Text>
        
        <PrimaryButton title="Login" onPress={() => this.props.navigation.navigate('Pin', {
              nextPage: 'App',
            })} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...theme.darkScreenRoot,
  },
	title:{
    ...theme.title,
		color: 'white',
	},
	subtitle:{
    ...theme.subtitle,
		color:'#ddd'
	}
});


export default LoginScreen;