import './Presentation.css'

function Presentation() {
	return (
		<div className="pres">
			<div className="pres-card">
                <h1 className="pres-card-title">Développeur Full-Stack</h1>
                <h2 className="pres-card-descr">Je développe des applications web et mobiles </h2>
                <img id='avatar' className='pres-card-avatar' src={process.env.PUBLIC_URL + "/avatar2.jpeg"} alt="Avatar" />
			</div>
		</div>
	);
}

export default Presentation;
