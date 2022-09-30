import React from 'react'
import { SidebarContainer, Icon, CloseIcon,SidebarWrapper, SidebarMenu,SidebarLink} from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='services' onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to='testimonials' onClick={toggle}>
                        Temoignages
                    </SidebarLink>
                    <SidebarLink to='footer' onClick={toggle}>
                        Contacts
                    </SidebarLink>
                </SidebarMenu>
                {/* <SideBtnWrap>
                    <SidebarRoute to='/signin' onClick={toggle}>
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
