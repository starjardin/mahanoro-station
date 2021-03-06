import { combineReducers } from 'redux'
import { ACTIONS } from '../actions'

const initialStateUser = {
  firstName: "Honey",
  lastName: "Tantely",
  phoneNumber: "+261349789355",
  id: 261349789355
}

function trips (state = [], action) {
  switch (action.type) {
    case ACTIONS.loadingState: {
      return action.payload
    }
    case ACTIONS.bookSeat: {
      const arr = action.car.seats.map(i => {
        if (i.id === action.payload.id) {
          return {
            ...i,
            isAvailable: !i.isAvailable,
            passengerFirstName: i.isAvailable ? action.users.firstName : "",
          }
        }
        return i
      })
      const newArr = state.map(item => {
        if (item.id === action.car.id) {
          return {
            ...item,
            seats : arr
          }
        }
        return item
      })
      return newArr
    }
    case ACTIONS.confirmBookings : {
      const arr = action.car.seats.map(i => {
          return {
            ...i,
            passengerFirstName: "",
        }
      })
      const newArr = state.map(item => {
        if (item.id === action.car.id) {
          return {
            ...item,
            seats : arr
          }
        }
        return item
      })
      return newArr
    }
    case ACTIONS.cancelBookings: {
      console.log(action);
      const arr = action.car.seats.map(i => {
        if (i.passengerFirstName) {
          return {
            ...i,
            isAvailable: !i.isAvailable,
            passengerFirstName: "",
        }
        }
        return i
      })
      const newArr = state.map(item => {
        if (item.id === action.car.id) {
          return {
            ...item,
            seats : arr
          }
        }
        return item
      })
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

const initialBookings = [
  {
    destination: "Vatomandry",
    seats: [],
    price: 10000,
  },
  {
    destination: "Antananarivo",
    seats: [],
    price: 20000,
  },
  {
    destination: "Toamasina",
    seats: [],
    price: 20000,
  },
  {
    destination: "Moramanga",
    seats: [],
    price: 15000,
  }
]

function bookings (state=initialBookings, action) {
  switch (action.type) {
    case ACTIONS.bookings: {
      const booking = state.map(i => {
        if (i.destination == action.car.destination) {
          const newArr = (i.seats.some(item => item.id === action.payload.id))
          if (newArr) {
            return {
            ...i,
            seats: i.seats.filter(item => item.id !== action.payload.id)
          }
          } else {
            return {
              ...i,
              seats: [ ...i.seats, action.payload]
            }
          }
        }
        return i
      })
      return booking
    }
    case ACTIONS.cancelBookings: {
      const bookings = state.map(item => {
        if (item.destination == action.car.destination) {
          console.log(item);
          return {
            ...item,
            seats: []
          }
        }
        return item
      })
      console.log(bookings);
      return bookings
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