import { Link } from "react-router-dom";
import Logo from "../assets/efishery_logo.png";

function Header () {
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
        <Link to="/create" className="efishery_link-add"> Tambah Data </Link>
      </nav>
    </header>
  )
}

export default Header;