import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { BookSeat } from '../components'
import { formatDate } from '../utils'
import { bookSeat, bookingSeats, toggleModal } from '../actions'
import Seat from './../../design/seat.jpg'
import BookedSeat from '../../design/bookedSeat.jpg'
import BookingSeat from '../../design/bookingSeat.jpg'
import ButtonContainer from './buttonContainer'
import carImage from '../../design/car.jpg'
import warning from '../../design/warning.jpg'

const BookSeatContainer = () => {
  const trips = useSelector(state => state.trips)
  const users = useSelector(state => state.users)
  const modal = useSelector(state => state.modal)
  const bookings = useSelector(state => state.bookings)
  
  const dispatch = useDispatch()
  
  const { id } = useParams()
  const car = trips.find(item => Number(item.id) == Number(id))
  const seats = car?.seats.map((item, index) => (
    <BookSeat.Seat key={ index }
      disabled={!item.isAvailable && !item.passengerFirstName && !item.passengerLastName}
      onClick={ () => (
        console.log(item),
        dispatch(bookingSeats(item, id, users)),
        dispatch(bookSeat(item, car, users))
      )
    }>
      {item.isAvailable && !item.passengerFirstName && !item.passengerLastName
        ? <img src={ Seat } />
        : item.isAvailable && item.passengerFirstName ?
          <img src={ BookingSeat } /> :
          !item.isAvailable && !item.passengerFirstName && !item.passengerLastName && <img src={ BookedSeat } disabled />
      }
    </BookSeat.Seat>)
  )
  
  const tripInfo = <>
    <div className="info">
      <span>Departure Time:</span>
      <span>
        { formatDate(car?.departureTime, "hh") }:00,	&nbsp;
        { formatDate(car?.departureTime, "P") }
      </span>
    </div>
    <div className="info">
      <span>Driver :</span>
      <span>{ car?.driverName }</span>
    </div>
    <div className="info">
      <span>Driver's Contact:</span>
      <span>{ car?.driverContact }</span>
    </div>
    <div className="info">
      <span>Estimated duration</span>
      <span>{ car?.estimatedDuration }</span>
    </div>
    <div className="info">
      <span>Breaks:</span> : <span>{ car?.breaks }</span>
    </div>
  </>
  const destination = car?.destination
  const price = car?.price
  const buttonText = `Book ${bookings.length} seats`
  
  return <BookSeat modal={modal}>
    <BookSeat.Header>
      <BookSeat.Title>
        <img src={carImage} />
        <span>Book a seat to: <br />{ destination }</span>
      </BookSeat.Title>
      <BookSeat.Pannel>
        <BookSeat.SeatContainer>{seats}</BookSeat.SeatContainer>
        <BookSeat.InfoContainer>
          { tripInfo }
          <p>{ price } Ar/Seat</p>
          <div
            onClick={ () => dispatch(toggleModal()) }
          >
            <ButtonContainer
            color="#fff"
            text={buttonText}
          />
          </div>
          <p>Total: {bookings?.length * car?.price }</p>
        </BookSeat.InfoContainer>
      </BookSeat.Pannel>
    </BookSeat.Header>
    <div>
      {modal && <BookSeat.Modal modal={modal}>
        <BookSeat.ModalWarning>
          <img src={ warning } /> Booking confirmed
        </BookSeat.ModalWarning>
        <BookSeat.ModalText>Thank you for trusting our services. Your bookning has been added to your account, you can review it there</BookSeat.ModalText>
        <Link
          to={ `/account/${ car.id }` }
          onClick={ () => dispatch(toggleModal()) }
        >
          <ButtonContainer
            text="Check your account"
            color="#fff"
          />
        </Link>
    </BookSeat.Modal>}
    </div>
  </BookSeat>
}

export default BookSeatContainer