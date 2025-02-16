import { motion } from "framer-motion"

const buttons =['buuton1', 'button2', 'button3', 'button4']

const StaggerButton = () => {
  return (
    <motion.div
    className="flex space-x-4"
    whileHover={{transition:{staggerChildren:0.2 }}}
    >
        {buttons.map((label, index) => (
            <motion.button 
             className="p-2 bg-blue-500 text-white rounded ml-[2rem]"
             whileHover={{scale: 1.1}}
            key={index}>
                {label}
            </motion.button>
        ))}
    </motion.div>
  )
}

export default StaggerButton