import { Link } from "react-router-dom"

export default function Hero(){

    return(
        <section className="h-fit py-10 mt-10 flex items-center flex-col justify-center">
            <h1 className="lg:text-9xl md:text-6xl text-5xl HEADING text-bold my-9 text-center">Hi. I'm Anthony <br />FullStack Dev.</h1>
            <p className="text-2xl my-5 lg:max-w-[50%] text-center mt-5 mx-auto">Dedicated Fullstack Developer centered on creating, designing and optimizing accessible, high-performance, and user-centric web interfaces.</p>

            <Link className="lg:px-8 lg:py-5 md:px-5 md:py-4 px-4 py-3 bg-black dark:bg-white dark:text-black text-white mt-5 rounded-3xl " to={'/'}>Get in Touch</Link>
        </section>
    )
}