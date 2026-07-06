import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import ParallaxSection, { breathIn } from '../components/ParallaxSection';
import SoundwaveDivider from '../components/SoundwaveDivider';
import './Home.css';
import '../components/Testimonial.css';

// Import assets
import heroImageD from '../assets/images/landscapeImages/hero-main-desktop.webp';
import heroImageM from '../assets/images/hero-main-mobile.webp';
import aboutImage from '../assets/images/about-artist.webp';
import servicesImageD from '../assets/images/landscapeImages/services-bg-desktop.webp';
import servicesImageM from '../assets/images/portraitImages/services-bg-mobile.webp';
import galleryHeroD from '../assets/images/landscapeImages/performance-bg-desktop.webp';
import galleryHeroM from '../assets/images/portraitImages/performance-bg-mobile.webp';


// Testimonial Assets
import testimonialImg1 from '../assets/images/galleryImg/testimonial-01.webp';
import testimonialImg2 from '../assets/images/galleryImg/testimonial-02.webp';
import testimonialImg3 from '../assets/images/galleryImg/testimonial-03.webp';
import testimonialImg4 from '../assets/images/galleryImg/testimonial-04.webp';
import testimonialPressReview from '../assets/images/galleryImg/press-review.webp';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const TestimonialItem = ({ img, idx }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [hasMore, setHasMore] = useState(false);
    const imgRef = useRef(null);

    const checkHeight = () => {
        if (imgRef.current) {
            // If the natural height (at current width) is significantly more than 500px
            const isLong = imgRef.current.clientHeight > 505;
            setHasMore(isLong);
        }
    };

    useEffect(() => {
        // Initial check if image is already cached/loaded
        if (imgRef.current?.complete) {
            checkHeight();
        }
    }, []);

    return (
        <motion.div variants={fadeInUp} className="testimonial-card flex-shrink-0" style={{ scrollSnapAlign: 'start' }}>
            <div className="glass-card hover-lift h-100 rounded-4 overflow-hidden border position-relative">
                <div className={`testimonial-card-inner ${isExpanded ? 'expanded' : ''} ${hasMore ? 'has-more' : ''}`}>
                    <img
                        ref={imgRef}
                        src={img}
                        alt={`Testimonial ${idx + 1}`}
                        onLoad={checkHeight}
                        loading="lazy"
                        className="w-100 h-auto rounded-3"
                    />
                </div>
                {hasMore && (
                    <button
                        className="testimonial-btn"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'Show Less' : 'Show More'}
                    </button>
                )}
            </div>
        </motion.div>
    );
};

