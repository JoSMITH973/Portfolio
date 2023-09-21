import './Projets.css'
import data from '../../data/projets.json'

function Projets() {
	return (
		<div className="proj">
			<h1 className='comp-title'>Projets</h1>
            <div className='proj-group'>
                {data.reverse().map((proj)=> (
                    <div className='proj-card'>
                        <div className='card-title'>
                            {proj.nom}
                        </div>
                        <img className='card-img' src={process.env.PUBLIC_URL + 'images/background_competences.webp'} />
                        {/* <img className='card-img' src={process.env.PUBLIC_URL + proj.main_image} /> */}
                    </div>
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