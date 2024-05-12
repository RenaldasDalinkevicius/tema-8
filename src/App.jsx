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
          <Route path="/" element={<Landing/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/activities" element={<Activities/>}/>
          <Route path="/booking" element={<Booking/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
