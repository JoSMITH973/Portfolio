import './Projets.css'
import data from '../../data/projets.json'
import { Splide, SplideSlide } from '@splidejs/react-splide';
// thème par défaut de react splide
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';
import { useEffect, useState } from 'react';

function Projets() {
    
    // On définit les options à rajouter ou retirer au slider selon l'orientation de l'appareil
    const [orientationOption, setOrientationOption] = useState([]);
    
    useEffect(()=> {

        async function handleResize() {
            let orientation = window.innerHeight > window.innerWidth ? "portrait" : "paysage";
            console.log('orientation :', orientation);
            switch (orientation) {
                case "portrait":
                    setOrientationOption([{type: "slide", height: null, width: "100vw"}]);  
                    break;
                    
                case "paysage":
                    setOrientationOption([{type: "loop", height: "75vh", width: null}]);
                    break;
            }
        }
    
        // Attach the event listener to the window object
        window.addEventListener('resize', handleResize);
    
        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

	return (
		<div data-aos="fade-up" className="proj">
			<h1 className='comp-title'>Projets</h1>
            <Splide 
                options={{
                    rewind: true,
                    gap   : '1rem',
                    padding: '5rem',
                    ...orientationOption[0],
                }} 
                className='splide-tag'
                aria-label="Projets"
            >
                {data.sort((a, b) => (a.id > b.id ? 1 : -1)).map((proj)=> (
                    <SplideSlide key={proj.id}>
                        <img className='splide-img' src={process.env.PUBLIC_URL + (proj.main_image ||'images/background_competences.webp')} alt={proj.main_image}/>
                    </SplideSlide>
                ))}
            </Splide>
		</div>
	);
}

export default Projets;