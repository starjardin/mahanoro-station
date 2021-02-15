import React from 'react'

import { Container, Pane, Header, ListContainer, ListItem } from './styles/myBookingsStyles'

const MyBookings = ({ children, ...restProps }) => {
  return <Container { ...restProps }>{ children }</Container>
}

MyBookings.Header = function MyBookingsHeader ({ children, ...restProps }) {
  return <Header { ...restProps } >{ children }</Header>
}

MyBookings.ListContainer = function MyBookingsListContainer ({ children, ...restProps }) {
  return <ListContainer { ...restProps } >{ children }</ListContainer>
}

MyBookings.ListItem = function MyBookingsListItem ({ children, ...restProps }) {
  return <ListItem { ...restProps } >{ children }</ListItem>
}
MyBookings.Pane = function MyBookingsPane ({ children, ...restProps }) {
  return <Pane { ...restProps } >{ children }</Pane>
}


export default MyBookings