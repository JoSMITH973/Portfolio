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
	display: flex;
	width: 100%;
	max-width: 90vw;  
	align-self: center;
	@media screen and (max-width: 768px) {
		max-height: 50rem;
		flex-direction: column;
		width: 100%;
		height: 33rem;
	}
	@media screen and (min-width: 768px) {
		height: 18rem;
	}
`;

const Header = styled.div`
	flex: 1;
	p {
		font-weight: bold;
		font-size: 0.7rem;
		color: var(--color-main);
	}
`;
const AboutText = styled.div`
	flex: 3;
	// padding: 2rem;
	background: var(--color-bg-2);
    border-radius: 0 5px 5px 0;
`;
const More = styled.div`
	flex: 2;
	display: flex;
	gap: 0.75rem;
	align-items: center;
	ul {
		padding-left: 0;
	}
`;

const About = styled.div`
	flex: 1;
	div {
		padding: 1rem
	}
`;

const ImageDiv = styled.div`
	position: relative;
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
    width: auto;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

const Image = styled.img`
	position: absolute;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
`;

export default Projets;