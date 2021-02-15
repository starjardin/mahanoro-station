import { URL } from '../constant/'

export const ACTIONS = {
  loadingState: "LOADIGN_STATE",
  toggleModal: "TOGGLE_MODAL",
  bookSeat: "BOOK_SEAT"
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

export function bookSeat (item, id) {
  return {
    type: ACTIONS.bookSeat,
    payload: item,
    id: id
  }
}

export function toggleModal () {
  return {
    type: ACTIONS.toggleModal,
  }
}