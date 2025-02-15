import { motion } from "framer-motion"


const PulsingEffect = () => {
  return (
    <motion.button
    className="p-4 bg-green-500 text-white rounded"
    animate={{ 
        scale: [1,1.1,1]
    }}
    transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        ease: 'easeInOut'
    }}
    >
        Pulse
    </motion.button>
  )
}

export default PulsingEffect