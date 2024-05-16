import styled from "styled-components";

const MainDiv = styled.div`
    display: flex;
    padding: var(--spacing-medium);
    background-color: var(--color-secondary-dark);
    color: var(--color-text-light);
    gap: var(--spacing-small);
    border-radius: var(--spacing-small);
    @media (max-width: 600px) {
        flex-direction: column;
    }
`
const Image = styled.img`
    max-width: 20%;
    @media (max-width: 600px) {
        max-width: 100%;
        width: 100%;
        max-height: 200px;
    }

`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    ${props => props.price==="true"&&"justify-content: space-between; margin-left: auto; @media(max-width: 600px) {flex-direction: row; margin-left: 0;}"};
    
    ${props => props.text==="true"&&"gap: var(--spacing-medium);"};
`
const Titlte = styled.h2`
    color: var(--color-text-light);
`
const Text = styled.p`
    color: var(--color-text-light);
`
const Button = styled.button`
    margin-left: auto;
    &: focus {
        border: 1px solid var(--color-primary);
    }
`

export function RoomComponent({title, roomtype, roomfor, image, price, imgAlt}) {
    return (
        <MainDiv>
            <Image src={image} alt={imgAlt}/>
            <Wrapper text="true">
                <Titlte>
                    {title}
                </Titlte>
                <Wrapper>
                    <Text>
                        {roomtype}
                    </Text>
                    <Text>
                        {roomfor}
                    </Text>
                </Wrapper>
            </Wrapper>
            <Wrapper price="true">
                <Text>
                    {price}
                </Text>
                <Button>
                    Velg
                </Button>
            </Wrapper>
        </MainDiv>
    )
}