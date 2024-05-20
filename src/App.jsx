import Home from "./Home"
import About from "./about"
import Contact from "./contact"
import Navigation from "./navigation";

import { Routes,Route } from "react-router-dom"
function App() {

  return (
    <>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='contact' element={<Contact />}></Route>
    </Routes>
      
    </>
  )
}

export default App
