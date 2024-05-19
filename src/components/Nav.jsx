import styled from "styled-components";
import logoImage from "../assets/Logo.png"
import { Link as link} from "react-router-dom";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = styled.nav`
    width: 100%;
    background-color: var(--color-secondary-dark);
    display: flex;
    justify-content: flex-end;
    position: fixed;
    padding: 0 var(--spacing-large);
    height: fit-content;
    z-index: 1;
    @media (max-width: 400px) {
        padding: 0 var(--spacing-medium);
    }
    @media (max-width: 600px) {
        flex-direction: column;
        height: fit-content;
    }
`
const Logo = styled.img`
    align-self: center;
    margin-left: var(--spacing-medium);
    height: var(--font-size-extraLarge);
    width: var(--font-size-extraLarge);
`
const Wrapper = styled.div`
    display: ${props => props.toggle==="true"?"flex":"none"};
    flex-direction: ${props => props.toggle==="true"&&"column"};
    @media (min-width: 600px) {
        display: flex;
        flex-direction: row;
    }
`
const Icon = styled(FontAwesomeIcon)`
    cursor: pointer;
    display: none;
    font-size: var(--font-size-large);
    color: var(--color-text-light);
    padding: var(--spacing-small);
    @media (max-width: 600px) {
        display: block
    }
    &: hover, focus {
        color: var(--color-accent-dark);
    }
    &: focus {  
        border: 1px solid var(--color-accent-light);
    }
`
const LogoWrapper = styled.div`
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    @media (max-width: 600px) {
        margin-right: 0;
    }
`
const Button = styled.button`
    padding: 0;
    background-color: transparent;
    border-radius: var(--spacing-small);
    border: 1px solid transparent;
    align-self: center;
    &: focus {
        background-color: transparent;
        border: 1px solid var(--color-accent-light);
    }
    &: hover {
        background-color: transparent;
    }
    @media (min-width: 600px) {
        display: none
    }
`
const Link = styled(link)`
    pointer-events: auto;
`

export default function Nav() {
    const [toggle, setToggle] = useState(false)
    return (
        <NavBar>
            <LogoWrapper>
                <Logo src={logoImage} alt="Logo bildet"/>
                <Button aria-label="Navigasjon knappen"tabIndex={0} onClick={() => setToggle(!toggle)}><Icon icon={faBars}/></Button>
            </LogoWrapper>
            <Wrapper toggle={toggle}>
                <Link tabIndex={0} to="/">Hjem</Link>
                <Link tabIndex={0} to="/about">Månen</Link>
                <Link tabIndex={0} to="/activities">Aktiviteter</Link>
                <Link tabIndex={0} to="/booking">Booking</Link>
            </Wrapper>
        </NavBar>
    )
}