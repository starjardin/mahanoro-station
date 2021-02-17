import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  max-width: 800px;
  margin: auto;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > div {
    padding: 2rem 0;
    text-align: right;
    width: 100%;
  }
`
export const Input = styled.input`
  display: block;
  padding: .8rem 0 .8rem 1rem;
  width: 90%;
  margin: auto;
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
