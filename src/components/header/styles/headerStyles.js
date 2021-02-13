import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #0F0E17;
  align-items: center;
  padding: .5rem 1rem;
`
export const Title = styled.h2`
  ${({color}) => color ? `color: ${color}` : `color : #FFFFFE`}
`

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
  margin: 0;
  padding: 0;
  gap: 1rem;
`
export const Acount = styled.div`
  color: #A7A9BE;
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
`
