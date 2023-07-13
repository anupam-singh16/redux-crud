import {createStore} from "redux"; 
import rootReducers  from "./Reducer";

const Store = createStore(rootReducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default Store;


// import {createStore} from "redux"; 
// import rootReducers  from "./Reducer/reducers1";

// const Store = createStore(rootReducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export default Store;