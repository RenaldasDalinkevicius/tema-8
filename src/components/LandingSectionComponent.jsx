import styled from "styled-components";
import { ImageComponent } from "./ImageComponent";

const Section = styled.section`
    display: flex;
    gap: var(--spacing-medium);
    @media (max-width: 650px) {
        flex-direction: column;
    }
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-large);
    width: 100%;
`
const Button = styled.button`
    margin-top: auto;
`


export function LandingSectionComponent({subTitle, title, description, image1, image2, image3, image4, image1alt, image2alt, image3alt, image4alt}) {
    return (
        <Section>
            <TextWrapper>
                <h3>{subTitle}</h3>
                <h2>{title}</h2>
                <p>{description}</p>
                <Button>Les mer</Button>
            </TextWrapper>
            <ImageComponent image1={image1} image2={image2} image3={image3} image4={image4} image1alt={image1alt} image2alt={image2alt} image3alt={image3alt} image4alt={image4alt}/>
        </Section>
    )
}