import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { NextTrip } from '../components'
import ButtonContainer from './buttonContainer'

const NextTripContainer = () => {
  const trips = useSelector(state => state.trips)
  const { destination } = useParams()
  const availabeNextTrip = trips.filter(item => item.destination === destination)
  
  return <NextTrip >
    <NextTrip.Header>
      <NextTrip.Title>
        Next trip to: {destination}
      </NextTrip.Title>
    </NextTrip.Header>
    <NextTrip.ListContainer>
      { availabeNextTrip.map(item => (
        <NextTrip.Item key={ item.id }>
          <NextTrip.Pane>I am the car</NextTrip.Pane>
          <NextTrip.Pane>
            <div>
              {item.departureTime}
            </div>
            <div>
              <span>{ item.departureTime }</span>
              <span>
                { item.seats
                .filter(seat => seat.isAvailable)
                .length} seats lefts
              </span>
            </div>
          </NextTrip.Pane>
          <NextTrip.Pane>
            { item.seats
              .filter(seat => seat.isAvailable).length === 0
              ? <ButtonContainer
                text="Book Seat"
                color="#fff"
                disabled
              />
              : <NextTrip.Link to={`/destination/${destination}/${item.departureTime}`}>
                <ButtonContainer text="Book Seat" color="#fff" />
              </NextTrip.Link>
            } 
          </NextTrip.Pane>
        </NextTrip.Item>
      ))}
    </NextTrip.ListContainer>
  </NextTrip>
}

export default NextTripContainer
