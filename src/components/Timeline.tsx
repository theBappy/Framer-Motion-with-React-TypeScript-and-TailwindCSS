import { motion } from "framer-motion"



const Timeline = () => {
const itemVariants ={
        hidden: {opacity: 0, scale: 0.5, rotate: 180},
        visible: {opacity: 1, scale: 1, rotate: 0},

}
  return (
    <motion.div
    className="flex items-center"
    initial='hidden'
    whileInView='visible'
    transition={{staggerChildren: 0.5 }}
    >
        {[1,2,3].map((item)=>(
            <motion.div 
            className="bg-purple-500 text-white ml-[2rem] p-4 my-2 rounded-lg"
            key={item}
            variants={itemVariants}
            >
                Item: {item}
            </motion.div>
        ))}
    </motion.div>
  )
}

export default Timeline