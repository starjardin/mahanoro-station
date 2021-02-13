import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { loadingState } from './actions'
import Home from './pages/home'

export default function App () {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(loadingState())
  }, [])

  return (
    <Home />
  )
}
