import { Link } from "react-router-dom"
import { FaRegMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { useState } from "react";

export default function Header({theme, setTheme}){

    const [page, setPage] = useState("/")

    return(
        <header className={`HEADER z-2 ${ theme ? "border-rgba(245,222,179,0.322) border-white" : "border-black bg-white" } border-1 flex p-2 rounded-4xl w-fit fixed left-1/2 -translate-x-1/2 top-5`}>
            <div className={`flex items-center justify-between space-x-2`}>
                <Link to={'/'} onClick={() => { setPage("/") }} className={`
                ${ page === '/' && theme ? "bg-white text-black" : "" } 
                ${ page === '/' && theme === false ? "bg-black text-white" : "" } 
                ${ page !== '/' && theme ? "text-white" : "" } 
                py-3 font-bold transition-bg duration-200 rounded-3xl flex items-center justify-center md:px-6 px-3`}>Work</Link>
                
                <Link to={'/about'} onClick={() => { setPage("/about") }} className={`
                ${ page === '/about' && theme ? "bg-white text-black" : "" } 
                ${ page === '/about' && theme === false ? "bg-black text-white" : "" } 
                ${ page !== '/about' && theme ? "text-white" : "" } py-3 font-bold transition-bg duration-200 rounded-3xl flex items-center justify-center md:px-6 px-3`}>About</Link>
                
                <Link to={'/notes'} onClick={() => { setPage('/notes') }} className={`
                ${ page === '/notes' && theme ? "bg-white text-black" : "" } 
                ${ page === '/notes' && theme === false ? "bg-black text-white" : "" } 
                ${ page !== '/notes' && theme ? "text-white" : "" } py-3 font-bold transition-bg duration-200 rounded-3xl flex items-center justify-center md:px-6 px-3`}>Notes</Link>
                
                <Link to={'/contact'} onClick={() => { setPage('/contact') }} className={`
                ${ page === '/contact' && theme ? "bg-white text-black" : "" } 
                ${ page === '/contact' && theme === false ? "bg-black text-white" : "" } 
                ${ page !== '/contact' && theme ? "text-white" : "" } py-3 font-bold transition-bg duration-200 rounded-3xl flex items-center justify-center md:px-6 px-3`}>Contact</Link>
                
                <span className={`${ theme ? "text-white" : "text-black"}`}>|</span>
                
                <button type="button" onClick={() => {setTheme()}} className={`${ theme ? "text-white hover:bg-white hover:text-black" : " hover:bg-black hover:text-white text-black" } p-4 cursor-pointer transition-bg duration-200 rounded-4xl`}>{ theme ? <BsSunFill/> : <FaRegMoon/> }</button>
            </div>
        </header>
    )
}