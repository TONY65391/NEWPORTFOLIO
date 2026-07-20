import { Link } from "react-router-dom"
import { TfiWorld } from "react-icons/tfi";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { MdPublic } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";
import { SiDjango, SiExpress, SiPostgresql } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSupabase } from "react-icons/si"
import { DiPython } from "react-icons/di"
import Tech from "./Tech";

export default function Project(props){
    return(
        <Link to={props.url} className={`${ props.theme ? "bg-[rgb(26,25,25)] text-white" : "bg-[rgba(209,206,206,1)] text-black"  } ${props.display} mx-auto md:rounded-4xl max-w-full rounded-2xl overflow-hidden p-3 md:p-4`}>
            <div>
                <img src={`${props.src}`} alt={`${props.name}`} className="rounded-2xl md:rounded-4xl" />

                <div className="px-3 md:px-5">
                    <div>
                        <h4 className={`${ props.theme ? "opacity-40" : "opacity-70" } flex items-center space-x-1 my-4`}><span><TfiWorld/></span> <span>Web App |</span> <span>{props.role}</span></h4>
                        <h3 className="FONT text-2xl my-4">{props.title}</h3>
                        <p className={`${ props.theme ? "opacity-40" : "opacity-70" } md:w-3/4`}>{props.desc}</p>

                        <div className="TECHWRAP my-5 md:max-w-4/5">
                            <Tech className="hidden" tech="React" techIcon={<FaReact/>} display={props.display1} />
                            <Tech tech="HTML" techIcon={<FaHtml5/>} display={props.display2} />
                            <Tech tech="CSS" techIcon={<FaCss3Alt/>} display={props.display3} />
                            <Tech tech="JavaScript" techIcon={<IoLogoJavascript/>} display={props.display4} />
                            <Tech tech="Built In Public" techIcon={<MdPublic/>} display={props.display5} />
                            <Tech tech="PostgreSQL" techIcon={<SiPostgresql/>} display={props.display6} />
                            <Tech tech="Node.js" techIcon={<FaNode/>} display={props.display7} />
                            <Tech tech="MongoDB" techIcon={<SiMongodb/>} display={props.display8} />
                            <Tech tech="TailwindCSS" techIcon={<RiTailwindCssFill/>} display={props.display9} />
                            <Tech tech="Django" techIcon={<SiDjango/>} display={props.display10} />
                            <Tech tech="Express.js" techIcon={<SiExpress/>} display={props.display11} />
                            <Tech tech="Supabase" techIcon={<SiSupabase/>} display={props.display12} />
                            <Tech tech="Python" techIcon={<DiPython/>} display={props.display13} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}