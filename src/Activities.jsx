import styled from "styled-components"
import data from "./assets/ActivitiesData.jsx"
import { ActivityComponent } from "./components/ActivityComponent.jsx"

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

export default function Activities() {
    const ActivityMap = data.data.map(data => {
        return <ActivityComponent  key={data.title} title={data.title} description={data.description} img={data.img} imgAlt={data.imgAlt} readMore={data.readMore}/>
    })
    return (
        <Main>
            <h2>Aktiviteter</h2>
            {ActivityMap}
        </Main>
    )
}