import React,{useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import FreeSoloCreateOption from '../components/Search';

const Home = () => {
    const [isOpen, setIsOpen]=useState(false)

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            {/* <FreeSoloCreateOption/> */}
        </>
    )
}
export default Home
