import { motion } from "framer-motion"
import { img } from "framer-motion/client";
import { useState } from "react"
const galleryImages = [
    "https://images.unsplash.com/photo-1507936580189-3816b4abf640?q=80&w=3870&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=3870&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?q=80&w=3200&auto=format&fit=crop",
    "https://saudiscoop.com/wp-content/uploads/2021/05/Arabian-Oryx-.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRIanf4e2MVLAzYus0Tba12fz8RMrPe70AA5B3PYFDMqOcA3cYQmwRrd_i1omI2oktyMo&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhFr0790HvrNIVZTz91jCEeCzrnbCSgMRYHwH3wY3GiScJrkHK8cL9sSbOYIu8ag8JICU&usqp=CAU"
  ];

const parentVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
    transition: {
        staggerChildren: 0.5,
        staggerDirection: 1,
    },
}
const childVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0},  
}

const AnimatedGallery = () => {
    const [showImages, setShowImages] = useState(false)
    const handleClick = () => setShowImages((prev) => !prev )
  return (
    <div>
        <button onClick={handleClick}
        className="mb-[2rem] p-4 rounded-lg bg-yellow-300 text-black font-bold"
        >{showImages ? 'Hide Images' : 'Show Images'}</button>
        <motion.div 
        variants={parentVariants}
        initial='hidden'
        animate={showImages ? 'visible' :'hidden'}
        className="flex">
            {galleryImages.map((image, index)=>(
                <motion.img 
                variants={childVariants}
                className="ml-[2rem] w-[300px] rounded"
                src={image} alt={`Gallery Image ${index+1}`} />
            ))}
        </motion.div>
    </div>
  )
}

export default AnimatedGallery