import './Presentation.css'

function Presentation() {
	return (
		<div className="App">
			<header className="App-header">
				Joan SMITH
				<br />
				Développeur Web Full-Stack
				<img id='avatar' className='pres-avatar' src={process.env.PUBLIC_URL + "/avatar.png"} alt="Avatar" />
			</header>
		</div>
	);
}

export default Presentation;
