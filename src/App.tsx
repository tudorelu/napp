/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Fragment, ReactElement} from 'react'
import {SafeAreaView, ScrollView, View, Text, StatusBar, Platform, StyleSheet} from 'react-native'

import {ENV} from 'react-native-dotenv'
import Container from './components/Container'
import Header from './components/Header'

import AppNavigator from './navigation/AppNavigator'

const App = (): ReactElement => {
  const usingHermes =
    typeof HermesInternal === 'object' && HermesInternal !== null

  return (
    <Fragment>
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        {<AppNavigator />}
      </View>
      {/* <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header title="Nuls App" />
          <Container>
            {!usingHermes ? null : <Text>Engine: Hermes</Text>}
            <Text>Using Config | ENV = {ENV}</Text>
          </Container>
        </ScrollView>
      </SafeAreaView> */}
    </Fragment>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
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

export default App
