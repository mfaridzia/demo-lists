import Logo from "../assets/efishery_logo.png";

function Header () {
  return (
    <header className="efishery_header">
      <img 
        className="efishery_logo"
        alt="eFishery Logo" 
        src={Logo} 
      />
    </header>
  )
}

export default Header;