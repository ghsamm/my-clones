import styled, { css } from 'styled-components'

const CallToAction = styled.a`
  margin-top: 20px;
  text-decoration: none;
  font-weight: bold;
  background-color: ${props => props.bgColor || '#1db954'};
  color: ${props => props.color || 'white'};

  padding: 15px 40px;
  border-radius: 25px;
  transition: all 300ms;
  &:hover {
    ${props =>
      !props.bgColor &&
      css`
        background-color: #1ed760;
      `}
  }
`

export default CallToAction
