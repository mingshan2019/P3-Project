import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display:grid;
    //align-items: center;
    top:0;
    left:0;
    opacityL${({isOpen})=>(isOpen? '100': '0')};
    top: ${({isOpen})=>(isOpen?'0':'-100')};
`
export const CloseIcon = styled(FaTimes)`
    color: #fff;
`
export const Icon = styled. div`
    position: absolute;
    right: 1.5 rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
export const SidebarWrapper = styled.div`
    color : #fff;
`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-termplate-columns: 1fr;
    grid-termplate-rows(6,80);
    text-align: center;
`
export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
        &:hover{
            color: #01bf71;
            transition: 0.2s ease-in-out;
        }
    `
export const SideBtnWrap= styled.div`
        display: flex;
        justify-content: center;
`
export const SidebarRoute = styled(LinkR)`
        border-radius: 50px;
        backgound: #01bf71;
        white-space: nowrap;
        color: #010606;

        &:hover{
            
        }
` 
