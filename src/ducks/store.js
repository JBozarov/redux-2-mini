import { createStore, applyMiddleware, combineReducers } from 'redux'; 
import promiseMiddleware from 'redux-promise-middleware'; //middleware fires before action 

import hackerNewsReducer from './hackerNewsReducer'; 
import mediumReducer from './mediumReducer'; 
import radditReducer from './redditReducer'; 


const rootReducer = combineReducers({
    hackerNews: hackerNewsReducer, 
    medium: mediumReducer, 
    reddit: radditReducer,
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));