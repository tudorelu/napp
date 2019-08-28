'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import theme from '../theme';

class PersonalAccountPickerScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<Text style={styles.title}> Choose Account </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...theme.lightScreenRoot,
    flexDirection: 'column',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  title:{
    ...theme.title,
    color: '#383838'
  },
  text:{
    ...theme.subtitle,
    color: '#383838'
  },
});


export default PersonalAccountPickerScreen;