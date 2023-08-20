
import { DDECREMENT, DINCREMENT } from "../dynamicData/DactionType";


export function increment(value) {

    return {
        type: DINCREMENT,

        payload: value


    }


}

export function decrement(value) {

    return {
        type: DDECREMENT,

        payload: value


    }


}