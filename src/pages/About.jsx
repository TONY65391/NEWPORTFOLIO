import { Link } from "react-router-dom"
import Footer from "../components/Footer"

export default function About(props){
    return(
        <main className={`${ props.theme ? "bg-black text-white" : "bg-white text-black" } pt-9`}>
            <h1 className="HEADING lg:text-9xl md:text-7xl text-5xl text-center my-9">I'm Anthony :) </h1>

            <div className="md:flex md:items-start md:w-4/5 px-5 md:px-0 mx-auto gap-9">
                <img className="w-2/5 IMG block mx-auto md:flex md:flex-0" src={props.src} alt="Umofia Anthony Inemesit" />

                <div>
                    <h3 className="FONT text-3xl md:text-4xl lg:text-5xl my-8 text-center md:text-left">I'm a FullStack Developer working remotely from Akwa-Ibom, Nigeria.</h3>

                    <p className="text-2xl my-5 opacity-60 text-center md:text-left">Over the past few years, I’ve pushed into different parts of web and mobile creation, from crafting UI layouts to coding interactive features. I’m proud of how far I’ve evolved.</p>

                    <p className="text-2xl my-5 opacity-60 text-center md:text-left">These days, I focus on personal projects, building mobile apps, or school.</p>

                    <Link to={"mailto:umofiainemesit65391@gmail.com"} className={`${ props.theme ? "bg-white text-black hover:bg-black hover:text-white" : "bg-black text-white hover:bg-white hover:text-black" } flex items-center gap-1 hover:gap-3 border-1 lg:px-8 lg:py-5 md:px-5 md:py-4 px-4 py-3 mt-5 rounded-3xl w-fit mx-auto md:mx-0`} > <span>Get In Touch</span> <span>→</span> </Link>
                </div>
            </div>

            <Footer theme={props.theme}/>
        </main>
    )
}