import React from 'react'
import styled from 'styled-components'

import CallToAction from './CallToAction'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
const Logo = styled.div`
  width: 160px;
  height: 45px;
  background-image: url('./netflix-logo.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`

const Header = () => {
  return (
    <Container>
      &nbsp;
      <Logo />
      <CallToAction>Sign In</CallToAction>
    </Container>
  )
}

export default Header
