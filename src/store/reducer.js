import { INITIAL_STATE } from './index'

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_OVERVIEW:
      return action.data
    case LOADING_PAGE:
      return state
    default:
      return state
  }
}

export default reducer