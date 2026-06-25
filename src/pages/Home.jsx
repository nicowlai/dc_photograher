import React from "react";
import VogueModels from '../assets/voguemodels.jpg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// HOMEPAGE OF THE WEBSITE
function Home() {
    const linkHeaders = {
        fontFamily: "DM Sans",
        fontWeight: 'normal',
        color: '#FFFFFF',
        textShadow: '2px 2px 8px rgb(0, 0, 0)',
        fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
        textDecoration: 'none'
    }
    return (
        <motion.div 
            initial={{ opacity: 0 }}    // start invisible
            animate={{ opacity: 1 }}    // fade in
            exit={{ opacity: 0 }}       // fade out
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            style={{ minHeight: '100vh',
                backgroundColor: 'black'
             }}
        >
        <div style={{
            backgroundImage: `url(${VogueModels})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            width: '100vw',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
        }}>
            <h1 style={{
                fontFamily: "Cormorant Garamond",
                fontWeight: '600',
                color: '#FFFFFF',
                textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
                fontSize: 'clamp(2.5rem, 7vw, 7rem)',
                margin: '0',
                lineHeight: '1',
                textAlign: 'center',
            }}>Darth Cornelius</h1>

            <h2 style={{
                fontFamily: "Cormorant Garamond",
                fontWeight: '500',
                color: '#FFFFFF',
                textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
                fontSize: 'clamp(1.2rem, 3.8vw, 3.8rem)',
                margin: '0',
                lineHeight: '1',
                textAlign: 'center',
            }}>Photographer</h2>

            <div style={{
                display: 'flex',
                gap: '1.5rem',
                marginTop: '1.5rem',
            }}>
                <Link to="/bio-contact" style={linkHeaders}>BIO / CONTACT</Link>
                <Link to="/portfolio" style ={linkHeaders}>PORTFOLIO</Link>
            </div>
        </div>
        </motion.div>
    );
}

export default Home;