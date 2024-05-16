import styled from "styled-components"
import { BookingMenuComponent } from "./components/BookingMenuComponent.jsx"
import { RoomComponent } from "./components/RoomComponent.jsx"
import { useSelector } from "react-redux"
import { useEffect } from "react"

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    margin: var(--spacing-large) var(--spacing-extraLarge);
    margin-top: calc(var(--spacing-medium) + var(--spacing-medium) + 15px + var(--spacing-large));
    gap: var(--spacing-medium);
    @media (max-width: 1000px) {
        margin-left: var(--spacing-large);
        margin-right: var(--spacing-large);
    }
    @media (max-width: 400px) {
        margin-left: var(--spacing-medium);
        margin-right: var(--spacing-medium);
    }
`

export default function Booking() {
    const rooms = useSelector((state) => state.booking.rooms)
    const Rooms = rooms.map(data => {
        return <RoomComponent key={data.title} title={data.title} roomtype={data.roomtype} roomfor={data.roomfor} image={data.image} price={data.price} imgAlt={data.imgAlt}/>
    })
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])

    return (
        <Wrapper>
            <BookingMenuComponent/>
            {Rooms}
        </Wrapper>
    )
}