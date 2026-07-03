import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';
import logoImg from '../assets/images/logo-main.webp';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Apply the scrolled background if the user has scrolled OR if the menu is open (for readability)
    const navBackground = (isScrolled || isMenuOpen) ? 'scrolled' : 'bg-transparent';

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${navBackground}`} style={{ zIndex: 1030 }}>
            <div className="container">
                <Link className="navbar-brand fw-bold fs-4 d-flex align-items-center gap-2" to="/">
                    <img loading="lazy" src={logoImg} alt="Rakesh Dath Logo" style={{ height: '45px', width: 'auto', filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.4))' }} />
                    <span className="font-heading text-gradient-accent">Rakesh Dath</span>
                </Link>
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    onClick={toggleMenu}
                    aria-controls="navbarNav"
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation"
                >
                    <i className={`fs-2 text-cream ${isMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
                </button>
                <div className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav align-items-center gap-lg-1">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link px-3 ${isActive ? 'active' : ''}`} to="/" end>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link px-3 ${isActive ? 'active' : ''}`} to="/learn">
                                Learn
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link px-3 ${isActive ? 'active' : ''}`} to="/gallery">
                                Gallery
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link px-3 ${isActive ? 'active' : ''}`} to="/contact">
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item ms-lg-2 mt-3 mt-lg-0 mb-3 mb-lg-0">
                            <Link className="btn btn-primary btn-sm rounded-pill px-4 py-2 fw-bold" to="/contact">
                                Book a Performance
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
