import styled from "styled-components"
import {LandingSectionComponent} from "./components/LandingSectionComponent.jsx"
import background from "./assets/landing/LandingPageBackground.jpg"
import { BookingMenuComponent } from "./components/BookingMenuComponent.jsx"
import data from "./assets/LandingData.jsx"

const Main = styled.main`
    display: flex;
    flex-direction: column;
`
const Intro = styled.div`
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
gap: var(--spacing-large);
padding: 0 var(--spacing-extraLarge);
@media (max-width: 1050px) {
    padding: 0 var(--spacing-large);
}
`
const Title = styled.h1`
    color: var(--color-text-light);
`
const Slogan = styled.h2`
    color: var(--color-text-light);
`
const About = styled.div`
    display: flex;
    flex-direction: column;
    margin: var(--spacing-large) var(--spacing-extraLarge);
    gap: var(--spacing-large);
    @media (max-width: 1050px) {
        margin: var(--spacing-large) var(--spacing-large);
    }
    @media (max-width: 400px) {
        margin: var(--spacing-large) var(--spacing-medium);
    }
`
const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${background});
    background-repeat: no-repeat;
    filter: brightness(0.5);
    background-size: cover;
    background-position: top;
    z-index: -1;
`

export default function Landing() {
    const LandingSectionMap = data.data.map(data => {
        return <LandingSectionComponent key={data.subtitle} title={data.title} description={data.description} image1={data.img1} image2={data.img2} image3={data.img3} image4={data.img4} image1alt={data.img1alt} image2alt={data.img2alt} image3alt={data.img3alt} image4alt={data.img4alt} readMore={data.readMore}/>
    })

    return (
        <Main>
            <Intro>
                <BackgroundImage alt="MoonStay hotell med jorden i bakgrunn"/>
                <Title>MoonStay</Title>
                <Slogan>Opplev himmelen utenfor himmelen: Ditt måneeventyr begynner her</Slogan>
            </Intro>
            <About>
                <BookingMenuComponent/>
                {LandingSectionMap}
            </About>
        </Main>
    )
}