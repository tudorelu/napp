'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

import theme from '../theme';

class SelectUserFlowScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<Text style={styles.title}> Select Flow User Flow You Want To Take </Text>
      	<Text style={styles.subtitle}> This page is for testing purposes 
      	and will not be part of the finished app. </Text>
        
        <PrimaryButton title="First Time Login" 
        onPress={() => this.props.navigation.navigate('FirstTimeAuth')} />
        
        <PrimaryButton title="Normal Login" 
        onPress={() => this.props.navigation.navigate('NormalAuth')} />

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


export default SelectUserFlowScreen;