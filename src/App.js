import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Presentation from "./components/Presentation/Presentation";
import Competences from "./components/Competences/Competences";
import Parcours from "./components/Parcours/Parcours";
import Projets from "./components/Projets/Projets";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <section id='presentation' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/background_profile.jpg)`}}>
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
        <footer id='footer'>
            <Footer />
        </footer>
    </div>
  );
}

export default App;
