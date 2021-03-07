import React from 'react'
import styled from 'styled-components'

const AboutTrainsParent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  justify-self: center;
  align-items: center;
  height: 100%;
`
const AboutTrain = styled.p`
  min-width: 150px;
`

function AboutTrains() {
  return (
    <AboutTrainsParent>
      <AboutTrain>Поездов на смене — 2</AboutTrain>
      <AboutTrain>Поездов ожидает — 20</AboutTrain>
      <AboutTrain>Бригад ожидает — 15</AboutTrain>
    </AboutTrainsParent>
  )
}

export default AboutTrains
