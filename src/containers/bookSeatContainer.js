import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { BookSeat } from '../components'

const BookSeatContainer = () => {
  const trips = useSelector(state => state.trips)
  const { date } = useParams()
  console.log(date);
  const car = trips.find(item => Number(item.departureTime) == date)
  
  return <BookSeat>
    
  </BookSeat>
}

export default BookSeatContainer
