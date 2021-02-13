import { combineReducers } from 'redux'
import { ACTIONS } from '../actions'


function trips (state = [], action) {
  switch (action.type) {
    case ACTIONS.loadingState: {
      return action.payload
    }
    default: return state
  }
}

export default combineReducers({
  trips,
})