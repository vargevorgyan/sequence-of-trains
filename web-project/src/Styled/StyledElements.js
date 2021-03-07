import styled from 'styled-components'

export const Cards = styled.div`
  width: 100px;
  height: 40px;
  background-color: ${(props) => props.bgColor};
  position: absolute;
  left: ${(props) => props.leftPosition}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-radius: 5px;
`
