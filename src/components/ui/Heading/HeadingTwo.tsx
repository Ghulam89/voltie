import React from 'react'

type Props = {
    name :string
}
const HeadingTwo:React.FC<Props> = ({name}) => {
  return (
    <h1 className='font-[600] text-[1.5rem] md:text-[2.5rem] text-[#f5f5f5]'>{name}</h1>
  )
}

export default HeadingTwo