import { Link } from "react-router-dom"
import { FaRegMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

export default function Header({theme, setTheme}){

    return(
        <header className={`HEADER ${ theme ? "border-rgba(245,222,179,0.322) border-white" : "border-black" } border-1 flex p-2 rounded-4xl w-fit fixed left-1/2 -translate-x-1/2 top-5`}>
            <div className={`flex items-center justify-between space-x-2`}>
                <Link to={'/'} className={`${ theme ? "bg-white text-black" : "bg-black text-white" }  py-3 font-bold transition-bg duration-200 rounded-3xl flex items-center justify-center md:px-6 px-3`}>Work</Link>
                <Link to={'/about'} className={`${ theme ? "hover:bg-white text-white hover:text-black" : "hover:bg-black text-black hover:text-white"} py-3 font-bold transition-bg duration-200 rounded-3xl flex items-center justify-center md:px-6 px-3`}>About</Link>
                <Link to={'/notes'} className={`${ theme ? "hover:bg-white text-white hover:text-black" : "hover:bg-black text-black hover:text-white"} py-3 font-bold transition-bg duration-200 rounded-3xl flex items-center justify-center md:px-6 px-3`}>Notes</Link>
                <Link to={'/contact'} className={`${ theme ? "hover:bg-white text-white hover:text-black" : "hover:bg-black text-black hover:text-white"} py-3 font-bold transition-bg duration-200 rounded-3xl flex items-center justify-center md:px-6 px-3`}>Contact</Link>

                <button type="button" onClick={() => {setTheme()}} className={`${ theme ? "text-white hover:bg-white hover:text-black" : " hover:bg-black hover:text-white text-black" } p-4 cursor-pointer transition-bg duration-200 rounded-4xl`}>{ theme ? <BsSunFill/> : <FaRegMoon/> }</button>
            </div>
        </header>
    )
}