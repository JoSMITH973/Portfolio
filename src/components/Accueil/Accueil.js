import './Accueil.css'
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import styled from "styled-components";
import { motion } from 'framer-motion';

function Presentation() {

	return (
		<GrayDiv className="acc">
			<div className="acc-card">
                <img id='avatar' className='acc-card-avatar' src={process.env.PUBLIC_URL + "/avatar2.jpeg"} alt="Avatar" />
                <h1 className="acc-card-name">Joan SMITH</h1>
                <TypeAnimation 
                    sequence={["Développeur Web Full-Stack",2000,"",600]}
                    speed={225}
                    repeat={Infinity}
                    className="acc-card-title"
                        />
                         
			</div>
		</GrayDiv>
	);
}

const GrayDiv = styled.div`
    transition: backdrop-filter var(--transition-time);
    backdrop-filter: grayscale(var(--grayscale-level));
    height: 100%;
`;

export default Presentation;
