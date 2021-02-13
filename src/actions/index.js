import { URL } from '../constant/'

export const ACTIONS = {
  loadingState: "LOADIGN_STATE",
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