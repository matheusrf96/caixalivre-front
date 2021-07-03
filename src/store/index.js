import { createStore } from 'redux'

import reducer from "./reducer"

export const INITIAL_STATE = {
    'purchase': {
        'customer': null,
        'seller': null,
        'products': [],
    }
}

export default createStore(reducer, INITIAL_STATE)