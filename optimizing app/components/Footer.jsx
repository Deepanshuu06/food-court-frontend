import React , {useContext} from "react";
import { UserContext } from "../utils/UserContext";
const Footer = ()=>{

    const {user} = useContext(UserContext)
    return(
        <>
<div className="footerContainer">

    <ul>
        <li>About</li>
        <li>Carrers</li>
        <li>Team</li>
        <li>Swiggy one </li>
        <li>Swiggy Instamart</li>
    </ul>

    <ul>
        <li>Contact us</li>
        <li>Help & Support </li>
        <li>Partner with us</li>
        <li>ride with us</li>
    </ul>
    <ul>
        <li>Banglore</li>
        <li>Gurgaon</li>
        <li>Hydrabad</li>
        <li>Delhi</li>
        <li>Mumbai</li>
    </ul>
</div>
    <h3>This site developed by {user.name} - {user.email}</h3>
        </>
    )
}

export default Footer