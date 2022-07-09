import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import webchainlogo from '../assets/logo.png'
import { navItems } from '../static/navItems'
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from 'react-router-dom'

const Sidebar = () => {
    
    const [ activeIcon, setActiveIcon ] = useState(navItems[0].title)
    
    return (
    <Wrapper>
        <LogoContainer>
            <Logo>
                <Image src={webchainlogo} alt="webchain" />
            </Logo>
        </LogoContainer>
        <NavItemsContainer>
      
        </NavItemsContainer>
    </Wrapper>

  )
}

export default Sidebar

const Wrapper = styled.div`
  height: calc(100vh);
  border-right: 1px solid #282b2f;
  width: calc(22rem - 16px - 16px);
  padding: 0 1rem;
`
const LogoContainer = styled.div`
  margin: 1.5rem 0;
`

const Logo = styled.div`
  width: 100%;
  object-fit: contain;
  margin-left: 1.5rem;

  @media (max-width: 1000px) {
  width: 100%;
  object-fit: contain;
  margin-left: 0rem;
  }

`

const NavItemsContainer = styled.div`
  margin-top: 3rem;
  &:hover {
    cursor: pointer;
  }
`

const NavItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  height: 4rem;
  &:hover {
    background-color: #141519;
  }
`

const NavIcon = styled.div`
  background-color: #141519;
  padding: 0.7rem;
  border-radius: 50%;
  margin: 0 1rem;
  display: grid;
  place-items: center;
`

const NavTitle = styled.div``