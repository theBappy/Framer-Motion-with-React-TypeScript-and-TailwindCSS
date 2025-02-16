import { motion } from "framer-motion"

const items = ['item1', 'item2','item3','item4', 'item5','item6']

const staggerVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
}

const StaggerGrid = () => {
  return (
    <motion.div
    initial='hidden'
    animate='visible'
    variants={{
        visible: {
            transition: {staggerChildren: 0.7}
        }
    }}
    className="grid grid-cols-3 gap-4"
    >
        {items.map((item, index)=>(
            <motion.div
            variants={staggerVariants}
        
            key={index}
            className="p-4 text-black bg-gray-200 rounded"

            >
     
            </motion.div>
        ))}
    </motion.div>
  )
}

export default StaggerGrid