import { motion, useMotionValue } from "framer-motion"


const DragBox = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
  return (
    <div className="flex flex-col items-center">
        <motion.div 
        className="h-32 w-32 bg-blue-500 rounded"
        drag 
        style={{x, y}}
        />
        <p className="something">
            Position: ({x.get().toFixed(2)}, {y.get().toFixed(2)})
        </p>
    </div>
  )
}

export default DragBox