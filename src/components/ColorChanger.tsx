import { motion } from "framer-motion"


const ColorChanger = () => {
  return (
    <motion.div className="w-32 h-32"
    animate={{
        backgroundColor: ['#ff0000', '#00ff00', '#0000ff', '#ff0000']
    }}
    transition={{
        duration: 3,
        ease: 'linear',
        repeat: Infinity,
    }}
    />
  )
}

export default ColorChanger