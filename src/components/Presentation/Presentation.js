import './Presentation.css'

function Presentation() {
	return (
		<div className="App">
			<div className="pres">
                <div className='pres-divLogo'>
				    <img id='avatar' className='pres-divLogo-avatar' src={process.env.PUBLIC_URL + "/avatar.png"} alt="Avatar" />
                </div>
                {/* <div className='pres-descr'>
                    Hey, 
                    <br/>
                    Je m'appelle Joan SMITH
                    <br/>
                    Et je suis Développeur Web Full-Stack
                    <h2>Straight to the point !</h2>
                </div> */}
			</div>
		</div>
	);
}

export default Presentation;
