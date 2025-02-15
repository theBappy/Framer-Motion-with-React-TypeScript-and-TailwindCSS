import { motion } from "framer-motion"
import { useState } from "react"

const variants = {
    front: {rotateY: 0},
    back: {rotateY: 180},
}



const FlippingCard = () => {
    const [isFlipped, setIsFlipped] = useState(false)
  return (
    <motion.div
    onClick={() => setIsFlipped(!isFlipped)}
     className="perspective-1000">
        <motion.div 
        variants={variants}
        initial="front"
        animate={ isFlipped ? 'back' : 'front'}
        transition={{ duration : 0.6 }}
        className="w-65 h-40 bg-white rounded-lg shadow-lg overflow-hidden transform-style-preserve-3d">
            <div className="absolute text-xl font-bold inset-0 bg-white justify-center items-center">Front Side</div>
            <div className="absolute text-xl font-bold inset-0 rotate-y-180 bg-blue-500 justify-center items-center">Back Side</div>
        </motion.div>
    </motion.div>
  )
}

export default FlippingCard