import { Outlet, NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
      <>
        <nav className="nav">
          <NavLink className="page-title" to="/">Woody Umstead</NavLink>
          <NavLink id="contact" to="/contact">Contact</NavLink>
        </nav>
        <Outlet />
      </>
    );
}
