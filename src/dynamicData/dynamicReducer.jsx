

import { DDECREMENT, DINCREMENT } from "./DactionType"



const initalState = {

    value: 6,
}



const dynamicReducer = (state = initalState, action) => {

    switch (action.type) {

        case DINCREMENT:


            return {

                ...state,
                value: state.value + action.payload


            };

        case DDECREMENT:

            return {

                ...state,
                value: state.value - action.payload
            }
            default:
        return state ; 
    }

    


}


export default dynamicReducer;

