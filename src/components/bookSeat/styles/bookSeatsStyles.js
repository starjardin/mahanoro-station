import styled from 'styled-components'

export const Container = styled.div`
  ${({ modal }) => modal && `
    background-color: #fefefefe;
    opacity: .2;
    width: 100vw;
    height: 100vh;
  `}
`
export const Header = styled.header``
export const Pannel = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
export const Title = styled.h2``
export const SeatContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: flex-end;
`
export const InfoContainer = styled.div``
export const Modal = styled.div`
  width: 70vw;
  height: 50vh;
  position: fixed;
  top: 50%;
  left: 50%;
  border: 5px solid #E53170;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 3;
  opacity: 1;
`
export const ModalWarning = styled.h2`
  text-transform: uppercase;
  opacity: 1;
`
export const ModalText = styled.div`
  color: #000;
  opacity: 1;
`

export const Seat = styled.div`
  cursor: pointer;
`
