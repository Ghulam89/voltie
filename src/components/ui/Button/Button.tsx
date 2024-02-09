import React from 'react'

type Props = {
    name :string,
    bgColor?:string
}
const Button:React.FC<Props> = ({name,bgColor}) => {
  return (
    <button className={`
    ${bgColor == 'white' ? 'bg-[#f5f5f5] text-black':bgColor == 'black'? 'bg-black text-[#f5f5f5]': 'bg-[#38B6FF] text-[#f5f5f5]'}
    text-[16px] font-[500] tracking-[1px] px-8 py-2 rounded-md shadow-lg w-max min-w-[12rem] max-w-[20rem]`}>{name}</button>
  )
}

export default Button