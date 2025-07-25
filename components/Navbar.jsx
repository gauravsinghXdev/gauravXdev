import React from 'react'
import './ConsleText'
import ScrambleText from './ScrambleText'

const Navbar = () => {
    return (
        <>
            <nav>
                <label className="logo logo-icon">&lt;</label><span className="logo" id="gaurav">/gauravXdev</span><label className="logo">&gt;</label>
                <ul className="hack">
                    <li><a id="HOME" data-value="HOME" className="active" href="#homepage"><ScrambleText text="HOME" /></a></li>
                    <li><a id="PROJECTS" data-value="PROJECTS" href="#pro-head"><ScrambleText text="WORK" /></a></li>
                    {/* <li><a id="SKILLS" data-value="SKILLS" href="#skill-section">SKILLS</a></li> */}
                    <li><a id="CONTACT" data-value="CONTACT" href="#cont-section"><ScrambleText text="CONTACT" /></a></li>     
                </ul>
            </nav>
        </>
    )
}

export default Navbar
