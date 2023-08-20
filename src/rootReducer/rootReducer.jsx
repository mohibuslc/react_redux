


// Develop rootReducer ; 

import dynamicReducer from "../dynamicData/dynamicReducer" ;

import counterReducer from '../Redux/Counter/counterReducer'

import{combineReducers} from 'redux'



const rootReducer = combineReducers({

count: counterReducer , 

dynamicValue: dynamicReducer


})

export default rootReducer ; 
