import { NavLink } from 'react-router-dom';
import './BottomHeader.css';

export const BottomHeader = ():JSX.Element => {
    return (
        <nav className="nav nav_bottom">
            <NavLink to = '/' className="nav_links">Home <i className="fas fa-home"></i></NavLink>
            <NavLink to = '/catalog' className="nav_links">Sneakers <i className="fab fa-shopify"></i></NavLink>
            <NavLink to = '/catalog' className="nav_links">Catalog <i className ="fas fa-border-all"></i></NavLink>
            <NavLink to = '/catalog' className="nav_links">Wears <i className="fas fa-tshirt"></i></NavLink>
            <NavLink to = '/catalog' className="nav_links">Accessory <i className="fas fa-glasses"></i></NavLink>
            <NavLink to = '/about' className="nav_links">About us <i className="fas fa-info"></i></NavLink>
            <NavLink to = '/about' className="nav_links">Our Team <i className="fas fa-user-friends"></i></NavLink>
        </nav>
    )
}