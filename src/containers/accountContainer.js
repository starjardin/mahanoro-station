import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Account } from '../components'
import ButtonContainer from './buttonContainer'
import MyBookingsContainer from './myBookingsContainer'

export default function AccountContainer () {
  const users = useSelector(state => state.users)
  return <Account>
    <Account.Form>
      <Account.Label>First Name</Account.Label>
      <Account.Input
        type="text"
        placeholder={users.firstName}
      />
      <Account.Label>Last Name</Account.Label>
      <Account.Input
        type="text"
        placeholder={users.lastName}
      />
      <Account.Label>Phone Number</Account.Label>
      <Account.Input
        type="phone"
        placeholder={users.userPhoneNumber}
      />
      <ButtonContainer type="submit" text="update" color="#fff" />
    </Account.Form>
    <MyBookingsContainer />
  </Account>
}
