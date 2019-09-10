//Authored by: Tudor Barbulescu (tudor.barbu7@gmail.com) ROMANIA + AUSTRALIA
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, TouchableOpacity} from 'react-native'
import {TransferTransaction, nulsToNa, Utxo} from 'nuls-js'
import GenericScreen from '../components/GenericScreen'
import PrimaryButton from '../components/PrimaryButton'
import InputField from '../components/InputField'
import {Icon} from 'react-native-elements'
import theme from '../theme'

const styles = StyleSheet.create({
  button: {
    ...theme.primaryButton,
  },
  buttonText: {
    ...theme.buttonText,
  },
})

class SendScreen extends Component {
  static propTypes = {
    navigation: PropTypes.navigation,
  }
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state
    return {
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-left"
            type="feather"
            color="#FFF"
            containerStyle={{marginRight: 14, marginLeft: 14}}
            size={24}
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Share')}>
          <Icon
            name="share-2"
            type="feather"
            color="#FFF"
            containerStyle={{marginRight: 14, marginLeft: 14}}
            size={24}
          />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: theme.palette.primary.light,
        paddingTop: 0,
        marginTop: 0,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
    }
  }

  constructor(props) {
    super(props)
    this.state = {address: '', amount: '', note: ''}
  }

  async sendNuls() {
    console.log('Sending some NULS ... ')

    const fromAddress = 'TTatokAfGRC6ACmqaoXqWniAEwqSvzrc'
    const privateKey =
      '040b12fa6405badc1328904f05ef45e89e0606cfe4f03cd5f97bf20a04611c74'
    const toAddress = 'TTaisi5BDnwooxFZg5D8vLktSuSrHtpS'
    const anotherAddress = 'TTattJmAz28RNH95VsRqnGNRhvKAV5Fj'

    const transactionConfig = {
      api: {
        host: 'http://apitn1.nulscan.io/',
      },
    }

    const utxos = await Utxo.getUtxos(fromAddress, transactionConfig.api)

    console.log('Got utxos: ')
    console.log(utxos)

    const tx = TransferTransaction.fromUtxos(utxos)
      .config(transactionConfig)
      .change(fromAddress)
      .to(toAddress, nulsToNa(1.7))
      .to(anotherAddress, nulsToNa(7))
      .remark('test transfer :)')
      .sign(privateKey)

    console.log(tx.getType())
    // 2

    const txReceipt = await tx.send()

    console.log('Got receipt: ')
    console.log(txReceipt)
  }

  render() {
    return (
      <GenericScreen title="Send Funds" avatar="upload">
        <InputField
          label="Address Receiver"
          onChangeText={address => this.setState({address})}
          value={this.state.address}
        />
        <InputField
          label="Amount"
          onChangeText={amount => this.setState({amount})}
          value={this.state.amount}
        />
        <InputField
          label="Note"
          multiline
          placeholder="Enter Here"
          placeholderTextColor="rgba(255,255,255,0.3)"
          numberOfLines={4}
          onChangeText={note => this.setState({note})}
          value={this.state.note}
        />

        <PrimaryButton title="Send" onPress={() => this.sendNuls()} />
      </GenericScreen>
    )
  }
}

export default SendScreen
