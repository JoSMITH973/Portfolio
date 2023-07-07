import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Presentation from "./components/Presentation/Presentation";
import Competences from "./components/Competences/Competences";
import Parcours from "./components/Parcours/Parcours";
import Projets from "./components/Projets/Projets";

function App() {
  return (
    <div className="App">
        <section id='presentation'>
            <Presentation />
        </section> 
        <section id='competences'>
            <Competences />
        </section>
        <section id='parcours'>
            <Parcours />
        </section>
        <section id='projets' >
            <Projets />
        </section>
    </div>
  );
}

export default App;
