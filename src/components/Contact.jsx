import Heading from "./Heading"
import { Link } from "react-router-dom"

export default function Contact(props){
    return(
        <section className={`${ props.theme ? "text-white bg-black" : "text-black bg-white" }`}>
            <Heading theme={props.theme} heading="Contact." headingAlign="center" subHeading="Have an idea? Feel free to contact me: " subAlign="center" />
            
            <div className={`${ props.theme ? "bg-[rgb(26,25,25)]" : "bg-black" } w-fit md:w-[95%] mx-auto my-9 flex flex-col items-center rounded-4xl py-9 px-9`}>
                <h4 className="py-2 px-5 border-1 rounded-4xl bg-[rgba(46,45,45,1)] text-green-500 font-bold flex items-center justify-center gap-2 my-5"><span id="BEFORE"></span> <span>Available for new projects</span></h4>
                <h2 className={`text-white font-bold md:my-5 my-3 lg:text-6xl md:text-4xl text-3xl text-center`}>Let's Work Together.</h2>
                <p className="text-white my-5 md:w-2/4 w-full opacity-60 md:text-xl text-lg text-center">I'm currently open to freelancing projects, full-stack roles, and brain-racking collaborations. If you have a project in mind, know someone who has got one in mind or just want to talk, I'd love to hear from you.</p>

                <Link className="FONT hover:gap-4 LINK flex items-center gap-1 my-3 md:my-3 lg:px-9 lg:py-5 md:px-5 md:py-4 px-4 py-3 bg-white text-black rounded-4xl font-bold" to={"/contact"}><span>Get In Touch</span> <span>→</span></Link>
            </div>
        </section>
    )
}