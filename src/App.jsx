import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./theme/globalStyle"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Landing from "./Landing"
import Booking from "./Booking"
import About from "./About"
import Activities from "./Activities"
function App() {

  return (
    <>
      <GlobalStyle/>
      <BrowserRouter basename="/tema-8">
        <Nav/>
        <Routes>
          <Route index element={<Landing/>}/>
          <Route path="/tema-8/about" element={<About/>}/>
          <Route path="/tema-8/activities" element={<Activities/>}/>
          <Route path="/tema-8/booking" element={<Booking/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
