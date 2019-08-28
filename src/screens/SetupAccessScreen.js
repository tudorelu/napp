
import React, { Component } from 'react';

import { StyleSheet, View,  Text } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

import theme from '../theme';

class SetupAccessScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Wallet Setup </Text>
        <Text style={styles.subtitle}> Setup Access To Your Wallet With A Pin Code and your Fingerprint. </Text>
        <PrimaryButton title="Start Setup" 
        onPress={() => this.props.navigation.navigate('Disclaimer')} />
        {/*<PrimaryButton title="Setup Fingerprint" 
        onPress={() => this.props.navigation.navigate('Disclaimer')} />*/}
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
    color:'white'
  },
  subtitle:{
    ...theme.subtitle,
    color:'#ddd'
  }
});


export default SetupAccessScreen;