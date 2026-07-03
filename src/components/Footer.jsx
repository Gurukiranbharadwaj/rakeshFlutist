import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-charcoal text-cream pt-4 pb-3 mt-auto">
            <div className="container">
                <div className="row gy-4 pb-4" style={{ borderBottom: '1px solid rgba(248,245,242,0.1)' }}>
                    {/* Brand */}
                    <div className="col-12 col-lg-5 pe-lg-4">
                        <h5 className="text-ochre mb-2 font-heading fs-5 text-glow-white">Rakesh Dath</h5>
                        <p className="text-white-50 lh-base mb-3 small" style={{ maxWidth: '320px' }}>
                            Bridging cultures, tradition, and innovation through the timeless voice of the bamboo flute.
                        </p>
                        <div className="d-flex gap-2">
                            {[
                                { icon: 'bi-youtube', href: 'https://youtube.com/@rakeshflute?si=LhIEhx5ogsGqVcN2' },
                                { icon: 'bi-instagram', href: 'https://www.instagram.com/mr_pillangovi?igsh=MXhheDhhcWY4MjF1cQ%3D%3D&utm_source=qr' }
                            ].map((s, i) => (
                                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center rounded-circle text-cream hover-lift shadow-sm"
                                    style={{ width: '36px', height: '36px', background: 'rgba(255,255,255,0.08)', fontSize: '1rem', transition: 'all 0.3s ease' }}>
                                    <i className={`bi ${s.icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-6 col-lg-3">
                        <h6 className="text-cream fw-bold mb-3 small text-uppercase" style={{ letterSpacing: '0.15em', fontSize: '0.8rem' }}>Explore</h6>
                        <ul className="list-unstyled mb-0 d-flex flex-column gap-2 small">
                            <li><Link to="/" className="text-white-50 text-decoration-none hover-glow d-inline-block" style={{ transition: 'color 0.3s ease' }}>Home</Link></li>
                            <li><Link to="/learn" className="text-white-50 text-decoration-none hover-glow d-inline-block" style={{ transition: 'color 0.3s ease' }}>Learn</Link></li>
                            <li><Link to="/contact" className="text-white-50 text-decoration-none hover-glow d-inline-block" style={{ transition: 'color 0.3s ease' }}>Contact / Booking</Link></li>
                        </ul>
                    </div>

                    {/* Contact Blurb */}
                    <div className="col-6 col-lg-4">
                        <h6 className="text-cream fw-bold mb-3 small text-uppercase" style={{ letterSpacing: '0.15em', fontSize: '0.8rem' }}>Contact Info</h6>
                        <div className="d-flex align-items-center mb-2">
                            <i className="bi bi-telephone text-ochre me-2 fs-6 shadow-sm"></i>
                            <a href="tel:+917406026336" className="text-white-50 text-decoration-none hover-glow small" style={{ fontSize: '0.9rem' }}>+91 7406026336</a>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="bi bi-envelope text-ochre me-2 fs-6 shadow-sm"></i>
                            <a href="mailto:dathrakesh@gmail.com" className="text-white-50 text-decoration-none hover-glow small" style={{ fontSize: '0.9rem', wordBreak: 'break-all' }}>dathrakesh@gmail.com</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-3 text-center">
                    <p className="text-white-50 small mb-0">© {currentYear} Rakesh Dath. All rights reserved. &nbsp;|&nbsp; Designed by Gurukiran S K</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
