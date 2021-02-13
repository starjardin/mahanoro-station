import React from 'react'

import { 
  Container,
  Header,
  Pannel,
  Title,
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
//BookSeat.Header = function BookSeatHeader ({ children, ...restProps }) {
//  return <Header { ...restProps }>{ children }</Header>
//}
//BookSeat.Header = function BookSeatHeader ({ children, ...restProps }) {
//  return <Header { ...restProps }>{ children }</Header>
//}

export default BookSeat