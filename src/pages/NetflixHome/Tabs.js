import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  height: 160px;
  background-color: #141414;
  display: flex;
  justify-content: center;
  padding-top: 30px;
  border-bottom: 2px solid grey;
`
const Tab = styled.div`
  position: relative;
  width: 25%;
  display: flex;
  flex-direction: column;
  color: white;
  text-align: center;
  cursor: pointer;
  opacity: 0.5;
  ${props =>
    props.isActive &&
    css`
      opacity: 1;
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 5px;
        background-color: #e50914;
      }
    `};
  &:hover {
    opacity: 1;
  }
`
const TabImage = styled.div`
  height: 50px;
  background-image: url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
`
const TabText = styled.div`
  margin-top: 10px;
  font-weight: bold;
`

const Tabs = () => {
  return (
    <Container>
      <Tab isActive>
        <TabImage src="./netflix-no-commitments.svg" />
        <TabText>
          No commitments
          <br /> Cancel online at anytime
        </TabText>
      </Tab>
      <Tab>
        <TabImage src="./netflix-watch-anywhere.svg" />
        <TabText>Watch anywhere</TabText>
      </Tab>
      <Tab>
        <TabImage src="./netflix-pick-your-price.svg" />
        <TabText>Pick your price</TabText>
      </Tab>
    </Container>
  )
}

export default Tabs
