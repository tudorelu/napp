import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Platform, Text} from 'react-native'

import * as Authentication from 'expo-local-authentication'
import styled from 'styled-components/native'
import {Title} from '../components/Title'
import {getAuthIsLoading} from '../store/modules/auth/selectors'
import {compose} from 'redux'

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`

const Box = styled.View`
  background-color: #ffffff;
  width: 80%;
  height: 100px;
  border-radius: 7px;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 10px;
`

const mapStateToProps = (state: any) => {
  return {
    authLoading: getAuthIsLoading(state),
  }
}

type Props = ReturnType<typeof mapStateToProps>

class AuthMessage extends Component<Props> {
  onCancel() {
    Authentication.cancelAuthenticate()
  }

  render() {
    const {authLoading} = this.props

    if (Platform.OS !== 'ios' && authLoading) {
      return (
        <Container>
          <Box>
            <Title>Authentication required</Title>
            <Text>Please, auth with fingerprint</Text>
          </Box>
        </Container>
      )
    } else {
      return null
    }
  }
}

const enhance = compose(connect(mapStateToProps))

export default enhance(AuthMessage)
