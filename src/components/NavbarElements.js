import styled, { keyframes }  from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import { Link as LinkS } from 'react-scroll';
import {FaBars} from 'react-icons/fa'
import {fadeInDown,fadeInLeft,fadeInRight} from 'react-animations'

const fadeindown = keyframes`${fadeInDown}`
const fadeinleft = keyframes`${fadeInLeft}`
const fadeinright = keyframes`${fadeInRight}`

export const Nav = styled.nav`
 background: rgb(30,30,30);
 height: 80px;
 display: flex;
 justify-content: space-between;
 padding: 0.1rem calc((1vw -1000px)/2);
 z-index: 10;
 position: fixed;
 width: 100%;
 animation: 1s ${fadeindown};

 

 @media screen and (max-with: 960px){
     transition: 0.8s all ease;
 }
`;

export const NavLink = styled(LinkS)`
color: #fff;
font-size:1.5em;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-weight: 200;
transition: all 0.5s ease-in-out;
animation: 1s ${fadeinright};


&:hover{
    transition: all 0.5s ease-in-out;
    color: #fcff18;
    tranform: scale(0.7);
}

&.active{
    color: #fcff18;
    font-weight: 700;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #fff;
animation: 1s ${fadeinleft};

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 10;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: 1%;


@media screen and (max-width:768px){
    display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px){
    display: none
}
`;
export const NavBtnLink = styled(Link)`
border-radius: 50px;
background: #178bb3;
padding: 10px 22px;
color: #fff;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`;