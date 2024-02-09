import React from 'react'
import { motion } from 'framer-motion';
import {fadeIn,staggerContainer} from '@/utils/motion'
type Props = {
    name :string,
    color?:string
}

const SubHeading:React.FC<Props> = ({name,color}) => {
  const containerVariants = staggerContainer(0.1, 0.1); // Call staggerContainer with the desired values

  return (
    <motion.div
    variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
  <motion.h2
    variants={fadeIn("up", "tween", 0.5, 1)}
    className={`font-[500] ${color == 'black' ? 'text-black':'text-[#f5f5f5]'}  py-3.5 text-[1.25rem] md:text-[1.5rem]`}>{name}</motion.h2>
    </motion.div>
  )
}

export default SubHeading

