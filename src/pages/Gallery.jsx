import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import ParallaxSection, { breathIn } from '../components/ParallaxSection';
import LazySection from '../components/LazySection';
import './Gallery.css';

// Hero Images
import galleryHeroD from '../assets/images/gallery-hero-desktop.webp';
import galleryHeroM from '../assets/images/portraitImages/gallery-hero-mobile.webp';

// Grid Images - Main
import concertPhoto1 from '../assets/images/gallery-concert-01.webp';
import shootPhoto1 from '../assets/images/gallery-shoot-01.webp';
import shootPhoto2 from '../assets/images/gallery-shoot-02.webp';
import stagePhoto1 from '../assets/images/portraitImages/gallery-stage-01.webp';
import concertPhoto2 from '../assets/images/galleryImg/gallery-concert-02.webp';

import classicalPhoto1 from '../assets/images/galleryImg/gallery-classical-01.webp';

// Grid Images - Expanded Collection
import artistAboutImg from '../assets/images/about-artist.webp';
import heroMainMobileImg from '../assets/images/hero-main-mobile.webp';
import recognitionImg from '../assets/images/galleryImg/gallery-recognition-01.webp';
import heroMainDesktopImg from '../assets/images/landscapeImages/hero-main-desktop.webp';
import servicesBgDesktopImg from '../assets/images/landscapeImages/services-bg-desktop.webp';
import performanceBgDesktopImg from '../assets/images/landscapeImages/performance-bg-desktop.webp';
import contactHeroDesktopImg from '../assets/images/landscapeImages/contact-hero-desktop.webp';
import learnHeroDesktopImg from '../assets/images/landscapeImages/learn-hero-desktop.webp';
import servicesBgMobileImg from '../assets/images/portraitImages/services-bg-mobile.webp';
import performanceBgMobileImg from '../assets/images/portraitImages/performance-bg-mobile.webp';
import contactHeroMobileImg from '../assets/images/portraitImages/contact-hero-mobile.webp';
import learnHeroMobileImg from '../assets/images/portraitImages/learn-hero-mobile.webp';

const images = [
    { id: 1, src: stagePhoto1, alt: 'Stage performance', caption: 'Live Concert', ratio: '3/4' },
    { id: 2, src: shootPhoto1, alt: 'Professional artist portrait', caption: 'Professional Shoot', ratio: '1/1' },
    { id: 3, src: shootPhoto2, alt: 'Studio shoot', caption: 'The Maestro', ratio: '3/4' },
    { id: 4, src: concertPhoto1, alt: 'Artist performing', caption: 'Serenade', ratio: '3/4' },
    { id: 5, src: concertPhoto2, alt: 'Live show performance', caption: 'Musical Evening', ratio: '1/1' },
    { id: 8, src: classicalPhoto1, alt: 'Classical concert', caption: 'Symphony', ratio: '1/1' },
    { id: 9, src: artistAboutImg, alt: 'Artist portrait', caption: 'Devotion', ratio: '3/4' },
    { id: 10, src: heroMainMobileImg, alt: 'Atmospheric shot', caption: 'Soulful', ratio: '1/1' },
    { id: 11, src: recognitionImg, alt: 'Certificate or recognition', caption: 'Recognition', ratio: '3/4' },
    { id: 12, src: heroMainDesktopImg, alt: 'Wide performance', caption: 'Grand Stage', ratio: '16/9' },
    { id: 13, src: servicesBgDesktopImg, alt: 'Stage setup', caption: 'The Vibe', ratio: '16/9' },
    { id: 14, src: performanceBgDesktopImg, alt: 'Artist performing live', caption: 'Live Journey', ratio: '3/2' },
    { id: 15, src: contactHeroDesktopImg, alt: 'Candid artist shot', caption: 'The Flutist', ratio: '4/5' },
    { id: 16, src: learnHeroDesktopImg, alt: 'Artist in thought', caption: 'Artist Soul', ratio: '1/1' },
    { id: 17, src: servicesBgMobileImg, alt: 'Portrait close-up', caption: 'Focus', ratio: '4/5' },
    { id: 18, src: performanceBgMobileImg, alt: 'Artist on stage', caption: 'Presence', ratio: '3/4' },
    { id: 19, src: contactHeroMobileImg, alt: 'Musical evening', caption: 'Harmonics', ratio: '1/1' },
    { id: 20, src: learnHeroMobileImg, alt: 'Artist portrait', caption: 'Maestro Life', ratio: '3/4' },
    { id: 25, src: galleryHeroD, alt: 'Hero landscape', caption: 'Cinematic', ratio: '16/9' },
    { id: 26, src: galleryHeroM, alt: 'Hero portrait', caption: 'Portrait', ratio: '1/2' }
];

