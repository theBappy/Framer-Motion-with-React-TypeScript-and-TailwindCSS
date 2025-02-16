import { motion } from "framer-motion"


const GridLatoutCard = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
        {[1,2,3,4].map((item, index)=>(
            <motion.div
            key={index}
            initial={{scale: 0.8 }}
            whileInView={{scale: 1}}
            whileHover={{ scale: 1.1, backgroundColor: '#3b82f6'}}
            transition={{duration: 0.3}}
            className="bg-blue-500 text-white rounded-lg p-6 text-center"
            >
                <h2 className="text-2xl">Card: {item}</h2>
            </motion.div>
        ))}
    </div>
  )
}

export default GridLatoutCard