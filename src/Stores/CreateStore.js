import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistReducer, persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import AsyncStorage from '@react-native-community/async-storage'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    // 'auth',
  ],
}

export default (rootReducer, rootSaga) => {
  // Connect the sagas to the redux store
  const sagaMiddleware = createSagaMiddleware()
  const middlewareEnhancer = applyMiddleware(sagaMiddleware)

  // Redux persist
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = createStore(persistedReducer, composeWithDevTools(middlewareEnhancer))
  const persistor = persistStore(store)

  // Kick off the root saga
  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}
