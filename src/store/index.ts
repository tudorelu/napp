import {ENV} from 'react-native-dotenv'
import {createStore, applyMiddleware, compose, Store} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'
import {ERROR_MESSAGE} from './modules/error/actions'

const configureStore = (preloadedState?: any): Store => {
  const env = ENV || process.env.NODE_ENV
  // eslint-disable-next-line prefer-const
  let store: Store

  const sagaMiddleware = createSagaMiddleware({
    onError: (e: Error) => {
      console.log('Error in some redux saga')
      store.dispatch({type: ERROR_MESSAGE, payload: e})
    },
  })

  const composeEnhancers =
    global.window !== undefined
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      : compose

  const storeConfig =
    env === 'production'
      ? applyMiddleware(sagaMiddleware)
      : composeEnhancers(applyMiddleware(sagaMiddleware))

  store = createStore(rootReducer, preloadedState, storeConfig)

  if (env !== 'production' && (module as any).hot) {
    // Enable Webpack hot module replacement for reducers
    ;(module as any).hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
