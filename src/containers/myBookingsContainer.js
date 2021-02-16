import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { MyBookings } from '../components'
import car from '../../design/car.jpg'
import ButtonContainer from './buttonContainer'
import { formatDate } from '../utils'

const MyBookingsContainer = () => {
  const bookings = useSelector(state => state.bookings)
  const users = useSelector(state => state.users)
  const trips = useSelector(state => state.trips)
  const { id } = useParams()
  
  
  const taxi = trips.find(item => Number(item.id) == Number(id))
  const destination = taxi?.destination
  const price = taxi?.price * bookings.length
  const time = taxi?.departureTime
  const seatsOnBooking = bookings.length > 1 ? bookings.length + ` seats` : bookings.length + ` seat`
  
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
          <div>
            {destination}
          </div>
          <div>
            {formatDate(time, "P")}, &nbsp;
            {formatDate(time, "hh")}: 00
          </div>
        </MyBookings.Pane>
        <MyBookings.Pane>
          <span>
            {seatsOnBooking}
          </span>
          <span>
            {price} Ar
          </span>
        </MyBookings.Pane>
        <MyBookings.Pane>
          <ButtonContainer text="cancel" color="#fff" type="button"/>
        </MyBookings.Pane>
      </MyBookings.ListItem>
    </MyBookings.ListContainer>
  </MyBookings>
}

export default MyBookingsContainer
