import './Projets.css'
import data from '../../data/projets.json'
import { Splide, SplideSlide } from '@splidejs/react-splide';
// thème par défaut de react splide
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/sea-green';
import { useEffect, useState } from 'react';

function Projets() {
    // On définit les options à rajouter ou retirer au slider selon l'orientation de l'appareil
    const [options, setOptions] = useState({});
    const [orientationImg, setOrientationImg] = useState(null);
    
    useEffect(()=> {
        // const getImg = async () => {
        //     const dd = await orientationImg(process.env.PUBLIC_URL + data[3].main_image)
        //     return dd;
        // }
        // // getImg()
        // console.log("path :", process.env.PUBLIC_URL + data[3].main_image)
        // console.log("getOrientationImg :", getImg());
        
        async function handleResize() {
            let orientation = window.innerHeight > window.innerWidth ? "portrait" : "paysage";
            switch (orientation) {
                case "portrait":
                    setOptions(
						{ 
                            type: "slide",
                            height: null,
                            // autoHeight: true,
                            width: "100vw",
                            heightRatio: 0.5,
                            gap   : null,
                            padding: null,
                        },
					);
                    break;
                    
                case "paysage":
                    setOptions(
						{
							type: "loop",
							height: "65vh",
							width: null,
							gap: "1rem",
							padding: "5rem",
						},
					);
                    break;
                
                default:
                    break;
            }
        }
        
        // Lancement de la fonction la première fois afin qu'elle soit initialisée dès le début
        handleResize();
    
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
                options={options} 
                className='splide-tag'
                aria-label="Projets"
            >
                {data.sort((a, b) => (a.id > b.id ? 1 : -1)).map((proj)=> (
                    <SplideSlide className={proj.orientation === "portrait" ? "slide-portrait" : ""} key={proj.id}>
                        <img className='splide-img' src={process.env.PUBLIC_URL + (proj.main_image ||'images/background_competences.webp')} alt={proj.main_image}/>
                    </SplideSlide>
                ))}
            </Splide>
		</div>
	);
}

export default Projets;