import React from 'react'
import { SidebarContainer, Icon, CloseIcon,SidebarWrapper, SidebarMenu,SidebarLink} from './SidebarElements'
import {FaUserCircle,FaShoppingCart} from 'react-icons/fa'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='services' onClick={toggle}>
                    <FaShoppingCart/> Cart
                    </SidebarLink>
                    <SidebarLink to='testimonials' onClick={toggle}>
                    <FaUserCircle/> User
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
