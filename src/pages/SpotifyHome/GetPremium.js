import React from 'react'
import styled from 'styled-components'
import CallToAction from './CallToAction'

const Container = styled.div`
  background-color: #498172;
  color: white;
  min-height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 80px;
`

const GetPremium = () => {
  return (
    <Container>
      <h2 style={{ margin: 0 }}>Get 3 months of Premium for $0.99.</h2>
      <p style={{ margin: 0, marginTop: 8 }}>
        Only $9.99/month after. Cancel anytime.
      </p>
      <CallToAction href="#" bgColor="#FFCDD2" color="#498172">
        GET PREMIUM
      </CallToAction>
      <p style={{ fontSize: 12, textAlign: 'center' }}>
        Offer not available to users who already tried Premium. Offer ends Jun
        30, 2019. Terms apply.
      </p>
    </Container>
  )
}

export default GetPremium
