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

function users (state = [], action) {
  switch (action.type) {
    case "CHANGE_USERS" : return state
    default: return state
  }
}

function modal (state=false, action) {
  switch (action.type) {
    case ACTIONS.toggleModal:
      return !state
    default: return state
  }
}

export default combineReducers({
  trips,
  modal,
  users,
})