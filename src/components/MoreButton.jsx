import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

const Button = styled.button`
    display: flex;
    margin-top: auto;
    gap: var(--spacing-medium);
    background-color: var(--color-secondary-dark);
    color: var(--color-text-light);
    &: hover, focus {
        background-color: var(--color-secondary-light);
    }
    &: focus {
        background-color: var(--color-secondary-light);
        border: 1px solid var(--color-accent-light);
    }
    @media (max-width: 650px) {
        width: 100%;
    }
    ${props => props.open==="true"&&"flex-direction: column"};
    justify-content: flex-start;
`
const Icon = styled(FontAwesomeIcon)`
    align-self: ${props=> props.open==="true"?"end":"center"};
    font-size: var(--font-size-normal);
    ${props => props.open==="true"&&"transform: rotate(180deg)"}
`
const Text = styled.p`
    text-wrap: wrap;
    color: inherit;
    white-space: pre-line;
    list-style-type: none;
    text-align: left;
`

export function MoreButton({text}) {
    const [open, setOpen] = useState(false)
    return (
        <Button onClick={() => setOpen(!open)} open={JSON.stringify(open)}>
            <Icon icon={faAngleDown} open={JSON.stringify(open)}/>
            {!open&&"Les mer"}
            {open&&<Text>{text}</Text>}
        </Button>
    )
}