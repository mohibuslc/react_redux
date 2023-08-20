
// store.jsx 


import rootReducer from "../../rootReducer/rootReducer";
import { createStore, applyMiddleware } from "redux";

// Create first Middleware ; 


const myLogger = (store) => (next) => (action) => {


    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Before:${JSON.stringify(store.getState())}`);

    const upComingState = [action].reduce(rootReducer, store.getState());


    console.log(`upComingState: ${JSON.stringify(upComingState)}`)

    // Pass Action 

    return next(action);


};


const store = createStore(rootReducer, applyMiddleware(myLogger));


export default store;
