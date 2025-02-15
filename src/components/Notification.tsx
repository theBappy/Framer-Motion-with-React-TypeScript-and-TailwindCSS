import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

const Notification = () => {
    const [visible,setVisible] = useState(false)
    const showToast =()=>{
        setVisible(true)
        setTimeout(() => {
            setVisible(false)
        }, 3000);
    } 
  return (
    <div 
    className="
    flex flex-col items-center
    ">
        <button className="p-2 mb-4 bg-teal-500 text-white rounded"
        onClick={()=>showToast()}
        >
            Show Notifications
        </button>
        
        <AnimatePresence>
        {visible && (
            <motion.div 
            initial={{ opacity: 0, y: -20}}
            animate={{ opacity: 1,y: 0 }}
            exit={{opacity: 0, y: -20}}
            transition={{ duration: 0.5}}
            className="fixed top-4 right-4 p-4 bg-green-500 text-white rounded">
                Notification: Action Successful

            </motion.div>
        )}
        </AnimatePresence>

    </div>
  )
}

export default Notification