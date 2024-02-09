import React from 'react'
import { motion } from 'framer-motion';
import {fadeIn,staggerContainer} from '@/utils/motion'

type Props = {
    name :string
    color?:string
}
const Description:React.FC<Props> = ({name,color}) => {
  const containerVariants = staggerContainer(0.1, 0.1); // Call staggerContainer with the desired values

  return (
    <motion.div
    variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.20 }}
    >
    <motion.p
      className={`text-[13px] md:text-[15px] ${color == 'black' ? 'text-black':'text-[#f5f5f5]'}  text-justify md:text-left`}
      variants={fadeIn("up", "tween", 0.2, 0.4)}
    >
      {name}
    </motion.p>
    </motion.div>
   )
}

export default Description

