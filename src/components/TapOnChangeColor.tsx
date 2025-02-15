import { motion } from "framer-motion"
import { useState } from "react";

const colors =[
  "bg-blue-500", "bg-green-500",
  "bg-red-500", "bg-yellow-500",
];



const TapOnChangeColor = () => {
    const [colorIndex, setColorIndex] = useState(0)
    const handleTap = () =>{
        setColorIndex(prev => (prev+1) % colors.length)
    }
  return (
    <motion.div
    className={`w-32 h-32 ${colors[colorIndex]} cursor-pointer rounded-lg flex items-center justify-center`}
    onTap={handleTap}
    >Tap Me!</motion.div>
  )
}

export default TapOnChangeColor