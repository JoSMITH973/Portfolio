import React, { useEffect, useState, useContext } from 'react';
import {Navbar, Nav} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { getPath } from '../tools/Regex';
import { ThemeContext } from "../ThemeContext/ThemeContext";
import Switch from "react-switch";
import './TopBar.scss';

function TopBar () {

    const { toggle, toggleFunction, variantNavBar, bgNavBar, variantButton, bgForm } = useContext(ThemeContext);
    // const thee = useContext(ThemeContext);
    const [error, setError] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [path, setPath] = useState(null);
    
    useEffect(() => {
        let pathToExtract = getPath.exec(window.location.pathname);
        setPath(pathToExtract[0]);
    }, []);

    return (
        // <Navbar bg="dark" variant="dark" expanded={expanded} expand="lg" className="navbar" style={{fontSize:"120%", position:"fixed",top:0,width:"100%", zIndex:1000}}>
        <Navbar bg={bgNavBar} variant={variantNavBar} expanded={expanded} expand="lg" className="navbar" style={{fontSize:"120%", position:"fixed",top:0,width:"100%", zIndex:1000}}>
            <Link key="1" onClick={() => setExpanded(false)} className="nav-link-logo" smooth spy to="presentation">
                <img className='navbar-logo' src={process.env.PUBLIC_URL + "/donut.png"} alt="Accueil" /> 
            </Link>
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav activeKey={path} className="mr-auto">
                    {/* {!loading && !error && (menus.map((menu) => (
                        <NavLink key={menu.id} onClick={() => setExpanded(false)} className="nav-link" to={menu.path}>{menu.nom}</NavLink>
                    )))} */}
                    <Link key="2" onClick={() => setExpanded(false)} className="nav-link" smooth spy to="presentation">
                        À propos
                    </Link>
                    <Link key="3" onClick={() => setExpanded(false)} className="nav-link" smooth spy to="parcours">        
                        Compétences
                    </Link>
                    <Link key="4" onClick={() => setExpanded(false)} className="nav-link" smooth spy to="projets">         
                        Projets
                    </Link>
                    {/* <div id="alignSwitch" className="nav-link">
                        Mode {toggle ? "Sombre" : "Clair" }
                        <Switch onChange={toggleFunction} checked={toggle} offColor="#ffffff" offHandleColor="#4B4F4F" onColor="#4B4F4F"  onHandleColor="#ffffff" />
                    </div> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default TopBar;