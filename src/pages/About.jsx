import { Link } from "react-router-dom"

export default function About(){
    return(
        <>
            <h1>This is ABOUT page</h1>
            <Link to={'/'}>Home Page</Link>
        </>
    )
}