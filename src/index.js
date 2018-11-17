import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import './css/index.css'

import App from './components/App'
import rootReducer from './reducers'
import { bucketSelectDefault } from './reducers/bucketSelect'
import { chooseBucket } from './actions/bucket'
import { fetchBucketIfNeeded } from './actions/request'

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
)

let defaultBucket = bucketSelectDefault()
store.dispatch(fetchBucketIfNeeded(defaultBucket))
  .then(() => store.dispatch(chooseBucket(defaultBucket)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)
