import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarDays, faUser, faAngleDown, faPlus, faMinus, faSearch } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { subDays } from "date-fns"
import { useDispatch, useSelector } from "react-redux"
import { updateArrive, updateDepart, updateTotal, updateRooms, updateAdults, updateKids } from "./bookingSlice"
import { useNavigate } from "react-router-dom"

const Wrapper = styled.section`
    display: flex;
    align-self: center;
    justify-content: center;
    width: 100%;
    margin: var(--spacing-medium);
    padding: var(--spacing-medium);
    gap: var(--spacing-medium);
    box-shadow: 0px -2px 5px 0px var(--color-secondary-dark);
    @media (max-width: 800px) {
        flex-direction: column;
    }
`
const Button = styled.button`
    width: 100%;
    display: flex;
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
`
const Icon = styled(FontAwesomeIcon)`
    font-size: var(--font-size-normal);
    margin-left: ${props => props.user==="true"&&"auto"};
    ${props => props.open&&"transform: rotate(180deg)"}
    ${props => props.clickable==="true"&&
        "padding: var(--spacing-small); cursor: pointer; border-radius: var(--spacing-small); &: hover {background-color: var(--color-secondary-light)}"
    }

`
const Search = styled.button`
    width: 100%;
    display: flex;
    gap: var(--spacing-medium);
`
const TotalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-medium);
    width: 100%;
`
const FloatingDiv = styled.div`
    background-color: var(--color-secondary-dark);
    color: var(--color-text-light);
    padding: var(--spacing-medium);
    border-radius: var(--spacing-small);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-medium);
`
const FloatingButton = styled.div`
    display: flex;
    gap: var(--spacing-medium);
    align-items: center;
`
const MarginText = styled.p`
    margin-right: auto;
    color: inherit;
`

export function BookingMenuComponent () {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const total = useSelector((state) => state.booking.total)
    const adults = useSelector((state) => state.booking.adults)
    const kids = useSelector((state) => state.booking.adults)
    const arrive = useSelector((state) => state.booking.arrive)
    const depart = useSelector((state) => state.booking.depart)
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(updateTotal(adults + kids))
    }, [adults, dispatch, kids])

    return (
        <Wrapper>
            <DatePicker minDate={subDays(new Date(), 0)} selected={arrive} onChange={(date) => dispatch(updateArrive(date.toLocaleDateString()))} customInput={<Button><Icon icon={faCalendarDays}/>Ankomst: {`${arrive}`}</Button>}/>
            <DatePicker minDate={subDays(new Date(), -1)} selected={depart} onChange={(date) => dispatch(updateDepart(date.toLocaleDateString()))} customInput={<Button><Icon icon={faCalendarDays}/>Avreise: {`${depart}`}</Button>}/>
            <TotalWrapper>
                <Button onClick={() => setIsOpen(!isOpen)}>
                    <Icon icon={faAngleDown} open={isOpen}/>
                    Personer: {total}
                    <Icon icon={faUser} user={"true"}/>
                </Button>
                {isOpen&&
                <FloatingDiv>
                    <FloatingButton>
                        <MarginText>Barn:</MarginText>
                        <Icon icon={faMinus} clickable={"true"} onClick={() => kids>0&&updateKids(kids - 1)}/>
                        {kids}
                        <Icon icon={faPlus} clickable={"true"} onClick={() => updateKids(kids + 1)}/>
                    </FloatingButton>
                    <FloatingButton>
                        <MarginText>Voksen:</MarginText>
                        <Icon icon={faMinus} clickable={"true"} onClick={() => adults>0&&updateAdults(adults - 1)}/>
                        {adults}
                        <Icon icon={faPlus} clickable={"true"} onClick={() => updateAdults(adults + 1)}/>
                    </FloatingButton>
                </FloatingDiv>}
            </TotalWrapper>
            <Search onClick={() => {
                navigate("/booking")
                dispatch(updateRooms())
            }}><Icon icon={faSearch}/>Søk</Search>
        </Wrapper>
    )
}