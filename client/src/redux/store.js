import  { createStore,applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'
import { reducer } from './reducer'

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore (reducer , compose(applyMiddleware(thunk), devtools))

export default store ; 