import styled from 'styled-components'

export const Container = styled.div`
  ${({ modal }) => modal && `
    background-color: #fefefefe;
    opacity: .2;
    width: 90vw;
    height: 90vh;
  `}
`
export const Header = styled.header``
export const Pannel = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
export const SeatContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: flex-end;
  > div:nth-child(1) {
    grid-column-end: 4;
  }
`
export const InfoContainer = styled.div`
  .info {
    display: flex;
    justify-content: space-between;
    padding: .5rem 0;
  }
  
  text-align: end;
`
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
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fefefefe;
`
export const ModalWarning = styled.h2`
  text-transform: uppercase;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 45vw;
  text-align: start;
  padding: 2rem 0;
  gap: 1.5rem;
`
export const ModalText = styled.p`
  color: #000;
  opacity: 1;
  width: 45vw;
  text-align: start;
  margin: 0 0 2rem 0;
`

export const Seat = styled.div`
  cursor: pointer;
`
