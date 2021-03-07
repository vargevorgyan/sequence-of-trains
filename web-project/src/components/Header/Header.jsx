import React from 'react'
import styled from 'styled-components'
import AboutTrains from './AboutTrains'
import Time from './Time'

const HeaderStyled = styled.header`
  width: 100%;
  display: grid;
  align-content: center;
  grid-template-columns: 1fr 3fr 1fr;
  margin-bottom: 30px;
  padding: 27px 37px 0 37px;
`
const LogoWrapper = styled.div`
  width: 350px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  @media (max-width: 1200px) {
    width: 230px;
  }
`
const Logo = styled.div`
  width: 200px;
  text-align: end;
`
const LogoTitle = styled.h1`
  font-size: 36px;
`
const LogoBetaVersion = styled.div`
  align-self: flex-end;
`
function Header() {
  return (
    <HeaderStyled>
      <LogoWrapper>
        <Logo>
          <LogoTitle>НАРЯДЧИК</LogoTitle>
          <LogoBetaVersion>v 1.1 beta</LogoBetaVersion>
        </Logo>
      </LogoWrapper>
      <AboutTrains />
      <Time />
    </HeaderStyled>
  )
}

export default Header
