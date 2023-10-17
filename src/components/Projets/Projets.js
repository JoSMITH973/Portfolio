import './Projets.css'
import data from '../../data/projets.json'
import { Splide, SplideSlide } from '@splidejs/react-splide';
// thème par défaut de react splide
import '@splidejs/react-splide/css';
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';
import { useEffect, useState, useRef } from 'react';
// On vérifie l'orientation de l'image afin de rajouter ou non une classe permettant d'ajuster la taille de l'image
import { getOrientationImg } from '../../tools/getOrientationImg';

function Projets() {
    // On définit les options à rajouter ou retirer au slider selon l'orientation de l'appareil
    const [options, setOptions] = useState({});
    const [orientationImg, setOrientationImg] = useState(null);
    const ref = useRef(null)
    useEffect(()=> {
        // const getImg = async () => {
        //     const dd = await orientationImg(process.env.PUBLIC_URL + data[3].main_image)
        //     return dd;
        // }
        // // getImg()
        // console.log("path :", process.env.PUBLIC_URL + data[3].main_image)
        // console.log("getOrientationImg :", getImg());
        
        async function handleResize() {
            console.log('ref :', ref.current);
            let orientation = window.innerHeight > window.innerWidth ? "portrait" : "paysage";
            console.log('orientation :', orientation);
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
                ref={ref}
                options={options} 
                className='splide-tag'
                aria-label="Projets"
            >
                {data.sort((a, b) => (a.id > b.id ? 1 : -1)).map((proj)=> {
                    getOrientationImg(process.env.PUBLIC_URL+proj.main_image).then(val=>{setOrientationImg(val)});
                    return (
                        <SplideSlide className={orientationImg === "portrait" ? "slide-portrait" : ""} key={proj.id}>
                            <img className='splide-img' src={process.env.PUBLIC_URL + (proj.main_image ||'images/background_competences.webp')} alt={proj.main_image}/>
                        </SplideSlide>
                    )
                })}
            </Splide>
		</div>
	);
}

export default Projets;