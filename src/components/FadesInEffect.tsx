import { motion } from "framer-motion"

const fadeInVariants = {
    hidden: {
       opacity: 0 
    },
    visible: {
       opacity: 1 
    },
}


const FadesInEffect = () => {
  return (
    <motion.div 
    variants={fadeInVariants}
    initial="hidden"
    animate="visible"
    transition={{duration: 2 }}
    className="bg-blue-500 p-4 rounded shadow">
        <h2 className="text-white">Fade In Component</h2>
    </motion.div>
  )
}

export default FadesInEffect