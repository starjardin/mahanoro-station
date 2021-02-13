import React from 'react'
import { Link as ReachRouterLink } from 'react-router-dom'

import {
  Container,
  Header,
  Title,
  ListContainer,
  Item,
  Pane,
  Link
} from './styles/nextTripStyles'

const NextTrip = ({children, ...restProps}) => {
  return <Container { ...restProps } >{ children }</Container>
}

NextTrip.Header = function NextTripHeader ({ children, ...restProps }) {
  return <Header { ...restProps }>{ children }</Header>
}

NextTrip.Title = function NextTripTitle ({ children, ...restProps }) {
  return <Title { ...restProps }>{ children }</Title>
}

NextTrip.ListContainer = function NextTripListContainer ({ children, ...restProps }) {
  return <ListContainer { ...restProps }>{ children }</ListContainer>
}

NextTrip.Item = function NextTripItem ({ children, ...restProps }) {
  return <Item { ...restProps }>{ children }</Item>
}

NextTrip.Pane = function NextTripPane ({ children, ...restProps }) {
  return <Pane { ...restProps }>{ children }</Pane>
}

NextTrip.Link = function NextTripLink ({ to, children, ...restProps }) {
  return <Link { ...restProps }>
    <ReachRouterLink to={to}>{ children }</ReachRouterLink>
  </Link>
}


export default NextTrip