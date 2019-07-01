import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Intro from './Intro'
import GetPremium from './GetPremium'
import Footer from './Footer'

const Container = styled.div``

const SpotifyHome = () => {
  return (
    <Container>
      <Header />
      <Intro />
      <GetPremium />
      <Footer />
    </Container>
  )
}

export default SpotifyHome
