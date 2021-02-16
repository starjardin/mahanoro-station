import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { formatDate } from '../utils'
import { NextTrip } from '../components'
import clock from '../../design/clock.jpg'
import ButtonContainer from './buttonContainer'
import car from '../../design/car.jpg'

const NextTripContainer = () => {
  const trips = useSelector(state => state.trips)
  const { destination } = useParams()
  const availabeNextTrip = trips.filter(item => item.destination === destination)
  
  return <NextTrip >
    <NextTrip.Header>
      <NextTrip.Title>
        <img src={clock} />
        <span>Next trip to: <br/>{destination}</span>
      </NextTrip.Title>
    </NextTrip.Header>
    <NextTrip.ListContainer>
      { availabeNextTrip.map(item => (
        <NextTrip.Item key={ item.id }>
          <NextTrip.Pane>
            <img src={car} />
          </NextTrip.Pane>
          <NextTrip.Pane>
            <div>
              <span>{ formatDate(item.departureTime, "cccc") }</span>
              <span>
                {formatDate(item.departureTime, "hh")}: 00
              </span>
            </div>
          </NextTrip.Pane>
          <NextTrip.Pane>
            <div>
              <span>{formatDate(item.departureTime, "P")}</span>
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
              : <NextTrip.Link to={`/destination/${destination}/${item.id}`}>
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
