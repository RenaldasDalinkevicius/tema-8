import styled from "styled-components"

const ImageGrid = styled.div`
    width: 100%;
    display: grid;
    gap: var(--spacing-medium);
    grid-template-areas:
    "one one two"
    "one one three"
    "four four four";
    max-height: 500px;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    grid-area: ${props => props.grid};
`

export function ImageComponent({image1, image2, image3, image4, image1alt, image2alt, image3alt, image4alt}) {
    return (
        <ImageGrid>
            <Image src={image1} grid="one" alt={image1alt}/>
            <Image src={image2} grid="two" alt={image2alt}/>
            <Image src={image3} grid="three" alt={image3alt}/>
            <Image src={image4} grid="four" alt={image4alt}/>
        </ImageGrid>    
    )
}