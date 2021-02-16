import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { MyBookings } from '../components'
import car from '../../design/car.jpg'

const MyBookingsContainer = () => {
  const bookings = useSelector(state => state.bookings)
  const users = useSelector(state => state.users)
  const trips = useSelector(state => state.trips)
  const { id } = useParams()
  
  const taxi = trips.find(i => Number(i.id) === Number(id))
  console.log(taxi);
  
  return <MyBookings>
    <MyBookings.Header>
      My account 	&nbsp;
      <span>{ users.firstName } { users.lastName }</span>
    </MyBookings.Header>
    <MyBookings.ListContainer>
      <MyBookings.ListItem>
        <MyBookings.Pane>
          <img src={car} alt="car" />
        </MyBookings.Pane>
        <MyBookings.Pane>
          
        </MyBookings.Pane>
        <MyBookings.Pane></MyBookings.Pane>
        <MyBookings.Pane></MyBookings.Pane>
      </MyBookings.ListItem>
    </MyBookings.ListContainer>
  </MyBookings>
}

export default MyBookingsContainer
