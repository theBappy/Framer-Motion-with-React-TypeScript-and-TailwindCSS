import {motion} from 'framer-motion'

const Box = () => {
  return (
    <motion.div
    className='bg-blue-200 h-20 w-20'
    initial={{ x: -100 }}
    animate ={{ x: 100 }}
    transition={{duration : 2}}
    />
  )
}

export default Box