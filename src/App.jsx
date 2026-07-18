import "./App.css"
// import { ThemeProvider } from "./context/ThemeContext.jsx";
import Header from "./components/Header.jsx"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"

function App(){

  return(
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    </>
  )
}

export default App;