import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Account } from '../components'
import ButtonContainer from './buttonContainer'
import MyBookingsContainer from './myBookingsContainer'

export default function AccountContainer () {
  const users = useSelector(state => state.users)
  return <Account>
    <div>
      <h2>My personal information: </h2>
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
      <div>
        <ButtonContainer type="submit" text="update" color="#fff" />
      </div>
    </Account.Form>
    </div>
    <div>
      <h2>My Bookings</h2>
      <MyBookingsContainer />
    </div>
  </Account>
}
