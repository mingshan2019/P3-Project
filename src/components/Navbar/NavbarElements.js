import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
export const Nav = styled.nav`
    background: #000;
    height: 80px;
    position: sticky;
    
    @media(max-width: 960 px){
        transition: 0.8s all ease;
    }
    `;

    export const NavbarContainer = styled.div`
        display: flex;
        justify-content: space-between;
        height:80px;
        //z-index:1;
        width:100%;
        pedding: 0 24px;
        max-width:1100px;
        `;
export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5 rem;
    display: flex;
    align-items: center;
    margin-left:24px;
    font-weigt: bold;
    text-decoration:none;
`;
export const MobileIcon = styled.div`
   // disply: none;
   // display: block;
    position: absolute;
    top:0;
    right:0;
    transform: translate(-100%,60);
    font-size: 1.8 rem;
    cusror: pointer;
    color:#fff;

     @media(max-width:800 px){
         display: block;
         position: absolute;
         top:0;
         right:0;
         transform: translate(-100%,60);
         font-size: 1.8 rem;
         cusror: pointer;
         color:#fff;
     }
    `;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style:none;
    text-align:center;
    margin-right:-22px;

    @media(max-width: 768px){
        display: none;
    }
`;
export const NavItem = styled.li`
height:80px;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    aligh-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active{
        border-bottom: 3px solid #01bf71;
    }

    `;

    export const NavBtn = styled.nav`
    display: flex;
    aligh-items: center;
    @media(max-width: 768px)
    {
        display:none;
    }
    `;

    export const NavBtnLink = styled(LinkR)`
    border-radius: 20px;
    background: #01bf71;
    white-space: nowrap;
    padding: 20px;
    color: #010606;
    font-size:16px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
    `;

    export const Buu = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "green"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: papayawhip;
  color: palevioletred;
`;

export const Icon = styled.svg`
  flex: none;
  transition: fill 0.25s;
  width: 48px;
  height: 48px;

  ${Link}:hover & {
    fill: rebeccapurple;
  }
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  line-height: 1.2;

  &::before {
    content: '◀';
    margin: 0 10px;
  }
`;