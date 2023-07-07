import { useState, useEffect, useCallback } from "react";
import { CalculateTextWidth } from "../../tools/TextWidth.js";
import data from "../../data/competences.json";
import "./Competences.css";
import { Button, ButtonGroup, DropdownButton, Dropdown } from "react-bootstrap";

function Competences() {
    // On définit quel catégorie de compétences afficher
	const [activeDiv, setActiveDiv] = useState(1);
    // On affecte les compétences en fonction du langage

	return (
		<div className="comp">
			<h1 className="comp-title">Compétences</h1>
			<br />
			<div className="comp-group">
                {data.filter((categorie) => categorie.active).sort((a, b) => (a.order > b.order ? 1 : -1)).map((categorie) => (
                    <div key={categorie.id} className="comp-group-stack">
                        <h3 style={{"textAlign":"center"}}>{categorie.nom}</h3>
                        {categorie.collection
                            .sort((a, b) => (a.rate < b.rate ? 1 : -1))
                            .map((el) => (
                                <div key={categorie.id+'-'+el.order} className="comp-group-stack-lng">
                                    <div className="comp-group-stack-lng-name">
                                        {el.nom}
                                    </div>
                                    <div className="comp-group-stack-lng-rate">
                                        <div
                                            style={{
                                                width: el.rate * 20 + "%",
                                                // backgroundColor: el.color,
                                            }}
                                            className="rate-val"
                                        >
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <br/>
                        </div>
                    ))}
			</div>
		</div>
	);
}

export default Competences;
