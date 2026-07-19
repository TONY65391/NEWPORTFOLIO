import { FaHtml5, FaReact } from "react-icons/fa"
import Heading from "./Heading.jsx"
import Lang from "./Lang.jsx"
import { RiFirebaseFill, RiNextjsFill, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri"
import { DiCss3, DiDjango, DiLaravel, DiNodejs, DiNpm, DiPhp, DiPython } from "react-icons/di"
import { IoLogoJavascript } from "react-icons/io"
import { BsBootstrapFill } from "react-icons/bs"
import { BiLogoTypescript, BiLogoVisualStudio } from "react-icons/bi"
import { SiExpress, SiMongodb, SiMysql, SiPostgresql, SiSqlite, SiVite } from "react-icons/si"
import { PiFigmaLogoFill, PiFramerLogoFill, PiGithubLogoFill } from "react-icons/pi"

export default function TechStack(){
    return(
        <section>
            <Heading heading="Tech Stack." headingAlign="center" subHeading="Modern Technologies I Use:" subAlign="center" />

            <div className="rounded-t-4xl md:w-[95%] mx-auto md:p-9 p-6 bg-[rgb(26,25,25)]">
                <h3 className="FONT md:text-5xl text-3xl mt-4">Frontend</h3>

                <div className="mt-7 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:justify-between md:justify-center justify-between gap-7">
                    <Lang tech={<FaHtml5 className="ICON text-orange-400" />} name="HTML5" />
                    <Lang tech={<DiCss3 className="ICON text-blue-500"/>} name="CSS3" />
                    <Lang tech={<IoLogoJavascript className="ICON text-yellow-500"/>} name="JavaScript" />
                    <Lang tech={<FaReact className="ICON text-blue-400"/>} name="React.js" />
                    <Lang tech={<RiTailwindCssFill className="ICON text-blue-400"/>} name="TailwindCSS" />
                    <Lang tech={<BsBootstrapFill className="ICON text-purple-600"/>} name="Bootstrap" />
                    <Lang tech={<BiLogoTypescript className="ICON text-blue-500"/>} name="TypeScript" />
                    <Lang tech={<RiNextjsFill className="ICON"/>} name="Next.js" />
                </div>
            </div>

            <div className="md:w-[95%] -mt-1 mx-auto md:p-9 p-6 bg-[rgb(26,25,25)]">
                <h3 className="FONT md:text-5xl text-3xl mt-4">Backend</h3>

                <div className="mt-7 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:justify-between md:justify-center justify-between gap-7">
                    <Lang tech={<DiPython className="ICON text-blue-500" />} name="Python" />
                    <Lang tech={<DiDjango className="ICON text-green-400"/>} name="Django" />
                    <Lang tech={<DiNodejs className="ICON text-green-700"/>} name="Node.js" />
                    <Lang tech={<SiExpress className="ICON"/>} name="Express.js" />
                    <Lang tech={<DiPhp className="ICON text-purple-500"/>} name="PHP" />
                    <Lang tech={<DiLaravel className="ICON text-red-400"/>} name="Laravel" />
                    <Lang tech={<RiSupabaseFill className="ICON text-green-400"/>} name="Supabase" />
                    <Lang tech={<RiFirebaseFill className="ICON text-orange-500"/>} name="Firebase" />   
                    <Lang tech={<RiNextjsFill className="ICON"/>} name="Next.js" />                 
                </div>
            </div>

            <div className="rounded-b-4xl md:w-[95%] -mt-1 mx-auto md:p-9 p-6 bg-[rgb(26,25,25)]">
                <h3 className="FONT md:text-5xl text-3xl mt-4">Database & Tools</h3>

                <div className="mt-7 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:justify-between md:justify-center justify-between gap-7">
                    <Lang tech={<SiSqlite className="ICON text-blue-500" />} name="SQL" />
                    <Lang tech={<SiMysql className="ICON text-orange-300"/>} name="MySQL" />
                    <Lang tech={<SiPostgresql className="ICON text-blue-500"/>} name="PostgreSQL" />
                    <Lang tech={<SiMongodb className="ICON text-green-500"/>} name="MongoDB" />
                    <Lang tech={<BiLogoVisualStudio className="ICON text-blue-500"/>} name="VS Code" />
                    <Lang tech={<PiGithubLogoFill className="ICON"/>} name="Github" />
                    <Lang tech={<DiNpm className="ICON text-red-400"/>} name="NPM" />
                    <Lang tech={<SiVite className="ICON text-purple-700"/>} name="Vite" /> 
                    <Lang tech={<PiFigmaLogoFill className="ICON text-blue-400"/>} name="Figma" />                 
                    <Lang tech={<PiFramerLogoFill className="ICON"/>} name="Framer" />  
                </div>
            </div>
        </section>
    )
}