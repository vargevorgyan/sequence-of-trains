import React from 'react'
import styled from 'styled-components'

const TrainLineStyled = styled.div`
  position: relative;
  height: 40px;
  box-sizing: content-box;
  border-bottom: 0.5px solid #cdcdcd;
`

function TrainLine() {
  return <TrainLineStyled></TrainLineStyled>
}

export default TrainLine
