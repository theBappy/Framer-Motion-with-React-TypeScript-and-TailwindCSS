import { motion } from "framer-motion"
import { useState } from "react"

const RotateOnDrag = () => {
    const [rotation, setRotation] = useState(0)
    const handleDrag = (_: any, info: any)=> {
       const newRotation = rotation * info.offset.x;
        setRotation(newRotation)
    }

  return (
    <motion.div
    className="w-32 h-32 bg-red-500 rounded0-lg flex items-center justify-center"
    drag 
    style={{ rotate: rotation }}
    transition={{duration: 3}}
    onDrag={handleDrag}
    >Drag Me</motion.div>
  )
}

export default RotateOnDrag