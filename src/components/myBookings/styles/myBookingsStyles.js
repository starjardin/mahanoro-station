import styled from 'styled-components'

export const Container = styled.div``
export const Header = styled.h3``

export const ListContainer = styled.ul`
  /*display: grid;
  grid-template-columns: repeat(4, 1fr);*/
`
export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: center;
`
export const Pane = styled.div`
  display: flex;
  flex-direction: column;
`