import logo from '../assets/icons/favicon.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="wrapper">
        <a href="/" className="brand-logo">
          <img src={logo} alt="logo" className="logo" />
          <h1>Technical Dictionary</h1>
        </a>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'activePage' : undefined)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'activePage' : undefined)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'activePage' : undefined)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
