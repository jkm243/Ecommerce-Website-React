import React,{useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
// import FreeSoloCreateOption from '../components/Search';
import HeroSection from '../components/HeroSection';
import Cards from '../components/Cards';

const Home = () => {
    const [isOpen, setIsOpen]=useState(false)

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <Cards/>
            {/* <FreeSoloCreateOption/> */}
        </>
    )
}
export default Home
