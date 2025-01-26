import { Link } from "react-router-dom"
import LogOut from './Icons/logout.png'
import Cart from './Icons/shopping-bag.png'
import Fav from './Icons/favorites.png'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './Style/Nav.css'
export default function Nav(){
    return(
        <>
            <div className="py-3 text-primary rounded-5 container w-50 NavDiv">
                <ul className='d-flex justify-content-around px-0 m-0 rounded'>
                    <Link to='/Home' className="text-light text-decoration-none">Home</Link>
                    <Link to='/PetOwner' className="text-light text-decoration-none">Pet Owner</Link>
                    <Link to='/PetDetails' className="text-light text-decoration-none">Pet Details</Link>
                    <Link to='/About' className="text-light text-decoration-none">About</Link>
                </ul>
            </div>

            <div id="LeftSide">
                <img src={Fav} alt="" id="Favourite" />
                <img src={Cart} alt="" id="Cart" />
                <img src={LogOut} alt="" id="LogOut"/>
            </div>

            
        </>
    )
}