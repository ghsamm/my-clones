import React from 'react'
import styled from 'styled-components'
import CallToAction from './CallToAction'

const IntroBg = styled.div`
  background-image: url('https://web.archive.org/web/20190628063532im_/https://www.scdn.co/i/home/hero-burst.svg');
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 8;
`
const IntroContainer = styled.header`
  position: relative;
  background-color: black;
  background: linear-gradient(#f037a5 -60%, #fae62d 140%);
  background-repeat: no-repeat;
  height: 80vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const MainTitle = styled.h1`
  font-size: 60px;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
`
const Subtitle = styled.h4`
  margin: 0 10px;
`

const Intro = () => {
  return (
    <IntroContainer>
      <MainTitle>Music for everyone.</MainTitle>
      <Subtitle>Millions of songs. No credit card nedded.</Subtitle>
      <CallToAction href="#">GET SPOTIFY FREE</CallToAction>
    </IntroContainer>
  )
}

export default Intro
