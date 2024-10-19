import './Parcours.css';
import data from '../../data/parcours.json'
import { convertHtmlToReact } from '@hedgedoc/html-to-react';
import styled from 'styled-components';
import {motion} from "framer-motion";

function Parcours() {
  return (
    <div data-aos="fade-up" className="parc">
        <h1 className='comp-title'>
            Parcours
        </h1>

        <div className='parc-group'>
            {data.sort((a, b)=> b.id - a.id).map((parc)=> (
                <div className='parc-group-div' key={parc.id}>
                    {parc.nom && (<h4 className='parc-group-div-title'>{parc.nom}</h4>)}
                    {parc.lieu && (
                        <h6 className='parc-group-div-lieu' style={{"color":"#dd6b1e"}}>
                            {parc.lieu}
                        </h6>
                    )}
                    {parc.date && (
                        <PDate className='parc-group-div-date'>
                            {parc.date}
                        </PDate>
                    )}
                    {parc.description && (
                        <div className='parc-group-div-descr'>
                            {convertHtmlToReact(parc.description)}
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
  );
}

const Grid = styled(motion.div)`
	width: 100%;
	display: grid;
	gap: 2rem;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	text-align: center;
`;

const PDate = styled.p`
    background-color: var(--background-color-date)
`;

export default Parcours;
