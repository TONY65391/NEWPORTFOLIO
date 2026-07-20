
export default function Lang(props){
    return(
        <div className={`${ props.theme ? "" : "bg-white" } md:px-9 md:py-9 px-7 py-4 group hover:-mt-1 cursor-pointer hover:bg-[rgb(71,69,69)] mt-5 border-1 border-gray-700 flex items-center justify-center flex-col rounded-4xl`}>
            <h4>{props.tech}</h4>
            <p className={`${ props.theme ? "text-white" : "text-black group-hover:text-white" } font-bold FONT mt-4 text-center`}>{props.name}</p>
        </div>
    )
}