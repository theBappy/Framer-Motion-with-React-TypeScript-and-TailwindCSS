import { motion } from "framer-motion"



const SequenceAnimation = () => {
  return (
    <div>
    {[...Array(5)].map((_, index)=> (
        <motion.div
        key={index}
        className="bg-teal-500 h-20 p-2 w-20"
        animate={{ x: 100 }}
        transition={{ duration: 0.5, delay: index*0.5}}
        />
    ))}
    </div>
  )
}

export default SequenceAnimation