import React from "react";
import VogueModels from '../assets/voguemodels.jpg'
import { Link } from 'react-router-dom'

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
    );
}

export default Home;