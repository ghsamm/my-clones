import React from 'react'
import styled from 'styled-components'
import CallToAction from './CallToAction'

const Container = styled.div`
  height: 100vh;
  background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url('./netflix-bg.jpg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`
const MainTitle = styled.h1`
  font-size: 80px;
  margin: 0;
  margin-bottom: 30px;
`
const Subtitle = styled.p`
  font-size: 30px;
  margin: 0;
  margin-bottom: 30px;
`

const Intro = () => {
  return (
    <Container>
      <MainTitle>See what's next.</MainTitle>
      <Subtitle>WATCH ANYWHERE. CANCEL ANYTIME.</Subtitle>

      <CallToAction variation="big">JOIN FREE FOR A MONTH</CallToAction>
    </Container>
  )
}

export default Intro
