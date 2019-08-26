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
import {SafeAreaView, ScrollView, Text, StatusBar} from 'react-native'

import {ENV} from 'react-native-dotenv'
import Container from './components/Container'
import Header from './components/Header'

const App = (): ReactElement => {
  const usingHermes =
    typeof HermesInternal === 'object' && HermesInternal !== null

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header title="Nuls App" />
          <Container>
            {!usingHermes ? null : <Text>Engine: Hermes</Text>}
            <Text>Using Config | ENV = {ENV}</Text>
          </Container>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  )
}

export default App
