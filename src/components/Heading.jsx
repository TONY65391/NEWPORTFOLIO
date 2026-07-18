
export default function Heading(props){
    return(
        <div className="my-5">
            <h1 className={`HEADING lg:text-9xl my-5 md:text-6xl text-5xl text-${props.headingAlign} font-bolder`}>{props.heading}</h1>
            <p className={`FONT text-${props.subAlign} mt-9 md:text-2xl text-lg`}>{props.subHeading}</p>
        </div>
    )
}