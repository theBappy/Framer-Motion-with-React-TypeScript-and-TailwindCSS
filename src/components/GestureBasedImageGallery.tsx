import { AnimatePresence, motion } from "framer-motion"
import { image } from "framer-motion/client"
import { useState } from "react"

const images = [
       "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?q=80&w=3867&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       "https://images.unsplash.com/photo-1445964047600-cdbdb873673d?q=80&w=3784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       "https://images.unsplash.com/photo-1482784160316-6eb046863ece?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=3841&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

const GestureBasedImageGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleSwipe = (_:any, info: any) => {
        if(info.offset.y > 100){
            setCurrentIndex(prev => (prev - 1 + images.length) % images.length)
        }
        else if(info.offset.y < -100){
            setCurrentIndex(prev => (prev + 1) % images.length)
        }
    }

  return (
    <div 
    className="relative w-72 h-72 overflow-hidden"
    >
        <AnimatePresence>
            <motion.img 
            className="w-full h-full rounded"
            drag="y"
            dragConstraints={{ top: 0, bottom: 0}}
            onDragEnd={handleSwipe}
            initial={{opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            key={currentIndex}
            src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        </AnimatePresence>
    </div>
  )
}

export default GestureBasedImageGallery