import styled from 'styled-components'

export const Container = styled.div`
  max-width: 800px;
  margin: auto;
`

export const Link = styled.div`
  cursor: pointer;
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ListContainer = styled.ul`
  padding: 0;
`
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 20px;
  border-bottom: 1px solid #ccc;
`
export const Pane = styled.div`
  margin: 10px;
  span {
    display: block;
  }
`