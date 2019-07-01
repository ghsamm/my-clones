import styled, { css } from 'styled-components'

const CallToAction = styled.a`
  background-color: #e50914;
  background-image: linear-gradient(to bottom, #e50914, #db0510);
  color: white;
  padding: 8px 18px;
  border-radius: 3px;
  font-size: 16px;
  ${props =>
    props.variation === 'big' &&
    css`
      padding: 30px 45px;
      font-size: 30px;
    `}
`

export default CallToAction
