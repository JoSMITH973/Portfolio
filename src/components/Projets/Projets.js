import './Projets.css'
import data from '../../data/projets.json'

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Technologies } from '../../Styles/Styles'
import { useScroll } from '../../util/useScroll';
import { slideAnim } from "../../util/animation"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/fontawesome-free-solid'

function Projets() {

    const [ref, controls] = useScroll();
    
    return (
		<StyledProjects data-aos="fade-up" className="proj">
			{/* <h1 className="comp-title">Projets</h1> */}
            <TitleSection>Projets</TitleSection>
            <br/>
			{data
				.sort((a, b) => (a.id > b.id ? 1 : -1))
                .filter(el => el.active)
				.map((proj) => (
					<FeaturedProject
                        key={proj.id}
						// animate={controls}
						// ref={ref}
						// variants={slideAnim.up}
					>
						<ImageDiv>
							<Image
								src={process.env.PUBLIC_URL + (proj.main_image ||'images/background_competences.webp')}
								alt="project_video"
								controls
							/>
						</ImageDiv>
						<About>
							<Header>
								<a href={proj.lien} target="_blank" rel="noreferrer">
									<h3>{proj.nom}</h3>
								</a>
							</Header>
							<AboutText>
								<p>{proj.description}</p>
							</AboutText>
							<More>
								<Technologies>
									{proj.technologies?.map((technologie) => (
										<li key={technologie}>{technologie}</li>
									))}
								</Technologies>
								<a href={proj.lien_github} target="_blank" rel="noreferrer">
									<FontAwesomeIcon
										icon={faCode}
									></FontAwesomeIcon>
								</a>
							</More>
						</About>
					</FeaturedProject>
				))}
		</StyledProjects>
	);
}

const TitleSection = styled.h2`
    align-items: left;
`;

const StyledProjects = styled(motion.div)`
	max-width: 1080px;
	padding: 5rem 2rem;
	margin: 0 auto;
	display: flex;
	
	flex-direction: column;
`;

const FeaturedProject = styled(motion.div)`
	margin-bottom: 4rem;
    align-items: center;
	@media (min-width: 850px) {
		display: flex;
	}
`;

const Header = styled.div`
	padding: 1rem 2rem;
	p {
		font-weight: bold;
		font-size: 0.7rem;
		color: var(--color-main);
	}
`;
const AboutText = styled.div`
	padding: 2rem;
	background: var(--color-bg-2);
    border-radius: 0 5px 5px 0;
`;
const More = styled.div`
	padding: 1rem;
	display: flex;
	gap: 0.75rem;
	align-items: center;
`;

const About = styled.div`
	flex: 1;
`;

const ImageDiv = styled.div`
	position: relative;
	flex: 1;
	display: flex;
	align-items: center;
    max-Height: 15vh;
    width: auto;
`;

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 10px;
`


export default Projets;