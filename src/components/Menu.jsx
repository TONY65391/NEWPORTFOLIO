import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { CiSun } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";

export default function Menu(){
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return(
        <div className={`flex items-center justify-between space-x-2`}>
            <Link to={'/'} className="py-3 hover:bg-white font-bold hover:text-black transition-bg duration-200 rounded-3xl flex items-center justify-center md:px-6 px-3 dark:bg-white bg-black dark:text-black text-white">Work</Link>
            <Link to={'/about'} className={`${ darkMode ? "text-white" : "text-black" } py-3 hover:bg-white font-bold hover:text-black transition-bg duration-200 rounded-3xl flex items-center justify-center md:px-6 px-3`}>About</Link>
            <Link to={'/notes'} className={`${ darkMode ? "text-white" : "text-black" } py-3 hover:bg-white font-bold hover:text-black transition-bg duration-200 rounded-3xl flex items-center justify-center md:px-6 px-3`}>Notes</Link>
            <Link to={'/contact'} className={`${ darkMode ? "text-white" : "text-black" } py-3 hover:bg-white font-bold hover:text-black transition-bg duration-200 rounded-3xl flex items-center justify-center md:px-6 px-3`}>Contact</Link>

            <button type="button" onClick={() => {setDarkMode(!darkMode)}} className={`${ darkMode ? "text-white" : "text-black" } p-4 hover:bg-gray-500 cursor-pointer transition-bg duration-200 rounded-4xl`}>{ darkMode ? <CiSun/> : <FaRegMoon/> }</button>
        </div>
    )
}