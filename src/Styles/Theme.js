import React from "react";
import { ThemeProvider } from "styled-components";

const transitionTime = "0.8s"

const lightTheme = {
	backgroundColor: "#D0E8F2",
	secondBackground: "#F0F4F8",
	borderColor: "darkGray",
    backdropFilter: 0,
    navBackground: "rgba(13, 25, 48, 0.3)",
	headerColor: "#333333",
	textColor: "#333333",
	mainColor: "#007ACC",
	secondColor: "#F5F7FA",
	gradientColor: "linear-gradient(45deg, #8871e6, #5a43b9)",
	boxShadow: "8px 8px 18px #d4d4d4, -8px -8px 18px #ffffff",
	keyword: "blue",
	className: "#78b3da",
    transitionTime: transitionTime
};

const darkTheme = {
	backgroundColor: "#23233D",
	secondBackground: "#1C1C28",
	borderColor: "#0d1324",
    backdropFilter: 1,
	navBackground: "rgba(245, 241, 241, 0.3)",
	headerColor: "#e0e7fd",
	textColor: "#E0E0E0",
	mainColor: "#F2C94C",/*"#5CE8D2",*/
	secondColor: "#122B39",
	gradientColor: "linear-gradient(45deg, #5CE8D2, #48c2b0)",
	boxShadow: "8px 8px 18px #0F172A, -8px -8px 18px #0F172A",
	keyword: "#326cb8",
	className: "#389d89",
    transitionTime: transitionTime
};

function Theme({ children, theme }) {
	return (
		<ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
			{children}
		</ThemeProvider>
	);
}

export default Theme;
