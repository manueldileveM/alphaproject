import Logo from '../assets/Logo .svg';
import Nav from './Nav';

function Header() {
    return (
        <header className="header">
            <img src={Logo} alt="Little Lemon Logo" className="logo"/>
            <Nav />
        </header>
    );
}

export default Header;
