/* eslint-disable react-refresh/only-export-components */
import { configureStore } from "@reduxjs/toolkit"
import bookingReduser from "./components/bookingSlice"

export default configureStore({
    reducer: {
        booking: bookingReduser
    }
})