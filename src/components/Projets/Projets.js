import './Projets.css'
import data from '../../data/projets.json'

function Projets() {
	return (
		<div className="proj">
		{/* <div className="portfolio">
		<div className="portfolio-container"> */}
			<h1 className='comp-title'>Projets</h1>
            <div className='proj-group'>
            {/* <div className='portfolio-item'> */}
                {data.sort((a, b) => (a.id > b.id ? 1 : -1)).map((proj)=> (
                    <div className='proj-card'>
                        <div className='card-title' style={{color:proj.color}}>
                            {proj.nom}
                        </div>
                        <img className='card-img' src={process.env.PUBLIC_URL + (proj.main_image ||'images/background_competences.webp')} />
                    </div>
                    // <div className='portfolio-wrap'>
                    //     <div className='portfolio-info'>
                    //         <h4>
                    //             {proj.nom}
                    //         </h4>
                    //         <p>
                    //             {proj.type}
                    //         </p>
                    //     </div>
                    //     <img className='img-fluid' src={process.env.PUBLIC_URL + (proj.main_image ||'images/background_competences.webp')} />
                    //     {/* <img className='card-img' src={process.env.PUBLIC_URL + proj.main_image} /> */}
                    // </div>
                ))}
                {/* <ul>
                    <li>DS exotique : Blog culinaire</li>
                    <li>SVentory : Application de gestion d'inventaire</li>
                    <li>Your Favorites Simpsons : Projets scolaire...</li>
                    <li>Galcktickos CB : Projets scolaire...</li>
                </ul> */}
            </div>
		</div>
	);
}

export default Projets;