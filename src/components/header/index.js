import React from 'react'

import {
  Container,
  Title,
  Acount,
  Image,
  Heading,
} from './styles/headerStyles'

const Header = ({children, ...restProps}) => {
  return <Container { ...restProps }>{ children } </Container>
}


Header.Title = function HeaderTitle ({children, ...restProps}) {
  return <Title { ...restProps }>{ children }</Title>
}

Header.Heading = function HeaderHeading ({children, ...restProps}) {
  return <Heading { ...restProps }>{ children }</Heading>
}

Header.Acount = function HeaderAcount ({children, ...restProps}) {
  return <Acount { ...restProps }>{ children }</Acount>
}

Header.Image = function HeaderImage ({children, ...restProps}) {
  return <Image { ...restProps }>{ children }</Image>
}

export default Header;