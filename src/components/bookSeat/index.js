import React from 'react'

import { 
  Container,
  Header,
  Pannel,
  Title,
  SeatContainer,
  InfoContainer,
  Seat,
  Modal,
  ModalWarning,
  ModalText,
 } from './styles/bookSeatsStyles'

const BookSeat = ({ children, ...restProps }) => {
  return <Container { ...restProps }>{ children }</Container>
}

BookSeat.Header = function BookSeatHeader ({ children, ...restProps }) {
  return <Header { ...restProps }>{ children }</Header>
}

BookSeat.Pannel = function BookSeatPannel ({ children, ...restProps }) {
  return <Pannel { ...restProps }>{ children }</Pannel>
}

BookSeat.Title = function BookSeatTitle ({ children, ...restProps }) {
  return <Title { ...restProps }>{ children }</Title>
}

BookSeat.SeatContainer = function BookSeatSeatContainer ({ children, ...restProps }) {
  return <SeatContainer { ...restProps }>{ children }</SeatContainer>
}

BookSeat.InfoContainer = function BookSeatInfoContainer ({ children, ...restProps }) {
  return <InfoContainer { ...restProps }>{ children }</InfoContainer>
}

BookSeat.Seat = function BookSeatSeat ({ children, ...restProps }) {
  return <Seat { ...restProps }>{ children }</Seat>
}

BookSeat.Modal = function BookSeatModal ({ children, ...restProps }) {
  return <Modal { ...restProps }>{ children }</Modal>
}

BookSeat.ModalWarning = function BookSeatModalWarning ({ children, ...restProps }) {
  return <ModalWarning { ...restProps }>{ children }</ModalWarning>
}

BookSeat.ModalText = function BookSeatModalText ({ children, ...restProps }) {
  return <ModalText { ...restProps }>{ children }</ModalText>
}

export default BookSeat