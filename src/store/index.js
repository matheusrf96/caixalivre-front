import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import reducer from "./reducer"

export const INITIAL_STATE = {
    'app': {
        'customersList': [],
        'sellersList': [],
    },
    'purchase': {
        'customer': null,
        'seller': null,
        'products': [],
    }
}

export default createStore(reducer, INITIAL_STATE, applyMiddleware(thunk))