import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { Account } from '../components'
import ButtonContainer from './buttonContainer'
import { confirmBookings } from '../actions'
import MyBookingsContainer from './myBookingsContainer'

export default function AccountContainer () {
  const users = useSelector(state => state.users)
  const trips = useSelector(state => state.trips)
  const { id } = useParams()
  const car = trips.find(item => Number(item.id) === Number(id))
  const dispatch = useDispatch()
  
  function handleSubmit (e) {
    e.preventDefault()
    dispatch(confirmBookings(car))
  }
  
  return <Account>
    <div>
      <h2>My personal information: </h2>
      <Account.Form
        onSubmit={handleSubmit}
      >
      <Account.Label>First Name</Account.Label>
      <Account.Input
        type="text"
        placeholder={users.firstName}
      />
      <Account.Label>Last Name</Account.Label>
      <Account.Input
        type="text"
        placeholder={users.lastName}
      />
      <Account.Label>Phone Number</Account.Label>
      <Account.Input
        type="phone"
        placeholder={users.phoneNumber}
      />
      <div>
        <ButtonContainer type="submit" text="update" color="#fff" />
      </div>
    </Account.Form>
    </div>
    <div>
      <h2>My Bookings</h2>
      <MyBookingsContainer />
    </div>
  </Account>
}
