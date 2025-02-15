import { motion } from "framer-motion"
import { useState } from "react"



const SidebarAnimation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex mt-[50vh] items-center mx-auto justify-center">
        <button className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={()=>setIsOpen(!isOpen)}
        >Toggle Sidebar</button>

        <motion.div
        className={`fixed left-0 top-0 h-full bg-gray-700 text-white p-4 ${
            isOpen ? '' : '-translate-x-full'
        }`}
        initial={{ x: '-100%'}}
        animate={{ x: isOpen ? '0%' : '-100%'}}
        transition={{duration: 0.5 }}
        >
            <h2 className="text-lg font-bold">Sidebar</h2>
            <p>Some random content that will goes here...</p>
        </motion.div>

    </div>
  )
}

export default SidebarAnimation