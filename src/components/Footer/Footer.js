import { useEffect, useState } from "react";
import data from "../../data/footer.json";
import "./Footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function Footer() {
    const [linkedinLink, setLinkedinLink] = useState(null);
    const [githubLink, setGithubLink] = useState(null);
    
    // On récupère les liens des différents sites une fois  
    useEffect(()=>{
        setLinkedinLink(data.filter(a=>a.name==="LinkedIn")[0].url);
        setGithubLink(data.filter(a=>a.name==="GitHub")[0].url);
    }, [data]);

    // Définition de la taille des icones de linkedin et github
    let iconSize = 35;

	return (
		<div className="footer">
			<div className="footer-group">
                <a target="_blank" href={linkedinLink}>
                    <BsLinkedin size={iconSize}  />
                </a>
                <a target="_blank" href={githubLink}>
                    <BsGithub size={iconSize} />
                </a>
			</div>
            <br/>
            <p>© Copyright 2023 - Joan SMITH. Tous droits réservés.</p>
		</div>
	);
}

export default Footer;
