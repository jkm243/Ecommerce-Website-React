import styled, { keyframes } from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import {fadeIn,fadeInLeft,fadeInRight,fadeInUp} from 'react-animations'

const fadeinup = keyframes`${fadeInUp}`
const fadeinleft = keyframes`${fadeInLeft}`
const fadeinright = keyframes`${fadeInRight}`
const fadein = keyframes`${fadeIn}`


export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 750px;
    position: relative;
    z-index: 1;

    :before{
        content:'';
        position: absolute;
        top: 0;
        left:0;
        right:0;
        bottom:0;
        background: linear-gradient(180deg,rgba(0,0,0,0.2)0%,rgba(0,0,0,0.6)100%) , linear-gradient(180deg, rgba(0,0,0,0.2)0%, transparent 100%);
        z-index: 2;     
    }
`

export const HeroBg= styled.div`
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    overflow: hidden;
`
export const VideoBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    animation: 1s ${fadein};
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 0px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px){
        padding: 5px 24px;
    }
    @media screen and (max-width: 480px){
        padding: 5px 24px;
    }
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 150px;
    font-family: 'Monoton', cursive;
    text-align: center;
    animation: 1s ${fadeinright};
    margin-top: 0;
    margin-bottom: 0;

    @media screen and (max-width: 768px){
        font-size: 80px;
    }
    @media screen and (max-width: 480px){
        font-size: 60px;
    }
`
export const HeroP = styled.p`
    margin-top: 5px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    animation: 1s ${fadeinleft};

    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`
export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: 1s ${fadeinup};
`
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight= styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`