import React from 'react'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavMenu,
    Buu,
    Link,
    Icon,
    Label
} from './NavbarElements'
import {FaBars} from 'react-icons/fa';
import {Bu,In,Rotate} from './Header'



const Navbar = () => {
  return (
    <>
    {/* <Buu>dd</Buu>
    <In defaultValue="dddd" type="text" inputColor="rebeccapurple"/>
    <Rotate>&lt; 💅🏾 &gt;</Rotate>
    <Link href="#">
    <Icon viewBox="0 0 20 20">
      <path d="M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z"/>
    </Icon>
    <Label>Hovering my parent changes my style!</Label>
  </Link>
  <FaBars /> */}
    <Nav>
        <NavbarContainer>
        <NavLogo to='/'>LinkHub</NavLogo>
        <MobileIcon>
        <FaBars />
        </MobileIcon>
         <FaBars />
        <NavMenu>
            <NavItem>
                <NavLinks to ='about'>About</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to ='about'>About</NavLinks>
            </NavItem>
        </NavMenu>
        <NavBtn><NavBtnLink to='/signin'>Sign In</NavBtnLink></NavBtn>
        </NavbarContainer>    
    </Nav>
    </>
  )
}

export default Navbar