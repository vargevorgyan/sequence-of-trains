import React from 'react'
import styled from 'styled-components'

const CitiesStyled = styled.article`
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 37px;
`
const City = styled.section`
  width: 98%;
  height: 40px;
  border-bottom: 0.5px solid #cdcdcd;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;

  box-sizing: content-box;
`

function Cities() {
  return (
    <CitiesStyled>
      <City>КИНЕЛЬ — ОКТЯБРЬСК</City>
      <City>КИНЕЛЬ — ОКТЯБРЬСК</City>
      <City>КИНЕЛЬ — ОКТЯБРЬСК</City>
      <City>КИНЕЛЬ — ОКТЯБРЬСК</City>
      <City>КИНЕЛЬ — ОКТЯБРЬСК</City>
      <City>КИНЕЛЬ — ОКТЯБРЬСК</City>
    </CitiesStyled>
  )
}

export default Cities
