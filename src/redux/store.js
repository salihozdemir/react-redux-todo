import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import taskReducer from './task/taskReducer'

const store = createStore(
  taskReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
