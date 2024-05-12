import styled from "styled-components";
import { AboutComponent } from "./components/AboutComponent";
import data from "./assets/AboutData.jsx"

const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-large);
    margin: var(--spacing-large) var(--spacing-extraLarge);
    margin-top: calc(var(--spacing-medium) + var(--spacing-medium) + 15px + var(--spacing-large));
    @media (max-width: 1000px) {
        margin-left: var(--spacing-large);
        margin-right: var(--spacing-large);
    }
    @media (max-width: 400px) {
        margin-left: var(--spacing-medium);
        margin-right: var(--spacing-medium);
    }
`

export default function About() {
    const AboutMap = data.data.map(data => {
        return <AboutComponent key={data.date} date={data.date} title={data.title} description={data.description} img1={data.img1} img2={data.img2} img3={data.img3} img4={data.img4}/>
    })

    return (
        <Main>
            <h2>Månen</h2>
            {AboutMap}
        </Main>
    )
}