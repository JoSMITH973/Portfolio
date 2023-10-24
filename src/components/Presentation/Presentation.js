import './Presentation.css'
import data from "../../data/competences.json";

import {Container, Description, Social, Circle} from "../../Styles/Styles";
import styled from 'styled-components';
import { motion } from "framer-motion";
import { useScroll } from "../../util/useScroll";
import { slideAnim } from "../../util/animation";

import { faCode, faDatabase, faRuler } from '@fortawesome/fontawesome-free-solid';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import StackGroup from './CompetencesComponent';

function About() {

    const [ref, controls] = useScroll();

    return (
        <div>
            <StyledDiv data-aos="fade-up" animate={controls} ref={ref} id="about"  variants={slideAnim.up}>
                <motion.h2>Présentation</motion.h2>
                <ContainerPresentation>
                    <StyledPres>
                        <br/>
                        <motion.p >Étant <span>passioné d'informatique depuis petit</span>, j'ai essayé de <span>coder</span> une fois et ce fut <span>un pur plaisir</span>. Je me suis donc naturellement dirigé vers le domaine du développement informatique. 
                        <br/>
                        <br/>
                        Impatient de mettre en pratique mes connaissances je me suis dirigé vers l'alternance pour effectuer mes études. 
                        J'ai commencé par un BTS SNIR, puis enchaîner sur un Bachelor Concepteur Développeur et viens de terminer mes études par un <span>Mastère Développeur Manageur Full-Stack.</span>
                        <br/>
                        <br/>
                        <span>L'apprentissage est la clé de la réussite !</span>
                        </motion.p> 
                        <br/>
                        <p className='bold'>Technologies de prédilection</p>
                        <Technologies>
                            <Social>
                                <Circle/>
                                <li>React</li>
                            </Social>
                            <Social>
                                <Circle/>
                                <li>Javascript</li>
                            </Social>
                            <Social>
                                <Circle/>
                                <li>PHP</li>
                            </Social>
                            <Social>
                                <Circle/>
                                <li>SQL</li>
                            </Social>
                        </Technologies>
                    </StyledPres>

                    <StyledFenetre animate={controls} ref={ref} id="about" variants={slideAnim.right}>
                        <Window>
                            <div className="circle"></div>
                            <div className="circle2 circle"></div>
                            <div className="circle3 circle"></div>
                        </Window>
                        <p>
                            <span>const</span> Joan SMITH = &#123;<br/>
                        </p>
                            <Properties>
                                <span> Age     </span> = 24,<br/>
                                <span> Ville   </span> = "Paris",<br/>
                                <span> Anglais   </span> = "B2",<br/>
                                <span> Espagnol  </span> = "A2",<br/>
                                <span> Diplôme  </span> = "BAC +5",<br/>
                                <span> Années en alternance </span> = "5 ans"<br/>
                            </Properties>
                            <br/>
                            &#125;;
                    </StyledFenetre>
                </ContainerPresentation>
            </StyledDiv>
            <StyledCompetences data-aos="fade-up" className="comp">
                <motion.h2 className="comp-title">Compétences</motion.h2>
                <br />
                <Grid>
                    <StackGroup icon={faCode}       title={data[0].nom} technologies={data[0].collection} />
                    <StackGroup icon={faLaptopCode} title={data[1].nom} technologies={data[1].collection} />
                    <StackGroup icon={faDatabase}   title={data[2].nom} technologies={data[2].collection} />
                    <StackGroup icon={faCode}       title={data[3].nom} technologies={data[3].collection} />
                </Grid>
            </StyledCompetences>
        </div>
    )
}

const StyledCompetences = styled(Container)`
    flex-direction: column;
`;

const Grid = styled(motion.div)`
	width: 100%;
	display: grid;
	gap: 2rem;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	text-align: center;
`;

// Div À propos
const StyledDiv = styled(Container)`
    padding: 0rem 2rem;
    min-height: 50vh;
    flex-direction: column;
    align-items: flex-start;
`
const ContainerPresentation = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    @media (max-width: 850px){
        display: block;
}
`
// Section présentation
const StyledPres = styled(Description)`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex: 3;
    margin-right: 2rem;
    p span, .bold{
    font-family: var(--font-sans);
    color: var(--color-keyword);
    }
`

const Technologies = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
`

// Div Fenêtre

const Class = styled.div`
 margin-left: 1.5rem;
    span{
        color: var(--color-keyword);
    }
`

const StyledFenetre = styled(motion.div)`
border-radius: 20px;
max-height: 19rem;
border: 4px solid var(--color-border);
background: var(--color-bg);
box-shadow: var(--color-shadow);
padding: 2rem;
transition: 0.1s ease-in-out;
flex: 2;
line-height: 130%;
animation: float 3s infinite alternate;
@keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
}

h4{
    color: ${props => props.theme.className};
    display: inline-block;
}
p, span, div{
    font-size: 0.8rem;
    text-align: left;
    color: ${props => props.theme.headerColor};
}
span{
    color: var(--color-keyword);
}
@media (max-width: 850px){
    margin-top: 3rem;
}
`
const Window = styled(motion.div)`
display: flex;
width: 100%;
flex-direction: row;
align-items: center;
justify-content: flex-start;
margin-bottom: 1rem;
.circle{
    height: 10px;
    width: 10px;
    margin-right: 0.5rem;
    border-radius: 50%;
    background: #ff5e59;
    &:nth-child(2){
        background: #ffbb2e
    }
    &:nth-child(3){
        background: #22ce32;
    }
}
`
const Properties = styled(motion.div)`
    margin-left: 1.5rem;
    span{
        color: var(--color-keyword);
    }
`

export default About;