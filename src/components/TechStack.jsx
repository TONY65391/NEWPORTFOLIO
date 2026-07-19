import { FaHtml5, FaReact } from "react-icons/fa"
import Heading from "./Heading.jsx"
import Lang from "./Lang.jsx"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { DiCss3 } from "react-icons/di"
import { IoLogoJavascript } from "react-icons/io"
import { BsBootstrapFill } from "react-icons/bs"
import { BiLogoTypescript } from "react-icons/bi"

export default function TechStack(){
    return(
        <section>
            <Heading heading="Tech Stack." headingAlign="center" subHeading="Modern Technologies I Use:" subAlign="center" />

            <div className="PROJECT rounded-4xl md:w-[95%] mx-auto md:p-9 p-6">
                <h3 className="FONT md:text-5xl text-3xl mt-4">Frontend</h3>

                <div className="mt-7 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:justify-between md:justify-center justify-between gap-7">
                    <Lang tech={<FaHtml5 className="ICON text-orange-400" />} name="HTML5" />
                    <Lang tech={<DiCss3 className="ICON text-blue-500"/>} name="CSS3" />
                    <Lang tech={<IoLogoJavascript className="ICON text-yellow-500"/>} name="JavaScript" />
                    <Lang tech={<FaReact className="ICON text-blue-400"/>} name="React" />
                    <Lang tech={<RiTailwindCssFill className="ICON text-blue-400"/>} name="TailwindCSS" />
                    <Lang tech={<BsBootstrapFill className="ICON text-purple-600"/>} name="Bootstrap" />
                    <Lang tech={<BiLogoTypescript className="ICON text-blue-500"/>} name="TypeScript" />
                    <Lang tech={<RiNextjsFill className="ICON"/>} name="Next.js" />
                </div>
            </div>
        </section>
    )
}