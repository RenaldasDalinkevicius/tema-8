import styled from "styled-components";
import { ImageComponent } from "./ImageComponent";

const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-medium);
`
const Date = styled.h2`
    text-align: center;
    padding-bottom: var(--spacing-medium);
    border-bottom: 2px solid var(--color-secondary-dark);
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: var(--spacing-medium);
    @media (max-width: 700px) {
        flex-direction: column;
    }
`
const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-medium);
`

export function AboutComponent ({date, title, description, img1, img2, img3, img4, img1alt, img2alt, img3alt, img4alt}) {
    return (
        <Section>
            <Date>{date}</Date>
            <Wrapper>
                <TextWrapper>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </TextWrapper>
                {<ImageComponent image1={img1} image2={img2} image3={img3} image4={img4} image1alt={img1alt} image2alt={img2alt} image3alt={img3alt} image4alt={img4alt}/>}
            </Wrapper>
        </Section>
    )
}