const YouTubeFacade = ({ videoId, title, aspectRatio = '16/9', maxHeight }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    if (isPlaying) {
        return (
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-100 d-block"
                style={{ aspectRatio, maxHeight, border: 0 }}
            ></iframe>
        );
    }

    return (
        <div 
            onClick={() => setIsPlaying(true)}
            className="position-relative w-100 overflow-hidden"
            style={{ aspectRatio, maxHeight, cursor: 'pointer' }}
        >
            <motion.img 
                src={thumbnailUrl} 
                alt={title} 
                className="w-100 h-100"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
            />
            <div 
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                style={{ background: 'rgba(0,0,0,0.35)' }}
            >
                <motion.div 
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{ 
                        width: '68px', 
                        height: '68px', 
                        background: 'rgba(212, 175, 55, 0.9)', 
                        border: '2px solid #d4af37',
                        boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)'
                    }}
                    whileHover={{ scale: 1.15, backgroundColor: 'rgba(212, 175, 55, 1)' }}
                    whileTap={{ scale: 0.95 }}
                >
                    <i className="bi bi-play-fill fs-2" style={{ marginLeft: '4px', color: '#0b0f19' }}></i>
                </motion.div>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <AnimatedPage className="home-page">
            {/* ─── Hero Section ─── */}
            <ParallaxSection
                desktopImage={heroImageD}
                mobileImage={heroImageM}
                className="text-cream"
                bgClassName="hero-bg-top"
                style={{ minHeight: '95vh' }}
            >
                {/* Radial Glow */}
                <div className="radial-glow"></div>
                <div className="text-center" style={{ position: 'relative', zIndex: 10 }}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.p
                            variants={breathIn}
                            className="text-shadow mb-3"
                            style={{ letterSpacing: '0.35em', textTransform: 'uppercase', fontSize: '0.85rem', color: 'var(--color-gold)' }}
                        >
                            ✦ Indian Classical Music ✦
                        </motion.p>
                        <motion.h1
                            variants={breathIn}
                            className="display-1 fw-bold mb-4 text-shadow-lg text-golden-glow"
                            style={{ lineHeight: 1, fontFamily: 'var(--font-heading)' }}
                        >
                            Rakesh Dath
                        </motion.h1>
                        <motion.p
                            variants={breathIn}
                            className="fs-3 mb-2 text-shadow"
                            style={{ color: 'var(--color-cream)', fontFamily: 'var(--font-heading)', fontStyle: 'italic' }}
                        >
                            <span className="text-gradient-accent">Bamboo Flautist</span> &amp; Cultural Educator
                        </motion.p>
                        <motion.p
                            variants={breathIn}
                            className="lead mb-5 text-shadow mx-auto fs-3"
                            style={{ maxWidth: '750px', color: 'var(--color-cream-muted)', fontFamily: 'var(--font-accent)', letterSpacing: '0.05em' }}
                        >
                            Bridging cultures through the timeless voice of the bamboo flute.
                        </motion.p>
                        <motion.div variants={breathIn} className="d-flex gap-4 justify-content-center flex-wrap">
                            <Link to="/contact" className="btn btn-primary btn-lg rounded-pill px-5 shadow-lg hover-lift">
                                Book a Performance
                            </Link>
                            <Link to="/learn" className="btn btn-lg rounded-pill px-5 btn-ghost-gold">
                                Explore Classes
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </ParallaxSection>

            {/* ─── Floating Stats Bar ─── */}
            <section className="py-4 position-relative z-1">
                <div className="container glass-panel py-4">
                    <motion.div
                        className="row text-center g-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {[
                            { num: '12+', label: 'Years of Mastery' },
                            { num: '15+', label: 'International Stages' },
                            { num: '500+', label: 'Students Taught' },
                            { num: '200+', label: 'National and International cities Toured' },
                        ].map((stat, i) => (
                            <motion.div key={i} variants={fadeInUp} className="col-6 col-md-3">
                                <div className="py-2">
                                    <div className="fw-bold mb-1" style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>
                                        <span className="text-gradient-accent text-glow-accent">{stat.num}</span>
                                    </div>
                                    <div className="text-white-50 small text-uppercase fw-bold" style={{ letterSpacing: '0.15em' }}>{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <SoundwaveDivider className="my-3" />

            {/* ─── About Snippet ─── */}
            <section className="section-pad position-relative z-1">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <motion.div
                            className="col-lg-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            variants={fadeInUp}
                        >
                            <div className="rounded-4 shadow-lg overflow-hidden glass-card p-2" style={{ maxHeight: '500px' }}>
                                <div className="img-overlay-inner rounded-4 overflow-hidden">
                                    <img
                                        src={aboutImage}
                                        alt="Rakesh Dath playing flute"
                                        loading="lazy"
                                        className="w-100"
                                        style={{ objectFit: 'cover', height: '480px', objectPosition: 'center 10%' }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="col-lg-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            variants={staggerContainer}
                        >
                            <motion.p variants={fadeInUp} className="text-gradient-accent fw-bold mb-3" style={{ letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem' }}>
                                About the Artist
                            </motion.p>
                            <motion.h2 variants={fadeInUp} className="display-4 fw-bold mb-4 text-cream text-glow-white">A Lifetime<br /><em className="text-gradient-accent text-glow-accent">of Devotion</em></motion.h2>
                            <motion.p variants={fadeInUp} className="fs-5 mb-4 lh-lg text-cream-muted">
                                With over a decade of rigorous training under the esteemed guidance of Vidwan Mysore Chandan Kumar,
                                Rakesh Dath has cultivated a profound mastery over the bamboo flute. His journey is a testament to the
                                spiritual depth and intricate beauty of Indian classical music.
                            </motion.p>
                            <motion.p variants={fadeInUp} className="fs-5 mb-5 lh-lg text-cream-muted">
                                A cultural ambassador by heart, he has graced national and international stages, bringing the meditative
                                power of Carnatic music to audiences across the globe.
                            </motion.p>
                            <motion.div variants={fadeInUp}>
                                <Link to="/learn" className="btn btn-outline-primary rounded-pill px-4 me-3">
                                    His Journey
                                </Link>
                                <Link to="/contact" className="text-gradient-accent fw-bold px-2 py-1 hover-glow rounded">
                                    Book Now <i className="bi bi-arrow-right ms-1"></i>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <SoundwaveDivider className="mb-5" />

            {/* ─── Services Overview ─── */}
            {/* ─── Services Overview ─── */}
            <ParallaxSection
                desktopImage={servicesImageD}
                mobileImage={servicesImageM}
                className="text-cream"
            >
                <div className="text-center mb-5">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={breathIn}
                    >
                        <p className="text-shadow mb-2 text-gradient-accent fw-bold" style={{ letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem' }}>Services</p>
                        <h2 className="text-cream text-glow-white display-5 fw-bold text-shadow">Versatile Offerings</h2>
                        <div className="gold-divider mt-3 mx-auto"></div>
                    </motion.div>
                </div>

                <motion.div
                    className="row g-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp} className="col-md-6">
                        <div className="glass-card hover-glow h-100 p-5">
                            <div className="mb-4 d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '60px', height: '60px', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.4)' }}>
                                <i className="bi bi-mic fs-3 text-gold"></i>
                            </div>
                            <h3 className="h4 text-cream mb-3">Live Shows &amp; Recitals</h3>
                            <p className="text-white-50 lh-lg mb-0">
                                From intimate solo recitals designed to evoke deep introspection to grand spiritual festivals,
                                experience the mesmerizing aura of live classical renditions.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="col-md-6">
                        <div className="glass-card hover-glow h-100 p-5">
                            <div className="mb-4 d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '60px', height: '60px', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.4)' }}>
                                <i className="bi bi-music-note-beamed fs-3 text-gold"></i>
                            </div>
                            <h3 className="h4 text-cream mb-3">Versatile Repertoire</h3>
                            <p className="text-white-50 lh-lg mb-0">
                                An expansive mastery spanning traditional Carnatic music, evocative film songs, and innovative
                                instrumental fusion bridging East and West.
                            </p>
                        </div>
                    </motion.div>

                    <div className="col-md-6" style={{ opacity: 1, transform: 'translateY(0)' }}>
                        <div className="glass-card hover-glow h-100 p-5">
                            <div className="mb-4 d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '60px', height: '60px', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.4)' }}>
                                <i className="bi bi-laptop fs-3 text-gold"></i>
                            </div>
                            <h3 className="h4 text-cream mb-3">Masterclasses &amp; Online Lessons</h3>
                            <p className="text-white-50 lh-lg mb-0">
                                Empowering the next generation of flautists through personalized online training, comprehensive masterclasses, and deep-dive cultural workshops.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6" style={{ opacity: 1, transform: 'translateY(0)' }}>
                        <div className="glass-card hover-glow h-100 p-5">
                            <div className="mb-4 d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '60px', height: '60px', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.4)' }}>
                                <i className="bi bi-headphones fs-3 text-gold"></i>
                            </div>
                            <h3 className="h4 text-cream mb-3">Studio Recordings &amp; Collaborations</h3>
                            <p className="text-white-50 lh-lg mb-0">
                                Professional bamboo flute recording sessions for films, albums, and global fusion project collaborations, delivering a soulful aesthetic to any composition.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </ParallaxSection>

            {/* ─── Global Footprint ─── */}
            <section className="section-pad position-relative z-1">
                <div className="container">
                    <motion.div
                        className="text-center mb-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <p className="text-gradient-accent fw-bold mb-2" style={{ letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem' }}>Around the World</p>
                        <h2 className="text-cream text-glow-white display-5 fw-bold">Global Footprint</h2>
                        <div className="gold-divider mt-3 mx-auto"></div>
                    </motion.div>

                    <motion.div
                        className="row g-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {[
                            { icon: 'bi-geo-alt', title: 'USA Tour 2023', desc: 'A multi-city tour bringing the essence of Carnatic music to diverse audiences across the States.' },
                            { icon: 'bi-globe-americas', title: 'Rome, Italy 2018', desc: 'An acclaimed performance bridging cultures at the international spiritual festival in Rome.' },
                        ].map((item, i) => (
                            <motion.div key={i} variants={fadeInUp} className="col-md-6">
                                <div className="glass-card hover-glow p-5 h-100">
                                    <div className="mb-3 d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '56px', height: '56px', background: 'rgba(212, 175, 55, 0.1)' }}>
                                        <i className={`bi ${item.icon} fs-3 text-gold`}></i>
                                    </div>
                                    <h4 className="fw-bold text-cream mb-3">{item.title}</h4>
                                    <p className="mb-0 lh-lg text-cream-muted">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ─── Testimonials Carousel ─── */}
            <section className="section-pad position-relative z-1" style={{ background: 'var(--color-midnight-light)', borderTop: '1px solid rgba(212,175,55,0.05)', borderBottom: '1px solid rgba(212,175,55,0.05)' }}>
                <div className="container">
                    <motion.div
                        className="text-center mb-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <p className="text-gradient-accent fw-bold mb-2" style={{ letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem' }}>In the Press & Words of Praise</p>
                        <h2 className="text-cream text-glow-white display-5 fw-bold">Testimonials</h2>
                        <div className="gold-divider mt-3 mx-auto"></div>
                    </motion.div>

                    <motion.div
                        className="testimonial-track d-flex overflow-auto pb-4 gap-4 px-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {[testimonialImg1, testimonialImg2, testimonialImg3, testimonialImg4, testimonialPressReview].map((img, idx) => (
                            <TestimonialItem key={idx} img={img} idx={idx} />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ─── Spotify Album Section ─── */}
            <section className="section-pad position-relative z-1" style={{ borderBottom: '1px solid rgba(212,175,55,0.05)' }}>
                <div className="container">
                    <div className="row align-items-center g-5">
                        <motion.div
                            className="col-lg-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <p className="text-gradient-accent fw-bold mb-2" style={{ letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem' }}>
                                Featured Release
                            </p>
                            <h2 className="display-4 fw-bold text-cream text-glow-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                                Varnams Volume 01
                            </h2>
                            <div className="gold-divider mt-2 mb-4 mx-0" style={{ margin: '0 0 1rem 0' }}></div>
                            <p className="fs-5 lh-lg mb-4 text-cream-muted">
                                Taana varnams rendered by veteran Indian Bamboo Flautist, Rakesh Dath. Immerse yourself in the pureness of Indian carnatic ragas: <strong>Mohana, Hamsadhwani, Abhogi &amp; Kalyani</strong>.
                            </p>
                            <p className="fs-5 lh-lg mb-4 text-cream-muted">
                                Specially curated for music enthusiasts and learners who want to understand the structure of Varnams.
                            </p>
                            <div className="mt-4 pt-2">
                                <a
                                    href="https://open.spotify.com/album/2kR5s0R5s6GSqQt5EAngLZ?si=oBQNxMqiQo2DVZsFjchNYQ"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-lg rounded-pill px-4 shadow hover-glow d-inline-flex align-items-center"
                                >
                                    <i className="bi bi-spotify me-2 fs-4" style={{ color: '#1DB954' }}></i>
                                    Listen on Spotify
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="col-lg-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <div className="glass-card p-3 rounded-4 hover-glow" style={{ background: 'rgba(11, 18, 32, 0.4)' }}>
                                <iframe
                                    style={{ borderRadius: '12px', display: 'block' }}
                                    src="https://open.spotify.com/embed/album/2kR5s0R5s6GSqQt5EAngLZ?utm_source=generator&theme=0"
                                    width="100%"
                                    height="352"
                                    frameBorder="0"
                                    allowFullScreen=""
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-view"
                                    loading="lazy"
                                    title="Spotify Album - Varnams Volume 01"
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── Performance Videos ─── */}
            <ParallaxSection
                desktopImage={galleryHeroD}
                mobileImage={galleryHeroM}
                className="text-cream"
                speed={0.12}
            >
                <div className="text-center mb-5">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={breathIn}
                    >
                        <p className="text-shadow mb-2" style={{ letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem', color: 'var(--color-gold)' }}>Watch & Listen</p>
                        <h2 className="text-cream text-glow-white display-5 fw-bold text-shadow">Performance Gallery</h2>
                        <div className="gold-divider mt-3"></div>
                    </motion.div>
                </div>

                {/* Feature Video */}
                <motion.div
                    className="row justify-content-center mb-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <div className="col-lg-9">
                        <div className="rounded-4 overflow-hidden shadow-lg hover-lift bg-black border border-secondary border-opacity-10">
                            <YouTubeFacade
                                videoId="k3qc59LduMY"
                                title="Featured Performance"
                                maxHeight="600px"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Secondary Videos */}
                <motion.div
                    className="row g-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {[
                        { id: "RRljMtQpsQE" },
                        { id: "hxJWrk3Ke8I" },
                        { id: "erhzpU-rhDM" },
                        { id: "L6f-SqB6jmc" },
                    ].map((video, idx) => (
                        <motion.div key={idx} variants={fadeInUp} className="col-md-6">
                            <div className="rounded-4 overflow-hidden shadow-lg hover-lift bg-black border border-secondary border-opacity-10">
                                <YouTubeFacade
                                    videoId={video.id}
                                    title={`Performance ${idx + 1}`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </ParallaxSection>

            {/* ─── CTA Banner ─── */}
            <section className="glass-panel py-5 text-center my-5 mx-3 mx-md-5 z-2 position-relative">
                <div className="container py-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInUp} className="text-cream text-glow-white display-6 fw-bold mb-3">Ready to Experience the Magic?</motion.h2>
                        <motion.p variants={fadeInUp} className="text-cream-muted fs-5 mb-5">Book Rakesh Dath for your next event, concert, or spiritual gathering.</motion.p>
                        <motion.div variants={fadeInUp}>
                            <Link to="/contact" className="btn btn-primary btn-lg px-5 shadow hover-lift">Get In Touch</Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </AnimatedPage>
    );
};

export default Home;
