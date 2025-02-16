import { motion, useMotionValue } from "framer-motion"


const SpringAnimatedPosition = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const moveBox = () => {
        x.set(Math.random()* 300)
        y.set(Math.random() * 300)
    }

  return (
   <div>
    <motion.div
    className="w-32 h-32 bg-blue-500 rounded"
    style={{
        x, y,
    }}
    onClick={moveBox}
    >
Click Me
    </motion.div>
   </div>
  )
}

export default SpringAnimatedPosition