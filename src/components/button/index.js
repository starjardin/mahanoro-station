import React from 'react'

import { ButtonElement, Text, Container } from "./styles/buttonStyles"

const Button = ({children, ...restProps}) => {
  return <Container { ...restProps }>{ children }</Container>
}

Button.ButtonElement = function ButtonButtonElement ({type, children, ...restProps }) {
  return <ButtonElement type={type} { ...restProps }>{ children }</ButtonElement>
}

Button.Text = function ButtonText ({ children, ...restProps }) {
  return <Text {...restProps}>{ children }</Text>
}
 
 
 export default Button