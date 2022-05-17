import React from 'react'
import { SidebarContainer,CloseIcon, Icon,sideBarLink,SideBtnWrap,SidebarMenu,SidebarWrapper, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon>
              <CloseIcon/>
          </Icon>

          <SidebarWrapper>
            <SidebarMenu>
                <sideBarLink to = "template">
                  Template
                </sideBarLink>
                <sideBarLink to = "blog">
                  Blog
                </sideBarLink>
              </SidebarMenu>
              <SideBtnWrap>

                <SidebarRoute to='/signin'>Sign In</SidebarRoute>

              </SideBtnWrap>

          </SidebarWrapper>

      </SidebarContainer>
  );
};

export default Sidebar