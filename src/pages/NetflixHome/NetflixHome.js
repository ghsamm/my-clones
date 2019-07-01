import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Intro from './Intro'
import Tabs from './Tabs'

const Container = styled.div`
  position: relative;
`

const NetflixHome = () => {
  return (
    <Container>
      <Header />
      <Intro />
      <Tabs />
    </Container>
  )
}

export default NetflixHome
