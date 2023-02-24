import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Presentation from "./components/Presentation";
import Parcours from "./components/Parcours";
import Projets from "./components/Projets";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Presentation />
        <Parcours />
        <Projets />
      </header>
    </div>
  );
}

export default App;
