import { motion } from "framer-motion"


const IconsRotate = () => {
  return (
    <motion.img 
    src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg"
    className="w-20 h-20 "
    animate={{ rotate: 360}}
    transition={{duration: 2,repeat: Infinity, ease: 'linear'}}
    />
  )
}

export default IconsRotate