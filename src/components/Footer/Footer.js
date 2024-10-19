import { useEffect, useState } from "react";
import data from "../../data/footer.json";
import "./Footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

function Footer() {
    const [linkedinLink, setLinkedinLink] = useState(null);
    const [githubLink, setGithubLink] = useState(null);
    const [mailLink, setMailLink] = useState(null);
    
    // On récupère les liens des différents sites une fois  
    useEffect(()=>{
        setLinkedinLink(data.filter(a=>a.name==="LinkedIn")[0].url);
        setGithubLink(data.filter(a=>a.name==="GitHub")[0].url);
        setMailLink(data.filter(a=>a.name==="Mail")[0].url);
    }, []);

    // Définition de la taille des icones de linkedin et github
    let iconSize = 35;

	return (
		<div className="footer">
			<div className="footer-group">
                <a target="_blank" rel="noreferrer" href={linkedinLink}>
                    <BsLinkedin color="var(--color-text)" size={iconSize}  />
                </a>
                <a target="_blank" rel="noreferrer" href={githubLink}>
                    <BsGithub color="var(--color-text)" size={iconSize} />
                </a>
                <a target="_blank" rel="noreferrer" href={mailLink}>
                    <FiMail color="var(--color-text)" size={iconSize} />
                </a>
			</div>
            <br/>
            <p>© Copyright 2024 - Joan SMITH. Tous droits réservés.</p>
		</div>
	);
}

export default Footer;
