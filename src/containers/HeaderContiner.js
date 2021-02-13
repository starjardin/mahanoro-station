import React from 'react'

import { Header } from '../components'

const HeaderContiner = () => {
  return <Header>
      <Header.Heading>
        <Header.Title>Mahanoro station</Header.Title>
        <Header.Image src="/design/1.png"/>
      </Header.Heading>
      <Header.Acount>My acount</Header.Acount>
    </Header>
}


export default HeaderContiner