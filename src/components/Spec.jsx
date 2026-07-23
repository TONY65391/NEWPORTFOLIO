
export default function Spec(props){
    return(
        <div className={` text-white mt-9 md:mt-0 `}>
            <h3 className={`text-gray-600 lg:text-6xl text-5xl font-bold my-1 md:my-5 FONT`}>{props.number}</h3>
            <h4 className="HEADING md:my-5 my-2 text-5xl">{props.title}</h4>
            <p className="md:text-xl text-lg opacity-50">{props.desc}</p>
        </div>
    )
}