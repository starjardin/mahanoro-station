import { combineReducers } from 'redux'
import { ACTIONS } from '../actions'

const initialStateUser = {
  firstName: "Honey",
  lastName: "Tantely",
  userPhoneNumber: "+261349789355",
  id: 261349789355
}

function trips (state = [], action) {
  switch (action.type) {
    case ACTIONS.loadingState: {
      return action.payload
    }
    case ACTIONS.bookSeat: {
      const newArr = state.map(item => {
        if (item.id === action.car.id) {
          item.seats.map(i => {
            if (i.id === action.payload.id) {
              return {
                ...i,
                isAvailable: !i.isAvailable
              }
            }
            return i
          })
        }                 
        return item
      })
      console.log(newArr);
      return newArr
    }
    default: return state
  }
}

function users (state = initialStateUser, action) {
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

function bookings (state=[], action) {
  switch (action.type) {
    case ACTIONS.bookings: {
      return [...state, action.payload]
    }
    default: return state
  }
}

export default combineReducers({
  bookings,
  trips,
  modal,
  users,
})