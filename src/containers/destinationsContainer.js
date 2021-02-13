import React from 'react'
import { useSelector } from 'react-redux'
import { Destinations, Header } from '../components'

const DestinationsContainer = () => {
  const trips = useSelector(state => state.trips)
  const destinationsArray = trips.map(i => i.destination)
  const destinations = [ ...new Set(destinationsArray) ]
  console.log(destinations);
  
  return <Destinations>
      <Header.Heading>
        <Header.Title
          color="#000000"
        >Where are you going?</Header.Title>
        <Header.Image src="/design/1.png"/>
      </Header.Heading>
    <Destinations.ListContainer>
      { destinations.map((item, index) => (
        <Destinations.Item key={ index }>
          <Destinations.Link to={`/destination/${item}`}>
            { item }
          </Destinations.Link>
        </Destinations.Item>
      ))}
    </Destinations.ListContainer>
  </Destinations>
}


export default DestinationsContainer