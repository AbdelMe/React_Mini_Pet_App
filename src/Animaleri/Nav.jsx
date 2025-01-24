import { Link } from "react-router-dom"
import pict from './Icons/exit.png'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './Style/Nav.css'
export default function Nav(){
    return(
        <>
            <div className="py-3 text-primary rounded-5 mt-1 container w-50 NavDiv">
                <ul className='d-flex justify-content-around px-0 m-0 rounded'>
                    <Link to='/' className="text-light text-decoration-none">Home</Link>
                    <Link to='/' className="text-light text-decoration-none">Owner Account</Link>
                    <Link to='/' className="text-light text-decoration-none">Animal Details</Link>
                    <Link to='/' className="text-light text-decoration-none">About</Link>
                </ul>
            </div>
            <img src={pict} alt="" id="LogOut"/>

            
        </>
    )
}