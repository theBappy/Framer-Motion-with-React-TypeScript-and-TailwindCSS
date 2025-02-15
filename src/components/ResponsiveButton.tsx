import { motion } from "framer-motion"



const ResponsiveButton = () => {
  return (
    <motion.div 
    className="transition-transform w-24 h-12 duration-300 
    ease-in-out p-2 bg-blue-500 
    text-white cursor-pointer rounded"
    whileHover={{
        scale: 1.1
    }}
    whileTap={{
        scale: 0.9
    }}
    
    >
    Click Me
    </motion.div>
  )
}

export default ResponsiveButton