import { motion } from "framer-motion"


const BackgroundAnimation = () => {
  return (
    <motion.div 
    className="w-screen h-screen"
    animate={{
        backgroundColor: ['#ff0000', '#00ff00', '#0000FF', '#FF0000'],
    }}
    transition={{
        duration: 5,
        ease: 'linear',
        repeat: Infinity,
    }}
    />
  )
}

export default BackgroundAnimation