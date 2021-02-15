import React from 'react'
import { Account } from '../components'
import ButtonContainer from './buttonContainer'

export default function AccountContainer() {
  return <Account>
    <Account.Form>
      <Account.Label>First Name</Account.Label>
      <Account.Input
        type="text"
        placeholder="firstName"
      />
      <Account.Label>Last Name</Account.Label>
      <Account.Input
        type="text"
        placeholder="lastName"
      />
      <Account.Label>Phone Number</Account.Label>
      <Account.Input
        type="number"
        placeholder="0349789355"
      />
      <ButtonContainer type="submit" text="update" color="#fff" />
    </Account.Form>
  </Account>
}
