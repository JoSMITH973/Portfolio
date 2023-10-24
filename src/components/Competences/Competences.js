import data from "../../data/competences.json";
import "./Competences.css";
import { Button, ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";

import { faCode, faDatabase, faRuler } from '@fortawesome/fontawesome-free-solid';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useScroll } from "../../util/useScroll";
import { slideAnim } from "../../util/animation";

import StackGroup from '../Presentation/CompetencesComponent';
import { Container } from "../../Styles/Styles";

function Competences() {
    const [ref, controls] = useScroll();

	return (
		<StyledTechnologies data-aos="fade-up" className="comp">
			<h1 className="comp-title">Compétences</h1>
			<br />
            <Grid>
                <StackGroup icon={faCode}       title={data[0].nom} technologies={data[0].collection} />
                <StackGroup icon={faLaptopCode} title={data[1].nom} technologies={data[1].collection} />
                <StackGroup icon={faDatabase}   title={data[2].nom} technologies={data[2].collection} />
                <StackGroup icon={faCode}       title={data[3].nom} technologies={data[3].collection} />
            </Grid>
		</StyledTechnologies>
	);
}

const StyledTechnologies = styled(Container)`
    flex-direction: column;
`;

const Grid = styled(motion.div)`
	width: 100%;
	display: grid;
	gap: 2rem;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	text-align: center;
`;

export default Competences;
