import React from 'react'
import styled from "styled-components"

const BetweenHoursStyled = styled.span`
  display:flex;
  column-gap:8px;
  align-items: flex-end;
`

const ShortLine = styled.span`
  width: 1px;
  height: 50%;
  display:inline-block;
  background-color: #7B7B7B;
`
const TallLine = styled.span`
  width: 1px;
  height: 80%;
  display:inline-block;
  background-color: #7B7B7B;
`

function BetweenHours() {
  return (
    <BetweenHoursStyled>
      <ShortLine/>
      <TallLine/>
      <ShortLine />
    </BetweenHoursStyled>
  )
}

export default BetweenHours