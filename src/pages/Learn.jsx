import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import ParallaxSection, { breathIn } from '../components/ParallaxSection';
import SoundwaveDivider from '../components/SoundwaveDivider';
import LazySection from '../components/LazySection';
import './Learn.css';

import learnHeroImgD from '../assets/images/landscapeImages/learn-hero-desktop.webp';
import learnHeroImgM from '../assets/images/portraitImages/learn-hero-mobile.webp';
import philosophyImg from '../assets/images/hero-main-mobile.webp';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const Learn = () => {
    return (
        <AnimatedPage className="learn-page">
            {/* ─── Header ─── */}
            <ParallaxSection
                desktopImage={learnHeroImgD}
                mobileImage={learnHeroImgM}
                className="text-cream text-center subpage-hero"
                style={{ minHeight: '60vh' }}
            >
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={breathIn}
                    className="text-shadow mb-3"
                    style={{ letterSpacing: '0.35em', textTransform: 'uppercase', fontSize: '0.85rem', color: 'var(--color-gold)' }}
                >
                    ✦ Classes & Mentorship ✦
                </motion.p>
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={breathIn}
                    className="display-2 fw-bold text-shadow-lg text-cream text-glow-white mb-4"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Master the<br /><em className="text-glow-accent" style={{ color: 'var(--color-gold)' }}>Bamboo Flute</em>
                </motion.h1>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={breathIn}
                    className="lead mt-3 mb-0 text-shadow mx-auto fs-4"
                    style={{ maxWidth: '600px', color: 'rgba(248,245,242,0.9)' }}
                >
                    Embark on a musical journey, from traditional roots to contemporary expressions.
                </motion.p>
            </ParallaxSection>

            {/* ─── Philosophy ─── */}
            <LazySection minHeight="550px">
                <section className="section-musical position-relative z-1">
                    <div className="container">
                        <div className="row align-items-center g-5">
                            <motion.div
                                className="col-lg-5"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={breathIn}
                            >
                                <div className="rounded-4 overflow-hidden shadow-lg glass-card p-2" style={{ maxHeight: '550px' }}>
                                    <div className="img-overlay-inner rounded-4 overflow-hidden">
                                        <img loading="lazy" src={philosophyImg} alt="Rakesh Dath" className="w-100" style={{ height: '530px', objectFit: 'cover', objectPosition: 'center top' }} />
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                className="col-lg-7"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                            >
                                <motion.p variants={fadeInUp} className="text-gradient-accent fw-bold mb-3" style={{ letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem' }}>
                                    My Philosophy
                                </motion.p>
                                <motion.h2 variants={fadeInUp} className="display-4 fw-bold text-cream text-glow-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                                    Music as a<br /><em className="text-gradient-accent text-glow-accent">Spiritual Path</em>
                                </motion.h2>
                                <motion.p variants={fadeInUp} className="fs-5 lh-lg mb-4 text-cream-muted">
                                    Teaching is an extension of my spiritual practice. My vision as a cultural educator
                                    is not just to impart technical skill, but to instill a lifelong devotion to the arts.
                                </motion.p>
                                <motion.p variants={fadeInUp} className="fs-5 lh-lg mb-5 text-cream-muted">
                                    Whether you are a beginner or an advanced student, the bamboo flute offers a pathway to inner peace
                                    and creative expression that transcends boundaries.
                                </motion.p>
                                <motion.blockquote variants={fadeInUp} className="border-start border-3 ps-4 mb-0" style={{ borderColor: 'var(--color-gold) !important' }}>
                                    <p className="fst-italic fs-4 text-cream" style={{ fontFamily: 'var(--font-heading)' }}>"The flute weeps for the Divine — let your practice be a prayer."</p>
                                    <footer className="text-gradient-accent fw-bold small">— Rakesh Dath</footer>
                                </motion.blockquote>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </LazySection>

            <SoundwaveDivider className="my-4" />

            {/* ─── Class Offerings ─── */}
            <LazySection minHeight="600px">
                <section className="position-relative z-1 section-musical">
                    <div className="container mt-4">
                        <motion.div
                            className="text-center mb-5"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={breathIn}
                        >
                            <p className="mb-2 text-gradient-accent fw-bold" style={{ letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem' }}>What You'll Learn</p>
                            <h2 className="text-cream text-glow-white display-5 fw-bold">Class Offerings</h2>
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
                                {
                                    icon: 'bi-gem',
                                    title: 'Traditional Carnatic',
                                    desc: 'Dive deep into the rigorous frameworks of Ragas and Talas. Focus on authentic techniques, Gamakas, and classical compositions that form the backbone of South Indian music.'
                                },
                                {
                                    icon: 'bi-film',
                                    title: 'Contemporary Film Songs',
                                    desc: 'Learn to play your favorite soulful melodies from cinema. We bridge classical foundation with light music aesthetics to play emotive, expressive songs.'
                                },
                                {
                                    icon: 'bi-wind',
                                    title: 'Instrumental Techniques',
                                    desc: 'Focus on the mechanics of the flute: breath control, fingering dexterity, tone production, and improvisational skills to find your unique voice.'
                                }
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeInUp} className="col-lg-4">
                                    <div className="glass-card hover-glow h-100 p-5 text-cream">
                                        <div className="mb-4 d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '60px', height: '60px', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.4)' }}>
                                            <i className={`bi ${item.icon} fs-3 text-gold`}></i>
                                        </div>
                                        <h4 className="fw-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h4>
                                        <p className="lh-lg mb-0 text-white-50">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="text-center mt-5 pt-4"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={breathIn}
                        >
                            <Link to="/contact" className="btn btn-primary btn-lg rounded-pill px-5 shadow hover-lift">Inquire About Classes</Link>
                        </motion.div>
                    </div>
                </section>
            </LazySection>
        </AnimatedPage>
    );
};

export default Learn;
