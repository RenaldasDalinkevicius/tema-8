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

export function ImageComponent({image1, image2, image3, image4}) {
    return (
        <ImageGrid>
            <Image src={image1} grid="one"/>
            <Image src={image2} grid="two"/>
            <Image src={image3} grid="three"/>
            <Image src={image4} grid="four"/>
        </ImageGrid>    
    )
}