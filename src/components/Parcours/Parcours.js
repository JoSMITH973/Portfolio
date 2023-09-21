import './Parcours.css';
import data from '../../data/parcours.json'
import { convertHtmlToReact } from '@hedgedoc/html-to-react';

function Parcours() {
  return (
    <div className="parc">
        <h1 className='comp-title'>
            Parcours
        </h1>
        <div className='parc-group'>
            {data.reverse().map((parc)=> (
                <div className='parc-group-div' key={parc.id}>
                    {parc.nom && (<h4 className='parc-group-div-title'>{parc.nom}</h4>)}
                    {parc.date && (
                        <p className='parc-group-div-date'>
                            {parc.date}
                        </p>
                    )}
                    {parc.lieu && (
                        <h5 style={{"color":"#dd6b1e"}}>
                            {parc.lieu}
                        </h5>
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

export default Parcours;
