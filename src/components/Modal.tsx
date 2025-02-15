import { motion } from "framer-motion"
import { useState } from "react"



const Modal = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
    className="flex flex-col items-center"
    >
<button className="mb-4 p-2 bg-blue-500 text-white rounded"
onClick={()=> setIsOpen(true)}
>open modal</button>
{isOpen && (
    <motion.div
    className="fixed inset-0 bg-black bg-opacity-50
    flex justify-center items-center
    "
    onClick={()=> setIsOpen(false)}
    >
        <motion.div className="bg-white p-4 rounded>

        </motion.div>

    </motion.div>
)}
    </div>
  )
}

export default Modal