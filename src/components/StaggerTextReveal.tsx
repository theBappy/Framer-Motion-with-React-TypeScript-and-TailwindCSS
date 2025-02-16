import { motion } from "framer-motion"

const text = 'Hello World'

const staggerVariants ={
    hidden: {opacity: 0},
    visible: {opacity: 1},
}


const StaggerTextReveal = () => {
  return (
    <motion.h1
    initial='hidden'
    animate='visible'
    variants={{
        visible: {
            transition: {
                staggerChildren: 1
            }
        }
    }}
     className="text-4xl font-bold text-white"
    >{text.split("").map((char, index)=>(
        <motion.span 
        variants={staggerVariants}
        key={index}>
            {char}
        </motion.span>
    ))}</motion.h1>
  )
}

export default StaggerTextReveal