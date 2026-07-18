
export default function Tech(props){
    return(
        <p className={`TECH w-fit px-4 py-1 rounded-2xl flex items-center space-x-1 ${props.display} `}><span>{props.techIcon}</span> <span>{props.tech}</span></p>
    )
}