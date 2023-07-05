import  React, {createContext, useState} from  "react";

// Context has been created
const  CardCarouselContext = createContext(false);

// Provider
const CardCarouselProvider = ({ children }) => {
    const  [toggle, setToggle] = useState(false);
    
    let variantTable = toggle ? "dark" : "light";
    let variantNavBar = toggle ? "dark" : "light";
    let bgNavBar = toggle ? "dark" : "light";
    let variantButton = !toggle ? "dark" : "info";
    let bgForm = toggle ? "formDivDark" : "formDivNormal";
    
    const toggleFunction =  ()  =>  {
        setToggle(!toggle);
    };

    return  (
        <CardCarouselContext.Provider value={{ toggle, toggleFunction, variantTable, variantNavBar, bgNavBar, variantButton, bgForm }}>
            {children}
        </CardCarouselContext.Provider>
    );
};
export { CardCarouselContext, CardCarouselProvider };