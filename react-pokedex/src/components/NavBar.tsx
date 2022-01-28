import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface NavBarProps {

}

const NavBar: FunctionComponent<NavBarProps> = () => {
   return (
      <div className='nav-bar'>
         <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
         </div>
         <span className="nav-title">React Pokédex</span>
      </div>
   );
}

export default NavBar;