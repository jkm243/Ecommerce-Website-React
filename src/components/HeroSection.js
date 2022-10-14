import React, {useState} from 'react'
import Video from '../assets/bg.jpg'
import {HeroContainer,HeroBg, VideoBg, HeroContent, HeroBtnWrapper,HeroP,HeroH1,ArrowForward,ArrowRight} from './HeroElements'
import {Button} from './ButtonElements'

const HeroSection = () => {

    const [hover,setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }

    return (
        <HeroContainer >
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type = 'image/jpg' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                Market
                </HeroH1>
                <HeroP>
                What you want, when you want 
                </HeroP>
            <HeroBtnWrapper>
                <Button href ="#vid" onMouseEnter={onHover} onMouseLeave={onHover}
                primary='true'
                dark='true'>
                    Commencer {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
