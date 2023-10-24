import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";

// Composants
import Accueil from "./components/Accueil/Accueil";
import Presentation from "./components/Presentation/Presentation";
import Competences from "./components/Competences/Competences";
import Parcours from "./components/Parcours/Parcours";
import Projets from "./components/Projets/Projets";
import Footer from "./components/Footer/Footer";
// Librairie AOS
import "aos/dist/aos.css";
import AOS from "aos";

// Styled-components et ses dépendances
import styled from "styled-components";
import Theme from "./Styles/Theme";
import GlobalStyle from "./Styles/GlobalStyle";

// Framer-motion
import { motion } from 'framer-motion';

// Navbar
import TopBar from "./Navbar/TopBar";
import ThemeButton from "./components/ThemeButton";

function App() {
	const [theme, setTheme] = useState("dark");

	function toggleTheme() {
		setTheme(theme === "light" ? "dark" : "light");
	}

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<DivForSection>
			<TopBar toggleTheme={toggleTheme} theme={theme} />
            <ThemeButton toggleTheme={toggleTheme} theme={theme} />
			<Theme theme={theme}>
				<GlobalStyle />
				<section id="accueil" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/background_profile.webp)`}} >
                    <Accueil />
				</section>
				<section id="presentation">
					<Presentation />
				</section>
				{/* <section id="competences">
					<Competences />
				</section> */}
				{/* <section id="parcours">
					<Parcours />
				</section> */}
				<section id="projets">
					<Projets />
				</section>
				<footer id="footer">
					<Footer />
				</footer>
			</Theme>
		</DivForSection>
	);
}

const DivForSection = styled.div`
	section:nth-of-type(2n + 1) {
		background-color: var(--color-bg);
	}
	section:nth-of-type(2n) {
		background-color: var(--color-bg-2);
	}
`;

export default App;
