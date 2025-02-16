import { motion, stagger } from "framer-motion"

const items = ['item1', 'item2', 'item3', 'item4','item5']

const staggerVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
}

const StaggerList = () => {
  return (
    <motion.div
    initial='hidden'
    animate='visible'
    variants={{
        visible: {
            transition: {
                staggerChildren: 1,
            }
        }
    }}
    >
        {items.map((item,index)=>(
           <motion.div
           variants={staggerVariants}
            className="mb-2 p-5 bg-yellow-300"
            key={index}>
                
           </motion.div> 
        ))}
    </motion.div>
  )
}

export default StaggerList