import styled from 'styled-components'

export const Text = styled.span`
  color: ${({color}) => color}
`
export const Container = styled.div`
  padding: 0;
`
export const ButtonElement = styled.button`
  border: none;
  padding: 1rem 1.5rem;
  background-color: #E53170;
  cursor: pointer;
  &:disabled {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), #E53170;
  }
`
