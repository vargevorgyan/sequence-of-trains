import React from 'react'
import styled from 'styled-components'
import Cities from './components/Cities/Cities'
import Header from './components/Header/Header'
import TrainBoard from './components/TrainBoard/TrainBoard'

const Container = styled.div`
  width: 100%;
  height: auto;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-wrap: wrap;
`

const Main = styled.main`
  display:flex;
  max-width:100%;
`

function App() {
  return (
    <Container>
      <Header />
      <Main>
        <Cities />
        <TrainBoard />
      </Main>
    </Container>
  )
}

export default App
