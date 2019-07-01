import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const Container = styled.footer`
  display: flex;
  background-color: black;
  color: white;
  padding: 50px;
`
const ListsContainer = styled.div`
  flex: 1;
  display: flex;
`
const ListTitle = styled.div`
  color: #919496;
  font-size: 12px;
  font-weight: bold;
`
const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
  width: 140px;
  list-style: none;
  margin: 0 40px;
  font-size: 16px;
`
const Item = styled.li`
  margin: 20px 0;
`
const ItemLink = styled.a`
  text-decoration: none;
`
const List = ({ title, items = [] }) => {
  return (
    <ListContainer>
      <ListTitle>{title}</ListTitle>
      {items.map(item => (
        <Item>
          <ItemLink href="#">{item}</ItemLink>
        </Item>
      ))}
    </ListContainer>
  )
}
const SocialMediaContainer = styled.div`
  display: flex;
`
const SocialMediaLink = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 8px;
  background-color: #222326;
  color: white;
  background-image: url('./instagram-logo.svg');
`
const Footer = () => {
  return (
    <Container>
      <Logo style={{ alignSelf: 'flex-start' }} />
      <ListsContainer>
        <List title="COMPANY" items={['About', 'Jobs', 'For the Record']} />
        <List
          title="COMMUNITIES"
          items={[
            'For Artists',
            'Developers',
            'Brands',
            'Investors',
            'Vendors'
          ]}
        />
        <List title="USEFUL LINKS" items={['Help', 'Web Player']} />
      </ListsContainer>
      <SocialMediaContainer>
        <SocialMediaLink href="#" />
        <SocialMediaLink href="#" />
        <SocialMediaLink href="#" />
      </SocialMediaContainer>
    </Container>
  )
}

export default Footer
