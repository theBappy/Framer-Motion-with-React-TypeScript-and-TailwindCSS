import { motion,useMotionValue, useTransform } from "framer-motion"

const DraggableBox = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

   const backgroundColor = useTransform(x , [-100, 100], ['#ff0000', '#00ff00'])
  return (
    <motion.div 
    drag dragConstraints={{
        left: -200,
        right: 200,
        top: -200,
        bottom: 200,
    }}
    style={{ x, y, backgroundColor}}
    className="w-32 rounded-lg shadow-lg h-32 
    cursor-pointer flex justify-center items-center ">
        <span className="text-white">
            Drag Me!
        </span>

    </motion.div>
  )
}

export default DraggableBox