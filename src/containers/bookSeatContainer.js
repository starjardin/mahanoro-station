import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { BookSeat } from '../components'
import { toggleModal } from '../actions'
import Seat from './../../design/seat.jpg'
import BookedSeat from '../../design/bookedSeat.jpg'
import BookingSeat from '../../design/bookingSeat.jpg'
import ButtonContainer from './buttonContainer'

const BookSeatContainer = () => {
  const trips = useSelector(state => state.trips)
  const users = useSelector(state => state.users)
  const modal = useSelector(state => state.modal)
  console.log(users);
  console.log(modal);
  
  const dispatch = useDispatch()
  
  const { date } = useParams()
  const car = trips.find(item => Number(item.departureTime) == Number(date))
  const seats = car?.seats.map((item, index) => (
    <BookSeat.Seat key={index}>
      {item.isAvailable && !item.passengerFirstName && !item.passengerLastName
        ? <img src={ Seat } />
        : !item.isAvailable && item.passengerFirstName && item.passengerLastName ?
          <img src={ BookedSeat } /> :
        !item.isAvailable && <img src={BookingSeat} />
      }
    </BookSeat.Seat>)
  )
  
  const tripInfo = <>
    <div>Departure Time : {car?.departureTime}</div>
    <div>Driver : {car?.driverName}</div>
    <div>Driver's Contact : {car?.driverContact}</div>
    <div>Estimated duration : {car?.estimatedDuration}</div>
    <div>Breaks : {car?.breaks}</div>
  </>
  const destination = car?.destination
  const price = car?.price
  const buttonText = `Book .... seats`
  
  return <BookSeat modal={modal}>
    <BookSeat.Header>
      <BookSeat.Title>
        Book a seat to:
         { destination }
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
        </BookSeat.InfoContainer>
      </BookSeat.Pannel>
    </BookSeat.Header>
    <div>
      {modal && <BookSeat.Modal modal={modal}>
        <BookSeat.ModalWarning>Booking confirmed</BookSeat.ModalWarning>
        <BookSeat.ModalText>Thank you for trusting our services. Your bookning has been added to your account, you can review it there</BookSeat.ModalText>
        <Link to="/acount">
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
