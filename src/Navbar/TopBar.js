import React, { useEffect, useState, useContext } from 'react';
import {Navbar, Nav} from "react-bootstrap";
import { Link } from 'react-scroll';
import { getPath } from '../tools/Regex';
import { ThemeContext } from "../Context/ThemeContext";
import './TopBar.scss';

function TopBar () {

    const { variantNavBar, bgNavBar } = useContext(ThemeContext);
    const [expanded, setExpanded] = useState(false);
    const [path, setPath] = useState(null);
    
    useEffect(() => {
        let pathToExtract = getPath.exec(window.location.pathname);
        setPath(pathToExtract[0]);
    }, []);

    return (
        <Navbar bg={bgNavBar} variant={variantNavBar} expanded={expanded} expand="lg" className="navbar" style={{fontSize:"120%", position:"fixed",top:0,width:"100%", zIndex:1000}}>
            <h2 className='topbar-title'>Welcome</h2>
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav activeKey={path} className="ms-auto">
                    <Link key="2" onClick={() => setExpanded(false)} className="nav-link" smooth duration={250} spy to="presentation">
                        À propos
                    </Link>
                    <Link key="3" onClick={() => setExpanded(false)} className="nav-link" smooth duration={250} spy to="competences">        
                        Compétences
                    </Link>
                    <Link key="4" onClick={() => setExpanded(false)} className="nav-link" smooth duration={250} spy to="parcours">        
                        Parcours
                    </Link>
                    <Link key="5" onClick={() => setExpanded(false)} className="nav-link" smooth duration={250} spy to="projets">         
                        Projets
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default TopBar;