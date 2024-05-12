import {createSlice} from "@reduxjs/toolkit"
import data from "../assets/RoomData.jsx"

export const bookingSlice = createSlice({
    name: "booking",
    initialState: {
        arrive: "",
        depart: "",
        total: 0,
        adults: 0,
        kids: 0,
        rooms: []
    },
    reducers: {
        updateArrive: (state, action) => {
            state.arrive = action.payload
        },
        updateDepart: (state, action) => {
            state.depart = action.payload
        },
        updateTotal: (state, action) => {
            state.total = action.payload
        },
        updateRooms: (state) => {
            state.rooms = data.data.filter(room => room.size >= state.total)
        },
        updateAdults: (state, action) => {
            state.adults = action.payload
        },
        updateKids: (state, action) => {
            state.kids = action.payload
        }
    }
})

export const {updateArrive, updateDepart, updateTotal, updateRooms, updateAdults, updateKids} = bookingSlice.actions

export default bookingSlice.reducer