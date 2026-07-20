
export default function Tech(props){
    return(
        <p className={`text-white bg-[rgb(71,69,69)] w-fit px-4 py-1 rounded-2xl flex items-center space-x-1 ${props.display} `}><span>{props.techIcon}</span> <span>{props.tech}</span></p>
    )
}