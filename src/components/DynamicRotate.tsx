import { motion, useMotionValue } from "framer-motion"



const DynamicRotate = () => {
    const rotate = useMotionValue(0)
    const rotateBox = () => {
        rotate.set(rotate.get() + 45)
    }
  return (
    <motion.div className="w-32 h-32 bg-blue-500 rounded"
    style={{rotate}}
    onClick={rotateBox}
    >Click Me</motion.div>
  )
}

export default DynamicRotate