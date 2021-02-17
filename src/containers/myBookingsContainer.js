import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { MyBookings } from '../components'
import car from '../../design/car.jpg'
import ButtonContainer from './buttonContainer'
import { formatDate } from '../utils'
import { cancelBookings } from "../actions"

const MyBookingsContainer = () => {
  const bookings = useSelector(state => state.bookings)
  const users = useSelector(state => state.users)
  const trips = useSelector(state => state.trips)
  const { id } = useParams()
  const dispatch = useDispatch()
  
  const taxi = trips.find(item => Number(item.id) == Number(id))
  const time = taxi?.departureTime
  
  return <MyBookings>
    <MyBookings.Header>
      My account 	&nbsp;
      <span>{ users.firstName } { users.lastName }</span>
    </MyBookings.Header>
    {
      bookings.map((item, index) => {
        if (item.seats.length > 0) {
          return (
            <MyBookings.ListContainer key={index}>
              <MyBookings.ListItem>
                <MyBookings.Pane>
                  <img src={ car } alt="car" />
                </MyBookings.Pane>
                <MyBookings.Pane>
                  <div>
                    { item.destination }
                  </div>
                  <div>
                    { formatDate(time, "P") }, &nbsp;
                    { formatDate(time, "hh") }: 00
                  </div>
                </MyBookings.Pane>
                <MyBookings.Pane>
                  <span>
                    {item.seats.length + ` seats`}
                  </span>
                  <span>
                    {item.price * item.seats.length} Ar
                  </span>
                </MyBookings.Pane>
                <MyBookings.Pane onClick={() => dispatch(cancelBookings(taxi))}>
                  <ButtonContainer
                    text="cancel"
                    color="#fff"
                    type="button"
                  />
                </MyBookings.Pane>
              </MyBookings.ListItem>
            </MyBookings.ListContainer>
          )
        }
      })
    }
  </MyBookings>
}
export default MyBookingsContainer