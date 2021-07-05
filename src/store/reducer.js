import { GET_CUSTOMERS, GET_SELLERS } from './actions'
import { INITIAL_STATE } from './index'

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_CUSTOMERS:
      return {
        ...state,
        app: {
          ...state.app,
          customersList: action.payload
        }
      }
    case GET_SELLERS:
      return {...state}
    default:
      return {...state}
  }
}

export default reducer