const Gallery = () => {
    return (
        <AnimatedPage className="gallery-page">
            {/* ─── Header ─── */}
            <ParallaxSection
                desktopImage={galleryHeroD}
                mobileImage={galleryHeroM}
                className="text-cream text-center subpage-hero gallery-hero"
                style={{ minHeight: '65vh' }}
            >
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={breathIn}
                    className="text-shadow mb-2"
                    style={{ letterSpacing: '0.35em', textTransform: 'uppercase', fontSize: '0.85rem', color: 'var(--color-gold)' }}
                >
                    ✦ Visual Journey ✦
                </motion.p>
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={breathIn}
                    className="display-3 fw-bold text-shadow-lg text-cream text-glow-white mb-3"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Photo Gallery
                </motion.h1>
                <div className="gold-divider mx-auto mb-3"></div>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={breathIn}
                    className="text-white-50 fs-5"
                >
                    Moments captured from stages across the world.
                </motion.p>
            </ParallaxSection>

            {/* ─── Masonry Grid ─── */}
            <section className="section-musical position-relative z-1">
                <div className="container mt-4">
                    <div
                        style={{
                            display: 'columns',
                            columns: '3 300px',
                            columnGap: '2rem'
                        }}
                    >
                        {images.map((img, index) => {
                            const getMinHeight = (ratio) => {
                                switch (ratio) {
                                    case '3/4': return '400px';
                                    case '1/1': return '300px';
                                    case '16/9': return '170px';
                                    case '3/2': return '200px';
                                    case '4/5': return '375px';
                                    case '1/2': return '600px';
                                    default: return '300px';
                                }
                            };
                            return (
                                <LazySection
                                    key={img.id}
                                    minHeight={getMinHeight(img.ratio)}
                                    className="d-inline-block w-100"
                                    style={{ breakInside: 'avoid', marginBottom: '2rem' }}
                                >
                                    <motion.div
                                        style={{
                                            breakInside: 'avoid',
                                            marginBottom: '2rem',
                                            display: 'inline-block',
                                            width: '100%'
                                        }}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: '-50px' }}
                                        variants={breathIn}
                                        transition={{ delay: (index % 3) * 0.1 }}
                                    >
                                        <div className="rounded-4 overflow-hidden shadow-lg hover-glow img-overlay-inner bg-midnight border border-secondary border-opacity-25" style={{ borderColor: 'rgba(212, 175, 55, 0.15) !important' }}>
                                            <img
                                                src={img.src}
                                                alt={img.alt}
                                                style={{
                                                    width: '100%',
                                                    display: 'block',
                                                    aspectRatio: img.ratio,
                                                    objectFit: 'cover',
                                                    objectPosition: 'center top',
                                                    transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
                                                }}
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="text-center mt-3">
                                            <p className="mb-0 small fw-bold text-uppercase text-gradient-accent" style={{ letterSpacing: '0.1em' }}>
                                                {img.caption}
                                            </p>
                                        </div>
                                    </motion.div>
                                </LazySection>
                            );
                        })}
                    </div>
                </div>
            </section>
        </AnimatedPage>
    );
};

export default Gallery;
