// import './Accueil.css'
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import styled from "styled-components";
import { motion } from 'framer-motion';

function Accueil() {

	return (
		<GrayscaleDiv className="acc">
			<AccueilDiv className="acc-card">
                <Avatar id='avatar' className='acc-card-avatar' src={process.env.PUBLIC_URL + "/avatar2.jpeg"} alt="Avatar" />
                <DivPres >
                    <NameTitle>Joan SMITH</NameTitle>
                    <Animation 
                        sequence={["Développeur Web Full-Stack",2000,"",600]}
                        speed={225}
                        repeat={Infinity}
                        className="acc-card-title"
                        />
                </DivPres>
			</AccueilDiv>
		</GrayscaleDiv>
	);
}

const GrayscaleDiv = styled.div`
    transition: -webkit-backdrop-filter var(--transition-time);
    -webkit-backdrop-filter: grayscale(var(--grayscale-level));
    transition: backdrop-filter var(--transition-time);
    backdrop-filter: grayscale(var(--grayscale-level));
    height: 100%;
    margin: 0 auto;
    position: relative;
    width: auto;
    font-family: 'Lobster', cursive;
    animation-name: scale-in;
    animation-duration: 1s;

    @keyframes scale-in {
        0% { transform: scale(0.5, 0.5); }
        50% { transform: scale(1, 1); }
    }
`;

const AccueilDiv = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	/* color: #DD6B1E; */
	color: white;
	text-align: center !important;
`;

const Avatar = styled.img`
	border-radius: 50%;
	margin: 2rem 0;
	width: 55vw;
	@media screen and (min-width: 1024px) {
        width: 210px;
	}
    @media screen and (orientation: landscape) and (max-width: 1024px) {
        width: 10vw;
    }
`;

const DivPres = styled.div`
    text-align: center;
    width:100%;
`;

const NameTitle = styled.h1`
	font-weight: 800;
	font-family: "raleway", sans-serif;
`;
    
const Animation = styled(TypeAnimation)`
    margin-bottom: 1.5rem;
    font-weight: 400;
    font-family: "poppins", sans-serif;
    @media screen and (max-width: 768px) {
        font-size: 20px !important;
    }
    @media (max-width: 992px) {
        margin-top: 10px;
        // font-size: 10px;
        line-height: 24px;
    }
`;

export default Accueil;
