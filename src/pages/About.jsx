import { Link } from "react-router-dom"
import Spec from "../components/Spec"

export default function About(props){
    return(
        <main className={`${ props.theme ? "bg-black text-white" : "bg-white text-black" } pt-9`}>
            <h1 className="HEADING lg:text-9xl md:text-7xl text-5xl text-center my-9">I'm Anthony :) </h1>

            <div className="md:flex md:items-start md:w-4/5 px-5 md:px-0 mx-auto gap-9">
                <img className="w-2/5 IMG block mx-auto md:flex md:flex-0" src={props.src} alt="Umofia Anthony Inemesit" />

                <div>
                    <h3 className="FONT text-3xl md:text-4xl lg:text-5xl my-8">I'm a FullStack Developer working remotely from Akwa-Ibom, Nigeria.</h3>

                    <p className="text-xl md:text-2xl my-5 opacity-60">Over the past few years, I’ve pushed into different parts of web and mobile creation, from crafting UI layouts to coding interactive features. I’m proud of how far I’ve evolved.</p>

                    <p className="text-xl md:text-2xl my-5 opacity-60">These days, I focus on personal projects, building mobile apps, or school.</p>

                    <Link to={"mailto:umofiainemesit65391@gmail.com"} className={`${ props.theme ? "bg-white text-black hover:bg-black hover:text-white" : "bg-black text-white hover:bg-white hover:text-black" } flex items-center gap-1 hover:gap-3 border-1 lg:px-8 lg:py-5 md:px-5 md:py-4 px-4 py-3 mt-5 rounded-3xl w-fit md:mx-0`} > <span>Get In Touch</span> <span>→</span> </Link>
                </div>
            </div>

            <div className="md:w-[85%] px-5 mx-auto py-9">
                <h2 className="HEADING lg:text-6xl md:text-4xl text-2xl my-9">Let's collaborate if you're interested in and committed to sustainability, education, equality, or carbon neutrality.</h2>

                <p className="my-9 md:text-2xl text-lg opacity-50">I’m committed to leaving the world better for those who come after us, and I aim to contribute however I can. If you value that too, I’d love to talk.</p>
            </div>

            <div className="bg-[rgb(26,25,25)] w-full md:w-[95%] my-9 mx-auto rounded-4xl lg:p-9 md:p-6 p-3">
                <div className={`mx-auto md:grid md:grid-cols-2 gap-9 overflow-hidden lg:p-9 md:p-6 p-3`}>
                    <Spec theme={props.theme} number="01" title="Make It" desc="I sketch wireframes and make prototypes. Talking through tactile designs existing in the browser is worth its weight. Design tools only carry you so far; the rest should be realized with a link my team can rally around." />

                    <Spec number="02" title="Collaborate" desc="Good design is not created in a vacuum but rather in a shared space. It must be facilitated and iterated upon as a team. I aim to include stakeholders in my design process and create a collaborative environment that welcomes and encourages feedback." />

                    <Spec number="03" title="Build Performant Code" desc="Performance is not a feature; it's a requirement. I focus on optimizing asset delivery, minimizing render-blocking resources, and writing efficient JavaScript to ensure fast loading times and a smooth 60fps interaction experience for every user." />

                    <Spec number="04" title="Maintain Quality & Scale" desc="I prioritize code health through strict component architecture, proper typing (e.g., TypeScript), and comprehensive unit testing. This approach ensures the codebase remains maintainable, scalable, and resilient as the product grows." />
                </div>
            </div>
        </main>
    )
}