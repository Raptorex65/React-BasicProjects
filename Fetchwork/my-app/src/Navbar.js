import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>FORM BLOG</h1>
      <div className="links">
        <Link className="link" to="/">HOME</Link>
        <Link className="link" to="/getdata" >GETDATA</Link>
        <Link className="link" to="/form">FORM</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;