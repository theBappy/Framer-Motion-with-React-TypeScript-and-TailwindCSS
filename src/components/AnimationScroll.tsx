import { motion, useScroll, useTransform } from "framer-motion"


const AnimationScroll = () => {
   const {scrollY} = useScroll()

   const scale = useTransform(scrollY, [0,1000],[1,0.5])
   const borderRadius = useTransform(scrollY, [0,1000],['0%', '50%'])
  return (
    <div className="relative h-screen overflow-hidden">
        <motion.img 
        src="https://i.pinimg.com/736x/ed/42/b8/ed42b8571dbe0a70cfd2326eb9676541.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ scale, borderRadius}}
        />
        <div className="sticky top-0 h-screen items-center justify-center flex ">
            <h1 className="text-4xl text-white">Scroll to animate</h1>
        </div>
    </div>
  )
}

export default AnimationScroll