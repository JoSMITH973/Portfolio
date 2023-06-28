import data from '../../data/competences.json'

function Parcours() {
	console.log('data :', data);
    
    return (
		<div className="App">
			<header className="App-header">
                {data.sort((a, b) => a.order > b.order? 1 : -1).map((categorie) => (
                    <div>
                        <h2>
                            {categorie.name}
                        </h2>
                        <table>
                            {categorie.collection.sort((a, b) => a.order > b.order? 1 : -1).map((el) => (
                                <tr>
                                    <td>
                                        {el.name} :
                                    </td>
                                    <td>
                                        {el.rate} / 5
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </div>
                ))}
			</header>
		</div>
	);
}

export default Parcours;
