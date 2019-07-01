import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const Container = styled.nav`
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`

const MainNav = styled.div`
  display: flex;
  align-items: center;
`
const NavLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  margin: 20px;
  text-align: center;
`
const NavDivider = styled.div`
  width: 1px;
  height: 20px;
  background-color: white;
  margin: 0 10px;
`

const Header = () => {
  return (
    <Container>
      <Logo />
      <MainNav>
        <NavLink href="#">Premium</NavLink>
        <NavLink href="#">Help</NavLink>
        <NavLink href="#">Download</NavLink>
        <NavDivider />
        <NavLink href="#">Sign&nbsp;up</NavLink>
        <NavLink href="#">Log&nbsp;in</NavLink>
      </MainNav>
    </Container>
  )
}

export default Header
