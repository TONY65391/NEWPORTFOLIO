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

export default function TechStack({ theme }){
    return(
        <section className={`${ theme ? "bg-black" : "bg-white" }`}>
            <Heading heading="Tech Stack." theme={theme} headingAlign="center" subHeading="Modern Technologies I Use:" subAlign="center" />

            <div className={`${ theme ? "bg-[rgb(26,25,25)]" : "bg-[rgba(209,206,206,1)]" } rounded-t-4xl md:w-[95%] mx-auto md:p-9 p-6`}>
                <h3 className={`${ theme ? "text-white" : "text-black" } FONT md:text-5xl text-3xl mt-4`}>Frontend</h3>

                <div className="mt-7 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:justify-between md:justify-center justify-between gap-7">
                    <Lang tech={<FaHtml5 className="ICON text-orange-400" />} name="HTML5" theme={theme} />
                    <Lang tech={<DiCss3 className="ICON text-blue-500"/>} name="CSS3" theme={theme} />
                    <Lang tech={<IoLogoJavascript className="ICON text-yellow-500"/>} name="JavaScript" theme={theme} />
                    <Lang tech={<FaReact className="ICON text-blue-400"/>} name="React.js" theme={theme} />
                    <Lang tech={<RiTailwindCssFill className="ICON text-blue-400"/>} name="TailwindCSS" theme={theme} />
                    <Lang tech={<BsBootstrapFill className="ICON text-purple-600"/>} name="Bootstrap" theme={theme} />
                    <Lang tech={<BiLogoTypescript className="ICON text-blue-500"/>} name="TypeScript" theme={theme} />
                    <Lang tech={<RiNextjsFill className={`${ theme ? "text-white" : "text-black" } ICON`}/>} name="Next.js" theme={theme} />
                </div>
            </div>

            <div className={`${ theme ? "bg-[rgb(26,25,25)]" : "bg-[rgba(209,206,206,1)]" } md:w-[95%] -mt-1 mx-auto md:p-9 p-6`}>
                <h3 className={`${ theme ? "text-white" : "text-black" } FONT md:text-5xl text-3xl mt-4`}>Backend</h3>

                <div className="mt-7 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:justify-between md:justify-center justify-between gap-7">
                    <Lang tech={<DiPython className="ICON text-blue-500" />} name="Python" theme={theme} />
                    <Lang tech={<DiDjango className="ICON text-green-400"/>} name="Django" theme={theme} />
                    <Lang tech={<DiNodejs className="ICON text-green-700"/>} name="Node.js" theme={theme} />
                    <Lang tech={<SiExpress className={`${ theme ? "text-white" : "text-[rgb(26,25,25)]" } ICON`}/>} name="Express.js" theme={theme} />
                    <Lang tech={<DiPhp className="ICON text-purple-500"/>} name="PHP" theme={theme} />
                    <Lang tech={<DiLaravel className="ICON text-red-400"/>} name="Laravel" theme={theme} />
                    <Lang tech={<RiSupabaseFill className="ICON text-green-400"/>} name="Supabase" theme={theme} />
                    <Lang tech={<RiFirebaseFill className="ICON text-orange-500"/>} name="Firebase" theme={theme} />   
                    <Lang tech={<RiNextjsFill className={`${ theme ? "text-white" : "text-[rgb(26,25,25)]" } ICON`}/>} name="Next.js" theme={theme} />                 
                </div>
            </div>

            <div className={`${ theme ? "bg-[rgb(26,25,25)]" : "bg-[rgba(209,206,206,1)]" } rounded-b-4xl mb-5 md:w-[95%] -mt-1 mx-auto md:p-9 p-6`}>
                <h3 className={`${ theme ? "text-white" : "text-black" } FONT md:text-5xl text-3xl mt-4`}>Database & Tools</h3>

                <div className="mt-7 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:justify-between md:justify-center justify-between gap-7">
                    <Lang tech={<SiSqlite className="ICON text-blue-500" />} name="SQL" theme={theme} />
                    <Lang tech={<SiMysql className="ICON text-orange-300"/>} name="MySQL" theme={theme} />
                    <Lang tech={<SiPostgresql className="ICON text-blue-500"/>} name="PostgreSQL" theme={theme} />
                    <Lang tech={<SiMongodb className="ICON text-green-500"/>} name="MongoDB" theme={theme} />
                    <Lang tech={<BiLogoVisualStudio className="ICON text-blue-500"/>} name="VS Code" theme={theme} />
                    <Lang tech={<PiGithubLogoFill className={`${ theme ? "text-white" : "text-[rgb(26,25,25)]" } ICON`}/>} name="Github" theme={theme} />
                    <Lang tech={<DiNpm className="ICON text-red-400"/>} name="NPM" theme={theme} />
                    <Lang tech={<SiVite className="ICON text-purple-700"/>} name="Vite" theme={theme} /> 
                    <Lang tech={<PiFigmaLogoFill className="ICON text-blue-400"/>} name="Figma" theme={theme} />                 
                    <Lang tech={<PiFramerLogoFill className={`${ theme ? "text-white" : "text-[rgb(26,25,25)]" } ICON`}/>} name="Framer" theme={theme} />  
                </div>
            </div>
        </section>
    )
}