import styled from "styled-components";
import { MoreButton } from "./MoreButton"

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

export function ActivityComponent({title, description, img, imgAlt, readMore}) {
    return (
        <Section>
            <Image src={img} alt={imgAlt}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <MoreButton text={readMore}/>
        </Section>
    )
}