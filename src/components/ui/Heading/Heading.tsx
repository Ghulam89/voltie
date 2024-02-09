import React from 'react';
import { motion } from 'framer-motion';
import {fadeIn,staggerContainer} from '@/utils/motion'
type Props = {
  name: string;
  color?:string;
  className?:string
};

const Heading: React.FC<Props> = ({ name,color,className }) => {
  const containerVariants = staggerContainer(0.1, 0.1); // Call staggerContainer with the desired values

  return (
    <motion.div
    variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
    <motion.h1
      className={`${className} font-[700] text-[2rem] md:text-[3rem] ${color =='black' ? 'text-black':'text-[#f5f5f5]'} `}
      variants={fadeIn("up", "tween", 0.2, 1)}
    >
      {name}
    </motion.h1>
    </motion.div>
  
  );
};

export default Heading;
