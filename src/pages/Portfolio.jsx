import NavBar from '../components/NavBar'
import PhotosGallery from '../components/PhotosGallery'
import { motion } from 'framer-motion' 

function Portfolio() {
    return (
        <motion.div 
            initial={{ opacity: 0 }}    // start invisible
            animate={{ opacity: 1 }}    // fade in
            exit={{ opacity: 0 }}       // fade out
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            style={{ minHeight: '100vh',
                backgroundColor: '#444444'
             }}
        >
        
            <NavBar/>
            <PhotosGallery/>
        </motion.div>
    )
}

export default Portfolio
