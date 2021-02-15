import React from 'react'

import { Container, Input, Form, Label } from './styles/accountStyles'

const Account = ({children, ...restProps}) => {
  return <Container {...restProps}>{ children }</Container>
}

Account.Form = function AccountForm ({ children, ...restProps }) {
  return <Form { ...restProps }>{ children }</Form>
}

Account.Input = function AccountInput ({ children, ...restProps }) {
  return <Input { ...restProps }>{ children }</Input>
}

Account.Label = function AccountLabel ({ children, ...restProps }) {
  return <Label { ...restProps }>{ children }</Label>
}

export default Account
