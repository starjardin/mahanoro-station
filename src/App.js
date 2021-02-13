import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { loadingState } from './actions'
import HeaderContiner from './containers/HeaderContiner'
import BookSeats from './pages/bookSeat'
import Home from './pages/home'
import NextTrip from './pages/nextTrip'

export default function App () {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(loadingState())
  }, [])

  return (
    <>
      <HeaderContiner />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/destination/:destination">
          <NextTrip />
        </Route>
        <Route path="/destination/:destination/:date">
          <BookSeats />
        </Route>
      </Switch>
    </>
  )
}
