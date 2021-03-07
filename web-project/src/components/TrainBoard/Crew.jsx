import React from 'react'
import styled from 'styled-components'
import { Cards } from '../../Styled/StyledElements'

const CrewText = styled.span`
  width: 80%;
  height: 100%;
  font-size: 14px;
  display: flex;
  align-items: center;
`

function Crew(props) {
  return (
    <Cards bgColor="#E49F88" leftPosition={Math.floor(Math.random() * 700)}>
      <CrewText>Something like this</CrewText>
    </Cards>
  )
}

export default Crew
