import React, { useEffect, useState, useContext } from 'react';
import {Navbar, Nav, NavbarBrand} from "react-bootstrap";
import { Link } from 'react-scroll';
import { getPath } from '../tools/Regex';
import { ThemeContext } from "../Context/ThemeContext";
import './TopBar.scss';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { CgSun } from 'react-icons/cg';
import { BsFillMoonFill } from 'react-icons/bs';

function TopBar ({toggleTheme, theme}) {

    const [expanded, setExpanded] = useState(false);
    const [path, setPath] = useState(null);
    
    useEffect(() => {
        let pathToExtract = getPath.exec(window.location.pathname);
        setPath(pathToExtract[0]);
    }, []);

    const [isMenuActive, toggleMenu] = useState(false);  
    // const { pathname } = useLocation();
    
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <Container>
            <Navbar id="nav" bg={theme} variant={theme} expanded={expanded} expand="lg" className="navbar" style={{fontSize:"120%", position:"fixed",top:0,width:"100%"}}>
                <h2 className='topbar-title' onClick={()=>window.scrollTo(0, 0)} >Welcome</h2>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav activeKey={path} className="ms-auto">
                        <NavLink key="2" onClick={() => setExpanded(false)} className="nav-link" smooth duration={250} spy to="presentation">
                            Présentation
                        </NavLink>
                        {/* <NavLink key="3" onClick={() => setExpanded(false)} className="nav-link" smooth duration={250} spy to="competences">        
                            Compétences
                        </NavLink> */}
                        {/* <NavLink key="4" onClick={() => setExpanded(false)} className="nav-link" smooth duration={250} spy to="parcours">        
                            Parcours
                        </NavLink> */}
                        <NavLink key="5" onClick={() => setExpanded(false)} className="nav-link" smooth duration={250} spy to="projets">         
                            Projets
                        </NavLink>
                        <a href={process.env.PUBLIC_URL+'/cv/CV_Joan_SMITH.pdf'} target="_blank" rel="noopener noreferrer" onClick={() => setExpanded(false)} className="nav-link">Mon CV</a>
                        
                        {/* <Label className="nav-link">
                            {theme ==="light" ? <BsFillMoonFill /> : <CgSun />}
                            <input onClick={toggleTheme}/>
                        </Label> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

const Container = styled(motion.div)`
  z-index: 1;
  position: fixed;
  left: 0;
  right: 0;
  background: linear-gradient(to bottom, var(--color-bg) 0%, rgba(0,0,0,0) 100%);
`
const Label = styled.label`
	cursor: pointer;
    padding-top: 0.75rem;
	display: flex;
	vertical-align: middle;
	input {
		opacity: 0;
		margin: 0;
		padding: 0;
		width: 0;
	}
`;

const NavLink = styled(Link)`
&:hover {
    color: var(--color-main);
}
`

export default TopBar;