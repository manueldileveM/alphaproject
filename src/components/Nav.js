import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul className="nav-links">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/About">ABOUT</Link></li>
                <li><Link to="/Menu">MENU</Link></li>
                <li><Link to="/Reservations">RESERVATIONS</Link></li>
                <li><Link to="/OrderOnline">ORDER ONLINE</Link></li>
                <li><Link to="/Login">LOGIN</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
