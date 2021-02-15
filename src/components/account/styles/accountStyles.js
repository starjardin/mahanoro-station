import styled from 'styled-components'

export const Container = styled.div``
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
export const Input = styled.input`
  display: block;
  padding: .6rem 1rem;
  text-transform: capitalize;
  background-color: #000000;
  color: #FF8906;
  ::placeholder {
    color: #FF8906;
  }
  
  &:last-child {
    margin-bottom: 1rem;
  }
`
export const Label = styled.label`
  display:flex;
  margin-top: 1rem;
`
