import React, {ReactNode} from 'react'
import {Text, Button} from 'react-native'

import {getAuthIsSuccess} from '../store/modules/auth/selectors'
import {authStart} from '../store/modules/auth/actions'

import {connect} from 'react-redux'
import {compose} from 'redux'

// TODO: Move to other component
const mapStateToProps = (state: any) => ({
  auth: getAuthIsSuccess(state),
})

const mapDispatchToProps = (dispatch: any) => ({
  authStart: () => dispatch(authStart()),
})

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

const AuthTest: React.FC<Props> = ({auth, authStart}: Props) => {
  return (
    <>
      <Text>AUTH = {auth ? 'true' : 'false'}</Text>
      <Button title="auth" onPress={() => authStart()}></Button>
    </>
  )
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)

export default enhance(AuthTest)
