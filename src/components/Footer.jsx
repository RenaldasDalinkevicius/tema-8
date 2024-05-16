import styled from "styled-components"
import logoImage from "../assets/Logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

const FooterTag = styled.footer`
    margin-top: auto;
    width: 100%;
    background-color: var(--color-secondary-dark);
    display: flex;
    gap: var(--spacing-medium);
    color: var(--color-text-light);
    padding: var(--spacing-medium) var(--spacing-large);
    @media (max-width: 400px) {
        padding: var(--spacing-medium);
    }
    @media (max-width: 500px) {
        flex-direction: column;
    }
`
const Logo = styled.img`
    align-self: top;
    margin-left: var(--spacing-medium);
    height: 55px;
    width: 55px;
`
const Wrapper = styled.div`
    display: flex;
    gap: var(--spacing-medium);
    flex-direction: ${props => props.logo==="true"?"row":"column"};
`
const Title = styled.h2`
    color: inherit;
`
const Copyright = styled.p`
    color: inherit;
    margin-top: auto;
    margin-left: auto;
    padding: 0 var(--spacing-medium);
`
const Text = styled.p`
    color: inherit;
`
const Icon = styled(FontAwesomeIcon)`
    cursor: pointer;
    font-size: var(--font-size-large);
    color: var(--color-text-light);
    padding: var(--spacing-small);
    &: hover, focus {
        color: var(--color-accent-dark);
    }
    &: focus {  
        border: 1px solid var(--color-accent-light);
    }
`

export default function Footer() {
    return (
        <FooterTag>
            <Logo src={logoImage} alt="logo bildet"/>
            <Wrapper>
                <Title>MoonStay</Title>
                <Text>Opplev himmelen utenfor himmelen: Ditt måneeventyr begynner her</Text>
                <Wrapper logo={"true"}>
                    <Icon icon={faFacebook}/>
                    <Icon icon={faInstagram}/>
                    <Icon icon={faAt}/>
                </Wrapper>
            </Wrapper>
            <Copyright>@MoonStay 2024</Copyright>
        </FooterTag>
    )
}