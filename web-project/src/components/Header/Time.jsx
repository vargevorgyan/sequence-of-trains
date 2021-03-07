import React from 'react'
import styled from 'styled-components'

const TimeStyled = styled.div`
  font-size: 45px;
  justify-self: flex-end;
  display: flex;
  align-items: center;
`

function Time() {
  return <TimeStyled>1:00</TimeStyled>
}

export default Time
