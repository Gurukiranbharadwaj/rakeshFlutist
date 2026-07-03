import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import ParallaxSection, { breathIn } from '../components/ParallaxSection';
import './Contact.css';

import contactBgD from '../assets/images/landscapeImages/contact-hero-desktop.webp';
import contactBgM from '../assets/images/portraitImages/contact-hero-mobile.webp';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Contact = () => {
    const [formStatus, setFormStatus] = useState('idle');
    const [mediaKitUnlocked, setMediaKitUnlocked] = useState(false);
    const [mediaKitPassword, setMediaKitPassword] = useState('');
    const [mediaKitError, setMediaKitError] = useState(false);

    const handleMediaKitUnlock = (e) => {
        e.preventDefault();
        // The default password is 'rakesh123'. Change it here if needed.
        if (mediaKitPassword === 'Rakesh@123') {
            setMediaKitUnlocked(true);
            setMediaKitError(false);
        } else {
            setMediaKitError(true);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        const form = e.target;
        const data = new FormData(form);
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                setFormStatus('success');
                form.reset();
                setTimeout(() => setFormStatus('idle'), 8000);
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            setFormStatus('error');
        }
    };

    return (
        <AnimatedPage className="contact-page">
            {/* ─── Header ─── */}
            <ParallaxSection
                desktopImage={contactBgD}
                mobileImage={contactBgM}
                className="text-cream text-center subpage-hero"
                style={{ minHeight: '55vh' }}
            >
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={breathIn}
                    className="text-shadow mb-3"
                    style={{ letterSpacing: '0.35em', textTransform: 'uppercase', fontSize: '0.85rem', color: 'var(--color-gold)' }}
                >
                    ✦ Let's Connect ✦
                </motion.p>
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={breathIn}
                    className="display-2 fw-bold text-shadow-lg text-cream text-glow-white mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Get In Touch
                </motion.h1>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={breathIn}
                    className="lead text-shadow mx-auto fs-4"
                    style={{ maxWidth: '600px', color: 'rgba(248,245,242,0.9)' }}
                >
                    For bookings, classes, or general inquiries — reach out and let the music begin.
                </motion.p>
            </ParallaxSection>

            {/* ─── Contact Body ─── */}
            <section className="section-musical position-relative z-1">
                <div className="container mt-4">
                    <div className="row g-5 align-items-start">

                        {/* ─── Contact Info Column ─── */}
                        <motion.div
                            className="col-lg-4"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={breathIn}
                        >
                            <div className="mb-5">
                                <p className="text-gradient-accent fw-bold mb-1" style={{ letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem' }}>Direct Contact</p>
                                <h3 className="fw-bold text-cream display-5" style={{ fontFamily: 'var(--font-heading)' }}>Let's Talk</h3>
                                <div className="gold-divider mt-3 mx-0" style={{ margin: '1rem 0 0' }}></div>
                            </div>

                            {[
                                {
                                    icon: 'bi-telephone-fill',
                                    label: 'Call Now',
                                    value: '+91 7406026336',
                                    href: 'tel:+917406026336'
                                },
                                {
                                    icon: 'bi-envelope-fill',
                                    label: 'Email',
                                    value: 'dathrakesh@gmail.com',
                                    href: 'mailto:dathrakesh@gmail.com'
                                },
                                {
                                    icon: 'bi-geo-alt-fill',
                                    label: 'Based In',
                                    value: 'India & International',
                                    href: null
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="d-flex align-items-start mb-4"
                                    variants={fadeInUp}
                                >
                                    <div
                                        className="d-flex align-items-center justify-content-center rounded-circle me-3 flex-shrink-0"
                                        style={{ width: '56px', height: '56px', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.3)' }}
                                    >
                                        <i className={`bi ${item.icon} text-gold fs-5`}></i>
                                    </div>
                                    <div>
                                        <div className="small text-uppercase fw-bold mb-1" style={{ color: 'var(--color-cream-muted)', letterSpacing: '0.15em' }}>{item.label}</div>
                                        {item.href ? (
                                            <a href={item.href} className="fw-semibold text-cream text-decoration-none hover-glow d-inline-block fs-5" style={{ wordBreak: 'break-all', transition: 'var(--transition-smooth)' }}>
                                                {item.value}
                                            </a>
                                        ) : (
                                            <span className="fw-semibold text-cream fs-5">{item.value}</span>
                                        )}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Social icons */}
                            <div className="mt-5 pt-3">
                                <p className="small text-uppercase fw-bold mb-3" style={{ color: 'var(--color-cream-muted)', letterSpacing: '0.15em' }}>Follow Along</p>
                                <div className="d-flex gap-3">
                                    {[
                                        { icon: 'bi-youtube', href: 'https://youtube.com/@rakeshflute?si=LhIEhx5ogsGqVcN2' },
                                        { icon: 'bi-instagram', href: 'https://www.instagram.com/mr_pillangovi?igsh=MXhheDhhcWY4MjF1cQ%3D%3D&utm_source=qr' }
                                    ].map((s, i) => (
                                        <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center rounded-circle hover-glow text-cream"
                                            style={{ width: '50px', height: '50px', background: 'rgba(255,255,255,0.05)', fontSize: '1.3rem', transition: 'all 0.3s ease', border: '1px solid rgba(255,255,255,0.1)' }}>
                                            <i className={`bi ${s.icon}`}></i>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* ─── Media Kit Download ─── */}
                            <div className="mt-5 pt-4 border-top border-secondary border-opacity-25">
                                <div className="glass-card p-4 rounded-4 hover-glow text-center position-relative overflow-hidden" style={{ background: 'rgba(212, 175, 55, 0.05)' }}>
                                    <div className="mb-3">
                                        <i className={`bi ${mediaKitUnlocked ? 'bi-unlock-fill' : 'bi-lock-fill'} fs-1 text-gold`} style={{ dropShadow: '0 0 10px rgba(212,175,55,0.4)' }}></i>
                                    </div>
                                    <h4 className="fw-bold text-cream mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Press & Media Kit</h4>
                                    <p className="small text-cream-muted mb-4">Download the official artist profile PDF, high-res photos, and press materials.</p>

                                    {!mediaKitUnlocked ? (
                                        <form onSubmit={handleMediaKitUnlock}>
                                            <div className="input-group mb-2">
                                                <input
                                                    type="password"
                                                    className="form-control custom-form-input text-cream border-secondary"
                                                    style={{ backgroundColor: 'rgba(0,0,0,0.2)', borderTopLeftRadius: '25px', borderBottomLeftRadius: '25px', paddingLeft: '1.25rem' }}
                                                    placeholder="Enter Password"
                                                    value={mediaKitPassword}
                                                    onChange={(e) => { setMediaKitPassword(e.target.value); setMediaKitError(false); }}
                                                    required
                                                />
                                                <button
                                                    className="btn btn-outline-primary fw-bold px-3"
                                                    style={{ borderTopRightRadius: '25px', borderBottomRightRadius: '25px' }}
                                                    type="submit">
                                                    Unlock
                                                </button>
                                            </div>
                                            {mediaKitError && <div className="text-danger small mt-2 fw-bold">Incorrect password, please try again.</div>}
                                        </form>
                                    ) : (
                                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                            <a href="./downloads/Rakesh_Dath_Media_Kit.zip" download="Rakesh_Dath_Media_Kit.zip" className="btn btn-primary rounded-pill px-4 fw-bold w-100 py-2">
                                                <i className="bi bi-download me-2"></i>Download .zip
                                            </a>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </motion.div>

                        {/* ─── Contact Form ─── */}
                        <motion.div
                            className="col-lg-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={breathIn}
                        >
                            <div className="glass-card p-5">
                                <h3 className="fw-bold text-cream mb-1" style={{ fontFamily: 'var(--font-heading)' }}>Send a Message</h3>
                                <p className="text-cream-muted mb-4 fs-5">Fill in the form below and I'll get back to you within 24–48 hours.</p>

                                {formStatus === 'success' && (
                                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="alert bg-black border border-success border-opacity-50 p-4 rounded-4 mb-4 d-flex align-items-center shadow-lg position-relative overflow-hidden">
                                        <div className="position-absolute w-100 h-100 top-0 start-0" style={{ background: 'rgba(40,167,69,0.1)' }}></div>
                                        <i className="bi bi-check-circle-fill text-success fs-1 me-4 position-relative z-1" style={{ dropShadow: '0 0 15px rgba(40,167,69,0.5)' }}></i>
                                        <div className="position-relative z-1">
                                            <strong className="d-block fs-5 text-white mb-1">Message Sent Successfully!</strong>
                                            <span className="text-cream-muted small">Thank you for reaching out. Rakesh will get back to you shortly.</span>
                                        </div>
                                    </motion.div>
                                )}
                                {formStatus === 'error' && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="alert alert-danger bg-black border-danger border-opacity-50 text-light p-3 rounded-4 mb-4 small">
                                        Oops! There was a problem submitting your form. Please try again.
                                    </motion.div>
                                )}

                                <form action="https://formspree.io/f/xpqykqoy" method="POST" onSubmit={handleSubmit}>
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <label htmlFor="name" className="form-label fw-bold small text-uppercase" style={{ letterSpacing: '0.1em', color: 'var(--color-cream-muted)' }}>Name</label>
                                            <input type="text" name="name" className="form-control form-control-lg rounded-3 custom-form-input p-4" id="name" placeholder="Your full name" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="email" className="form-label fw-bold small text-uppercase" style={{ letterSpacing: '0.1em', color: 'var(--color-cream-muted)' }}>Email</label>
                                            <input type="email" name="email" className="form-control form-control-lg rounded-3 custom-form-input p-4" id="email" placeholder="your@email.com" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="phone" className="form-label fw-bold small text-uppercase" style={{ letterSpacing: '0.1em', color: 'var(--color-cream-muted)' }}>Phone (Optional)</label>
                                            <input type="tel" name="phone" className="form-control form-control-lg rounded-3 custom-form-input p-4" id="phone" placeholder="+91 XXXXX XXXXX" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="subject" className="form-label fw-bold small text-uppercase" style={{ letterSpacing: '0.1em', color: 'var(--color-cream-muted)' }}>Inquiry Type</label>
                                            <select name="subject" className="form-select form-select-lg rounded-3 custom-form-input p-4" id="subject" defaultValue="" required>
                                                <option value="" disabled className="text-dark">Select one...</option>
                                                <option value="booking" className="text-dark">Performance Booking</option>
                                                <option value="classes" className="text-dark">Classes / Mentorship</option>
                                                <option value="collaboration" className="text-dark">Collaboration</option>
                                                <option value="general" className="text-dark">General Inquiry</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="message" className="form-label fw-bold small text-uppercase" style={{ letterSpacing: '0.1em', color: 'var(--color-cream-muted)' }}>Message</label>
                                            <textarea name="message" className="form-control form-control-lg rounded-3 custom-form-input p-4" id="message" rows="5" placeholder="Tell me more about your enquiry..." required></textarea>
                                        </div>
                                        <div className="col-12 text-end mt-5">
                                            <button type="submit" disabled={formStatus === 'submitting'} className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-sm hover-glow fw-bold">
                                                {formStatus === 'submitting' ? (
                                                    <><span className="spinner-border spinner-border-sm me-2"></span>Sending...</>
                                                ) : (
                                                    <><i className="bi bi-send me-2"></i>Send Message</>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </AnimatedPage>
    );
};

export default Contact;
