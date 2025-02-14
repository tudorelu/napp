/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import {Platform} from 'react-native'
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import LinksScreen from '../screens/LinksScreen'
import SettingsScreen from '../screens/SettingsScreen'

import ReceiveScreen from '../screens/ReceiveScreen'
import CreateWalletScreen from '../screens/CreateWalletScreen'
import SendScreen from '../screens/SendScreen'

const ReceiveStack = createStackNavigator({
  Receive: ReceiveScreen,
})

ReceiveStack.navigationOptions = {
  tabBarLabel: 'Receive',
  tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="md-down" />,
}

const CreateWalletStack = createStackNavigator({
  CreateWallet: CreateWalletScreen,
})

CreateWalletStack.navigationOptions = {
  tabBarLabel: 'Create Wallet',
  tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="md-plus" />,
}

const SendStack = createStackNavigator({
  Send: SendScreen,
})

SendStack.navigationOptions = {
  tabBarLabel: 'Send',
  tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="md-up" />,
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}

const LinksStack = createStackNavigator({
  Links: LinksScreen,
})

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
}

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
})

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
}

export default createBottomTabNavigator({
  ReceiveScreen,
  SendScreen,
  CreateWalletScreen,
  HomeStack,
  LinksStack,
  SettingsStack,
})
