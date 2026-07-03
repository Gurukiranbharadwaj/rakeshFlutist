import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        filter: 'blur(10px)',
        scale: 0.98,
        y: 20
    },
    animate: {
        opacity: 1,
        filter: 'blur(0px)',
        scale: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1], // Breath-like ease
            staggerChildren: 0.1
        }
    },
    exit: {
        opacity: 0,
        filter: 'blur(10px)',
        scale: 1.02,
        y: -20,
        transition: {
            duration: 0.8,
            ease: [0.32, 0, 0.67, 0]
        }
    }
};

const AnimatedPage = ({ children, className }) => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={className}
            style={{ width: '100%', minHeight: '100vh' }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;
