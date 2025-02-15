import { motion } from "framer-motion"
import { useState } from "react"


const GestureCard = () => {
    const [isRemoved, setIsRemoved] = useState(false)
    const handleSwipe = (_ : any, info: any)=>{
        if(info.offset.x >  100){
           setIsRemoved(true) // Swipe right to remove
        }
        else if(info.offset.x < -100){
           setIsRemoved(true) 
        }
    }

  return (
    <motion.div className={`w-32 h-16 bg-blue-500 rounded-lg shadow-lg
         flex items-center justify-center
          text-white  ${isRemoved ? 'hidden': ''}  `}
          onDragEnd={handleSwipe}
          drag ='x'
          dragConstraints={{ left: -100, right: 100}}
          >Swipe Me</motion.div>
  )
}

export default GestureCard