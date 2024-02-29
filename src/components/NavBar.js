import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar(){
    return(
        <nav>
            <NavLink
                to="/"
                className="nav-link"
            >
                Home
            </NavLink>
            <NavLink
                to="/rules"
                className="nav-link"
            >
                Rules
            </NavLink>
            <NavLink
                to="/feats"
                className="nav-link"
            >
                Feats
            </NavLink>
            
        </nav>
    )
}

export default NavBar