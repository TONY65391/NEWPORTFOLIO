
export default function Lang(props){
    return(
        <div className="md:px-9 md:py-6 px-7 py-4 mt-5 border-1 border-gray-700 flex items-center justify-center flex-col rounded-lg">
            <h4>{props.tech}</h4>
            <p className="font-bold FONT mt-4">{props.name}</p>
        </div>
    )
}