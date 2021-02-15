import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #0F0E17;
  align-items: center;
  padding: .5rem 1rem;
  a {
    text-decoration: none;
  }
`
export const Title = styled.h2`
  ${({ color }) => color ? `color: ${ color }` : `color : #FFFFFE`};
  width: 100%;
`

export const Heading = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  margin: 0;
  gap: 2rem;
`
export const Acount = styled.div`
  color: #A7A9BE;
`
export const Image = styled.img`
  width: 20%;
  height: 20%;
`
