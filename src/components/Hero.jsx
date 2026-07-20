import { Link } from "react-router-dom"

export default function Hero({ theme }){

    return(
        <section className={`${ theme ? "bg-black" : "bg-white" } h-fit py-10 w-full pt-10 flex items-center flex-col justify-center`}>
            <h1 className={`${ theme ? "text-white" : "text-black" } lg:text-9xl md:text-6xl text-5xl HEADING text-bold my-9 pt-9 text-center`}>Hi. I'm Anthony. <br />FullStack Dev.</h1>
            <p className={`${ theme ? "text-white" : "text-black" } opacity-60 text-2xl my-5 lg:max-w-[50%] text-center mt-5 mx-auto`}>Dedicated Fullstack Developer centered on creating, designing and optimizing accessible, high-performance, and user-centric web interfaces.</p>

            <Link className={`${ theme ? "bg-white text-black hover:bg-black hover:text-white" : "bg-black text-white hover:bg-white hover:text-black" } flex items-center gap-1 hover:gap-3 border-1 lg:px-8 lg:py-5 md:px-5 md:py-4 px-4 py-3 mt-5 rounded-3xl`} to={'mailto:umofiainemesit65391@gmail.com'}> <span>Get In Touch</span> <span>→</span> </Link>
        </section>
    )
}