import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"



const FadeInOut = () => {
    const [visible, setVisible] = useState(false)

  return (
    <div className="flex flex-col items-center">
        <button className="p-2 text-white mb-4 bg-blue-500 rounded-full"
        onClick={()=> setVisible(!visible)}
        >Toggle Fade</button>

        <AnimatePresence>
        {visible && (
            <motion.div
            className="p-4 text-black bg-gray-200 rounded"
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{ duration : 0.5}}
            >
                Hello, I'm a fading component
            </motion.div>
        )}
        </AnimatePresence>

    </div>
  )
}

export default FadeInOut