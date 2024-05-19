import styled from "styled-components";
import { ImageComponent } from "./ImageComponent";
import { MoreButton } from "./MoreButton";

const Section = styled.section`
    display: flex;
    gap: var(--spacing-medium);
    flex-direction: column;
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-medium);
    width: 100%;
`


export function LandingSectionComponent({subTitle, title, description, image1, image2, image3, image4, image1alt, image2alt, image3alt, image4alt, readMore}) {
    return (
        <Section>
            <TextWrapper>
                <h3>{subTitle}</h3>
                <h2>{title}</h2>
                <p>{description}</p>
                <MoreButton text={readMore}/>
            </TextWrapper>
            <ImageComponent image1={image1} image2={image2} image3={image3} image4={image4} image1alt={image1alt} image2alt={image2alt} image3alt={image3alt} image4alt={image4alt}/>
        </Section>
    )
}