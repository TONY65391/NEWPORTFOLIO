// import { useState, useEffect } from "react";
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import TechStack from "../components/TechStack"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home({ theme }){
    return(
        <main className={`min-h-screen dark:bg-black dark:text-white bg-white text-black max-w-[100%] overflow-hidden`}>
            <Hero theme={theme} />
            <Projects theme={theme}/>
            <TechStack theme={theme}/>
            <Contact theme={theme}/>
            <Footer theme={theme}/>
        </main>
    )
}