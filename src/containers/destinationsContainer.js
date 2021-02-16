import React from 'react'
import { useSelector } from 'react-redux'
import { Destinations, Header } from '../components'
import car from '../../design/car.jpg'

const DestinationsContainer = () => {
  const trips = useSelector(state => state.trips)
  const destinationsArray = trips.map(i => i.destination)
  const destinations = [ ...new Set(destinationsArray) ]
  
  return <Destinations>
      <Header.Heading>
        <Header.Title
          color="#000000"
        >Where are you going?</Header.Title>
        <Header.Image src={car}/>
      </Header.Heading>
    <Destinations.ListContainer>
      { destinations.map((item, index) => (
        <Destinations.Link key={ index } to={`/destination/${item}`}>
          <Destinations.Item>
            { item }
          </Destinations.Item>
        </Destinations.Link>
      ))}
    </Destinations.ListContainer>
  </Destinations>
}


export default DestinationsContainer