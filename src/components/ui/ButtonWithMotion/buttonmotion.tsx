import React from 'react'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const MotionButton = () => {
  return (
    <button className={`
   fixed w-10 h-10 bottom-4 left-1/2 transform
    -translate-x-1/2 p-2 bg-black text-white rounded-md cursor-pointer 
     z-50 transition-transform duration-1000 hover:scale-100`}>
        
   </button>
  )
}

export default MotionButton