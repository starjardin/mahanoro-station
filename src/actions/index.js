import { URL } from '../constant/'

export const ACTIONS = {
  loadingState: "LOADIGN_STATE",
  toggleModal: "TOGGLE_MODAL",
  bookSeat: "BOOK_SEAT",
  bookings: "BOOKINGS",
  confirmBookings: "CONFIRM_BOOKINGS",
  cancelBookings: "CANCEL_BOOKINGS",
}

export function loadingState () {
  return (dispatch) => {
    async function fectchData () {
      const res = await fetch(URL)
      const data = await res.json()
      dispatch({ type: ACTIONS.loadingState, payload: data })
    }
    fectchData()
  }
}

export function bookSeat (item, car, users) {
  return {
    type: ACTIONS.bookSeat,
    payload: item,
    car: car,
    users: users
  }
}

export function bookingSeats (item, id, users) {
  return {
    type: ACTIONS.bookings,
    payload: item,
    id: id,
    users: users
  }
}

export function confirmBookings (car) {
  return {
    type: ACTIONS.confirmBookings,
    car: car
  }
}

export function cancelBookings (car) {
  return {
    type: ACTIONS.cancelBookings,
    car: car
  }
}

export function toggleModal () {
  return {
    type: ACTIONS.toggleModal,
  }
}