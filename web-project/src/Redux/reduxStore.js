import { applyMiddleware, combineReducers, createStore } from 'redux'
import { compose } from 'redux'
import thunk from 'redux-thunk'
import TrainsReducer from './trains-reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let reducers = combineReducers({ TrainsReducer })

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store
