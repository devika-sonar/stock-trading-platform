import React from 'react';
import OpenAccounts from '../OpenAccounts';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Createticket from './Createticket';
import Hero from "./Hero";
import Support from "./Support";

function Supportpage() {
    return ( 
        <>
            
            <OpenAccounts/>
        
            <Createticket/>
            <Hero/>
            <Support/>
        </>
     );
}

export default Supportpage;