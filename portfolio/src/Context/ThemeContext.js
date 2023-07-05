import  React, {createContext, useState} from  "react";

// Context has been created
const  ThemeContext = createContext(false);

// Provider
const ThemeProvider = ({ children }) => {
    const  [toggle, setToggle] = useState(false);
    // Mode Sombre en 1er / Clair en 2nd
    // let variantTable = toggle ? "dark" : "white";
    // let variantNavBar = toggle ? "dark" : "dark";
    // let bgNavBar = toggle ? "dark" : "secondary";
    
    let variantTable = toggle ? "dark" : "light";
    let variantNavBar = toggle ? "dark" : "light";
    let bgNavBar = toggle ? "dark" : "light";
    let variantButton = !toggle ? "dark" : "info";
    let bgForm = toggle ? "formDivDark" : "formDivNormal";
    
    const toggleFunction =  ()  =>  {
        setToggle(!toggle);
    };

    return  (
        <ThemeContext.Provider value={{ toggle, toggleFunction, variantTable, variantNavBar, bgNavBar, variantButton, bgForm }}>
            {children}
        </ThemeContext.Provider>
    );
};
export { ThemeContext, ThemeProvider };