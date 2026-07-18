// import { useState, useEffect } from "react";
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import TechStack from "../components/TechStack"

export default function Home(){
    return(
        <main className={`min-h-screen dark:bg-black dark:text-white bg-white text-black max-w-[100%] overflow-hidden p-4`}>
            <Hero/>
            <Projects/>
            <TechStack/>
        </main>
    )
}