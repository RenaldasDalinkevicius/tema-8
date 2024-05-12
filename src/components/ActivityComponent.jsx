import styled from "styled-components";

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-medium);
`
const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: 50% 60%;

`

export function ActivityComponent({title, description, img}) {
    return (
        <Section>
            <Image src={img}/>
            <h2>{title}</h2>
            <p>{description}</p>
        </Section>
    )
}