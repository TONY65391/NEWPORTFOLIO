import "./App.css"
import { useState } from "react"
import Header from "./components/Header.jsx"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"

function App(){

  const [dark, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!dark)
  }

  return(
    <>
        <Header theme={dark} setTheme={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home theme={dark} />}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    </>
  )
}

export default App;