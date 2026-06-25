import React from "react";
import { Link } from 'react-router-dom'

function Navbar() {
    const linkStyle = {
        fontFamily: "Cormorant Garamond",
        fontWeight: '200',
        color: '#c5c4c3',
        textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
        fontSize: 'clamp(2rem, 1vw, 1rem)', 
        textDecoration: 'none'

    }

    return (
        <nav>
            <h1 style= {{
                fontFamily: "Cormorant Garamond",
                fontWeight: '200',
                color: '#D97742',
                textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
                fontSize: 'clamp(2rem, 1vw, 1rem)',
                textDecoration: 'none'
            }}> Darth Cornelius </h1>


            <div style = {{

            }}> 
                <Link to="/" style={linkStyle}> Home </Link>

                <Link to = "/" style={linkStyle}> Bio|Contact </Link>

            </div>

        </nav>
    );
}

export default Navbar;
