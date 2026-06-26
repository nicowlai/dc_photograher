import { motion } from 'framer-motion'
import NavBar from '../components/Navbar'
import { MdOutlineEmail } from "react-icons/md"
import { FaInstagram } from "react-icons/fa"

function BioContact() {

    const pStyle = {
        fontFamily: "DM Sans",
        fontSize: '18px',
        fontWeight: 'normal',
        color: '#c5c4c3',
    }
    const headerStyle = {
        fontFamily: "Cormorant Garamond",
        fontSize: '25px',
        fontWeight: '300',
        color: '#FAFAFA',
        margin: '0',
    }

    const contactLinkStyle = {
        fontFamily: "DM Sans",
        fontSize: '16px',
        fontWeight: 'normal',
        color: '#D97742',
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}    // start invisible
            animate={{ opacity: 1 }}    // fade in
            exit={{ opacity: 0 }}       // fade out
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            style={{
                minHeight: '100vh',
                backgroundColor: '#444444'
            }}
        >
            <NavBar />
            <main 
            className="bio-container" // displayed screen size for mobile
            style={{
            display:'flex',
            flexDirection: 'row',
            minHeight: '100vh',
            margin: '60px 100px',  // a gap bewteen the border and text 
        }}> 
        {/* Left side - text container */}
        <div style={{
            flex:1,
            padding: '60px 40px'
        }}> 

            <h1 style={headerStyle}> Darth Cornelius Photographer </h1>
            <p style={pStyle}> Darth Cornelius is a New York and New Zealand photographer with a passion for capturing authentic moments in street, fashion and nature photography. His work explores the intersection of culture, identity and urban life.</p>

            <h2 style={headerStyle} > Inquiries </h2>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '20px',
                marginTop: '20px',
            }}> 
                <a href="mailto:corneliusd80@gmail.com" style={contactLinkStyle}> 
                    <MdOutlineEmail size={25}/> 
                </a>

                <a href="https://www.instagram.com/corneliusdarth/" style={contactLinkStyle}> 
                <FaInstagram size={25}/>
                </a>
        </div>
    </div>

        {/* Right side - photo*/}
        <div style={{
            flex:1,
            backgroundColor:"#555555",
            minHeight: '100vh',
        }}> 

        </div>

            </main>

        </motion.div>
    )
}

export default BioContact