import React from 'react'
import { Link as ReachRouterLink } from 'react-router-dom'

import {
  Container,
  ListContainer,
  Item,
  Link,
} from './styles/destinationsStyels'

const Destinations = ({children, ...restProps}) => {
  return <Container { ...restProps }>{ children }</Container>
}


Destinations.ListContainer = function DestinationsListContainer ({ children, ...restProps }) {
  return <ListContainer { ...restProps } >{ children }</ListContainer>
}

Destinations.Item = function DestinationsItem ({ children, ...restProps }) {
  return <Item { ...restProps } >{ children }</Item>
}

Destinations.Link = function DestinationsLink ({ to, children, ...restProps }) {
  return <Link { ...restProps } >
    <ReachRouterLink to={to}>{ children }</ReachRouterLink>
  </Link>
}

export default Destinations