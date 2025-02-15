import { motion } from "framer-motion"



const SlidingText = () => {
  return (
    <motion.h1
   initial={{
        x: '-100%'
    }}
    animate={{
     x:0  
    }}
    transition={{
        duration:1,
    }}
    >Slide in Text</motion.h1>
  )
}

export default SlidingText