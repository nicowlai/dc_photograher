import React from "react";
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    const linkStyle = {
        fontFamily: "Cormorant Garamond",
        fontWeight: '200',
        color: '#c5c4c3',
        textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
        fontSize: 'clamp(1.2rem, 3vw, 2rem)',
        fontWeight:'semi-bold',
        textDecoration: 'none'
    }

    const location = useLocation()

    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 40px',
            backgroundColor: 'transparent',

        }}>
            <Link to = "/">
                <h1 style= {{
                    fontFamily: "Cormorant Garamond",
                    fontWeight: '200',
                    color: '#D97742',
                    textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
                    fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                    fontWeight:'semi-bold',
                    textDecoration: 'none',
                    display: 'inline',
                    margin:'0',
                }}> Darth Cornelius 
                </h1>
            </Link>


            <div style={{
                //gap: '30px',
                display: 'flex',
                alignItems: 'center',
            }}> 
                {location.pathname === '/portfolio' ? (
                <Link to="/bio-contact" style={linkStyle}>Bio | Contact
                </Link>
            ) : (
                <Link to="/portfolio" style={linkStyle}>Portfolio</Link>
                    )}
            </div>
        </nav>
    );
}

export default Navbar;
