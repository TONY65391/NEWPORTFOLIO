import { PiGithubLogoFill, PiTiktokLogoFill, PiWhatsappLogoFill } from "react-icons/pi"
import { RiTwitterXFill } from "react-icons/ri"
import { Link } from "react-router-dom"

export default function Footer({ theme }){
    return(
        <footer className={`${ theme ? "bg-black text-white" : "bg-white text-black" } border-t border-gray-800 pt-9`}>
            <div className={`flex flex-col gap-9 md:grid md:grid-cols-2 lg:grid-cols-3 md:w-[95%] mx-auto px-4`}>
                <div>
                    <h4 className="text-3xl">Umofia Anthony Inemesit</h4>
                    <p className="text-md opacity-70 mt-7 w-4/5 FONT">Fullstack & mobile developer building high-quality web and native experiences — from React to React Native.</p>
                </div>

                <div>
                    <h4 className="text-3xl">Quick Links</h4>
                    <div className="flex flex-col gap-4 mt-7 FONT opacity-70">
                        <Link to={'/'} className="hover:opacity-90">Home</Link>
                        <Link to={'/about'}>About</Link>
                        <Link to={'/notes'}>Notes</Link>
                        <Link to={'/contact'}>Contact</Link>
                    </div>
                </div>

                <div>
                    <h4 className="text-3xl">Get In Touch</h4>
                    <div className="grid grid-cols-7 mt-7">
                        <Link><PiTiktokLogoFill className="text-4xl hover:-mt-1"/></Link>
                        <Link><PiWhatsappLogoFill className="text-4xl hover:-mt-1 text-green-500"/></Link>
                        <Link><PiGithubLogoFill className="text-4xl hover:-mt-1"/></Link>
                        <Link><RiTwitterXFill className="text-4xl hover:-mt-1 text-blue-500"/></Link>
                    </div>
                </div>
            </div>

            <div className={`${ theme ? "border-gray-800" : "" } border-y py-5 mt-6`}>
                <p className="w-[95%] mx-auto FONT opacity-70">© Umofia Anthony Inemesit 2026. All right reserved.</p>
            </div>
        </footer>
    )
}