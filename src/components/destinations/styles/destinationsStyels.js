import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
`
export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns : repeat(auto-fill, minmax(150px, 1fr));
  column-gap: 2rem;
  row-gap: 1rem;
`
export const Item = styled.li`
  list-style: none;
  background-color: #0F0E17;
  color: #ffffff;
  text-transform: uppercase;
  padding: 1.3rem;
`
export const Link = styled.p``