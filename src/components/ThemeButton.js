import { Button } from "react-bootstrap";
import Theme from "../Styles/Theme";
import { BsFillMoonFill } from "react-icons/bs";
import { CgSun, CgsUN } from "react-icons/cg";
import { MdWbSunny } from "react-icons/md";
import styled from "styled-components";
import Switch from "react-switch"

function ThemeButton({theme, toggleTheme}) {

    // const options = [{
    //     onClick: ()=>console.log('test'),
    // }]

    return (
        <DivTheme>
            <Switch onChange={toggleTheme} checked={theme === "light"} checkedIcon={<BsFillMoonFill style={{marginLeft: "25%"}} />} uncheckedIcon={<MdWbSunny style={{marginLeft: "15%"}} />} />
            {/* {theme ==="light" ? <BsFillMoonFill /> : <MdWbSunny />} */}
            {/* <input onClick={toggleTheme}/> */}
        </DivTheme>
    )
}

const DivTheme = styled.label`
    z-index: 1;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    display: flex;
    height: 20vw;
    width: 20vw;
    // border: 4px solid var(--color-main);
    // background-color: var(--color-main);
    border-radius: 50%;
    align-items: center;
    transition: var(--transition-time);
    @media screen and (min-width: 768px) {
        height: 10vw;
        width: 10vw;
    }
    @media screen and (min-width: 1024px) {
        height: 5vw;
        width: 5vw;
    }
    
    & > * {
        transition: var(--transition-time);
        // width: 60%;
        // height: 60%;
    }
    div {
        display: flex;
    }
    svg {
        margin-top: auto;
        margin-bottom: auto;
        color: var(--color-main);   
    }
`;

export default ThemeButton