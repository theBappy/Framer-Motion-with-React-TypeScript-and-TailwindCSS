import { motion } from "framer-motion"
import { useState } from "react"



const LongPress = () => {
    const [isLarge, setIsLarge] = useState(false)
    const handleLongPressStart = () =>{
        setIsLarge(true)
    }
    const handleLongPressend =() =>{
        setIsLarge(false)
    }
  return (
    <motion.div 
    onTapStart={handleLongPressStart}
    onTapCancel={handleLongPressend}
    onTap={handleLongPressend}
    className={`w-32 h-32 bg-blue-500 rounded-lg flex 
        items-center justify-center 
        transition-all duration-300
        cursor-pointer ${isLarge ? 'w-48 h-48' : ''}
        `}
    >Long Press Me!</motion.div>
  )
}

export default LongPress