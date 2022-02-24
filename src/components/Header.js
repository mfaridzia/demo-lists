import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/efishery_logo.png";

function Header () {
  const { pathname } = useLocation();
  const checkPathname = () => pathname === "/";
  
  return (
    <header className="efishery_header">
      <nav className="efishery_navbar">
        <Link to="/" className="efishery_link-logo">
          <img 
            className="efishery_logo"
            alt="eFishery Logo" 
            src={Logo} 
          />
        </Link>

        <Link 
          to={checkPathname() ? "/create" : "/"} 
          className="efishery_link-add"
        > 
          {checkPathname() ? "Tambah Data" : "Home"}
        </Link>
      </nav>
    </header>
  )
}

export default Header;