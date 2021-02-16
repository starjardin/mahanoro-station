import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
`
export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns : repeat(auto-fill, minmax(430px, 1fr));
  column-gap: 2rem;
  row-gap: 1rem;
  padding: 0;
  text-align: start;
`
export const Item = styled.li`
  list-style: none;
  color: #ffffff;
  text-transform: uppercase;
  padding: 1.3rem;
  text-align: start;
  cursor: pointer;
`
export const Link = styled.p`
  margin: 0;
  a {
    color: #ffffff;
    text-decoration: none;
    display: block;
    padding-inline-start: 3rem;
    text-align: start;
    cursor: pointer;
    background-color: #0F0E17;
    margin: 2px;
    padding: 1rem;
    cursor: pointer;
  }
`