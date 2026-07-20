
export default function Heading(props){
    return(
        <div className="my-5">
            <h2 className={`HEADING ${ props.theme ? "text-white" : "text-black" } lg:text-9xl my-5 md:text-6xl text-5xl text-${props.headingAlign} font-bolder`}>{props.heading}</h2>
            <p className={`FONT ${ props.theme ? "text-white" : "text-black" } text-${props.subAlign} mt-9 md:text-2xl text-lg`}>{props.subHeading}</p>
        </div>
    )
}