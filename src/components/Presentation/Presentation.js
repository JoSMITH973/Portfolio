import './Presentation.css'
import { useEffect, useState } from 'react';

function Presentation() {

	return (
		<div className="pres">
			<div className="pres-card">
                <img id='avatar' className='pres-card-avatar' src={process.env.PUBLIC_URL + "/avatar2.jpeg"} alt="Avatar" />
                <div>
                    <h1 className="pres-card-title">Développeur Web Full-Stack</h1>
                </div>
                {/* <h3 className="pres-card-subtitle">Développer, plus qu'un métier, une passion !</h3>
                <h3 className="pres-card-descr">
                <br/>
                Développeur Web Full-Stack titulaire d'un BAC +5 en tant que Développeur Manageur Full-Stack.
                </h3> */}
			</div>
		</div>
	);
}

export default Presentation;
