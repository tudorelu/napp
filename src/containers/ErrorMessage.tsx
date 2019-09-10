import {Component} from 'react'
import {connect} from 'react-redux'
import {Alert} from 'react-native'
import {compose} from 'redux'

const mapStateToProps = (state: any) => {
  return {
    error: state.error,
  }
}

type Props = ReturnType<typeof mapStateToProps>

class ErrorMessage extends Component<Props> {
  render(): null {
    const {error} = this.props

    if (error) {
      Alert.alert('Error', error.message)
    }

    return null
  }
}

const enhance = compose(connect(mapStateToProps))

export default enhance(ErrorMessage)
