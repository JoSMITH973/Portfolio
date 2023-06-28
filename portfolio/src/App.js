import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Presentation from "./components/Presentation/Presentation";
import Parcours from "./components/Competences/Competences";
import Projets from "./components/Projets/Projets";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section id='presentation'>
            <Presentation />
        </section> 
        <section id='parcours'>
            <Parcours />
        </section>
        <section id='projets' >
            <Projets />
        </section>
      </header>
    </div>
  );
}

export default App;
