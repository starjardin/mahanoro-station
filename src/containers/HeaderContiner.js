import React from 'react'
import { Link } from 'react-router-dom'

import { Header } from '../components'
import station from '../../design/station.jpg'

const HeaderContiner = () => {
  return <Header>
    <Link to="/">
      <Header.Heading>
        <Header.Title>Mahanoro station</Header.Title>
        <Header.Image src={ station }/>
      </Header.Heading>
    </Link>
    <Link to="/account">
      <Header.Acount>My acount</Header.Acount>
    </Link>
    </Header>
}


export default HeaderContiner