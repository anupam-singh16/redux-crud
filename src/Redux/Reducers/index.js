import Reducers from "./Reducer";
import {combineReducers} from   "redux"
import {ApiReducer} from "./ApiReducer"

 

const rootReducers = combineReducers({
    Reducers,
    ApiReducer,
    // setState,
})

export default rootReducers